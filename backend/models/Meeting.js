import mongoose from "mongoose";

const meetingSchema = new mongoose.Schema({
  date: String,
  time: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Meeting", meetingSchema);
