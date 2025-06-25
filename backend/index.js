import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import chatRoutes from "./routes/chats.js";
import meetingRoutes from "./routes/meetingRoutes.js";

dotenv.config();

const app = express();
// app.use(cors());

app.use(
  cors({
    origin: ["https://love-bot-1-fd6w.onrender.com", "http://localhost:5173"], // or your deployed frontend URL
    credentials: true,               // if you're sending cookies/session
  })
);
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/chats", chatRoutes);
app.use("/api/meetings", meetingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
