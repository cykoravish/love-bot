import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  sender: String,  // "user" or "bot"
  text: String,
  timestamp: { type: Date, default: Date.now }
});

const chatSchema = new mongoose.Schema({
  messages: [messageSchema],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Chat", chatSchema);
