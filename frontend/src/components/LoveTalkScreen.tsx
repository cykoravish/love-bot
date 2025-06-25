import { useState, useRef, useEffect } from "react";
import { getGeminiResponse } from "../api/gemini";
import { saveChat } from "../services/chatService";
import MeetingScheduler from "../components/MeetingScheduler";
import { scheduleMeeting } from "../services/chatService";

export default function LoveTalkScreen() {
  const [question, setQuestion] = useState("Oye, kaise hai? ❤️");
  const [answer, setAnswer] = useState("");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    {
      role: "user",
      parts: [
        {
          text: `You're Ravish's chatbot lover version. Your job is to talk to his girlfriend Deepu in desi Indian Hinglish, just like Indian boyfriends. Keep replies extremely short with love emojis — max 1-2 lines only, casual, playful, flirty. Use words like oye, sun na, pagal, baby, babu, Deepu, and i love you often. Never be formal, avoid big explanations, and never give more than 20 words in a reply.`,
        },
      ],
    },
  ]);

  const textareaRef: any = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [answer]);

  const handleSend = async () => {
    if (!input.trim()) return;

    setLoading(true);
    const userInput = input;
    setInput("");

    const newHistory = [
      ...chatHistory,
      { role: "user", parts: [{ text: userInput }] },
    ];

    const response = await getGeminiResponse(newHistory);

    const updatedHistory = [
      ...newHistory,
      { role: "model", parts: [{ text: response }] },
    ];

    setChatHistory(updatedHistory);

    const chatMessages = [
      { sender: "user", text: userInput },
      { sender: "bot", text: response },
    ];

    try {
      await saveChat(chatMessages);
    } catch (err) {
      console.error("Failed to save chat:", err);
    }

    setAnswer(response);
    setLoading(false);
  };

  const handleNext = () => {
    setAnswer("");
    setQuestion(answer);
  };

  const TypingDots = () => (
    <div className="flex gap-2 justify-center items-center mt-4">
      <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce [animation-delay:0s]" />
      <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce [animation-delay:0.15s]" />
      <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce [animation-delay:0.3s]" />
    </div>
  );

  const handleScheduleSubmit = async (date: any, time: any) => {
    setLoading(true);
    try {
      await scheduleMeeting(date, time);
      alert(`Meeting fixed for ${date} at ${time} ❤️`);
      setShowSchedule(false);
    } catch (err) {
      console.error("Meeting scheduling error:", err);
      alert("Meeting schedule failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-4 text-center relative">
      <button
        onClick={() => setShowSchedule(true)}
        className="absolute top-4 right-4 bg-amber-500 text-white rounded-full p-3 shadow-lg hover:bg-amber-600 transition active:scale-95"
      >
        📅
      </button>

      {!answer ? (
        <>
          <h1 className="text-3xl md:text-5xl font-bold text-amber-600 mb-8 font-serif break-words max-w-xs md:max-w-2xl">
            {question}
          </h1>

          <div className="flex flex-col gap-4 w-full max-w-sm">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tera jawaab likh yahan..."
              rows={3}
              className="p-3 border border-amber-500 rounded-xl focus:outline-none resize-none text-base"
            ></textarea>

            <button
              onClick={handleSend}
              disabled={loading}
              className={`px-4 py-3 bg-amber-500 text-white rounded-xl font-semibold hover:bg-amber-600 active:scale-95 transition ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Typing..." : "Send ❤️"}
            </button>

            {loading && <TypingDots />}
          </div>
        </>
      ) : (
        <>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-amber-600 mb-8 font-serif break-words max-w-xs sm:max-w-sm md:max-w-2xl">
            {answer}
          </h1>

          <button
            onClick={handleNext}
            className="px-4 py-3 bg-amber-500 text-white rounded-xl font-semibold hover:bg-amber-600 active:scale-95 transition"
          >
            Next ➡️
          </button>
        </>
      )}

      <MeetingScheduler
        show={showSchedule}
        onClose={() => setShowSchedule(false)}
        onSubmit={handleScheduleSubmit}
        loading={loading}
      />
    </div>
  );
}
