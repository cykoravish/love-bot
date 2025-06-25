import express from "express";
import Chat from "../models/Chat.js";

const router = express.Router();

// Create new chat
router.post("/", async (req, res) => {
  try {
    const newChat = new Chat({ messages: req.body.messages });
    const savedChat = await newChat.save();
    res.status(201).json(savedChat);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all chats
router.get("/", async (req, res) => {
  try {
    const chats = await Chat.find().sort({ createdAt: -1 });
    res.json(chats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
