import express from "express";
import Meeting from "../models/Meeting.js";
import nodemailer from "nodemailer";

const router = express.Router();


const sendEmail = async (subject, text) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"LoveBot ❤️" <${process.env.SMTP_EMAIL}>`,
    to: process.env.RECEIVER_EMAIL,
    subject,
    text,
  });
};

// schedule meeting
router.post("/schedule", async (req, res) => {
  const { date, time } = req.body;
  const now = new Date();
  const selectedDateTime = new Date(`${date}T${time}`);

  if (selectedDateTime <= now) {
    return res.status(400).json({ message: "Can't schedule past time" });
  }

  try {
    await Meeting.deleteMany(); // clear old one
    const meeting = await Meeting.create({ date, time });
    // Send email via nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"LoveBot ❤️" <${process.env.SMTP_EMAIL}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: "New Meeting Scheduled ❤️",
      text: `Meeting fixed for ${date} at ${time} with your pyari Deepu 💕`,
    });

    res.status(201).json(meeting);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});

// get all meetings
router.get("/", async (req, res) => {
  const meeting = await Meeting.findOne().sort({ createdAt: -1 });
  res.json(meeting);
});

router.delete("/:id", async (req, res) => {
  const meeting = await Meeting.findByIdAndDelete(req.params.id);

  if (meeting) {
    await sendEmail("Meeting Canceled ❌", `Meeting on ${meeting.date} at ${meeting.time} canceled.`);
    return res.json({ message: "Meeting canceled" });
  }
  res.status(404).json({ message: "Meeting not found" });
});

router.put("/:id", async (req, res) => {
  const { date, time } = req.body;
  const meeting = await Meeting.findById(req.params.id);

  if (meeting) {
    meeting.date = date;
    meeting.time = time;
    await meeting.save();

    await sendEmail("Meeting Updated 🔄", `New meeting time: ${date} at ${time}.`);

    return res.json(meeting);
  }
  res.status(404).json({ message: "Meeting not found" });
});

export default router;
