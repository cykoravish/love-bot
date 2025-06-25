
import { useEffect, useState } from "react";
import { getAllChats } from "../services/chatService";
// import { getMeetings } from "../services/chatService";

export default function Dashboard() {
  const [chats, setChats] = useState([]);
  // const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const chatData = await getAllChats();
      // const meetingData = await getMeetings();
      setChats(chatData);
      // setMeetings(meetingData);
    };
    fetchData();
  }, []);

  // const getRemainingTime = (date:any, time:any) => {
  //   const now:any = new Date();
  //   const meetingTime:any = new Date(`${date}T${time}`);
  //   const diff = meetingTime - now;

  //   if (diff <= 0) return "Hoye hoye — meeting ka time ho gaya!";

  //   const mins = Math.floor((diff / 1000 / 60) % 60);
  //   const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
  //   const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  //   return `${days}d ${hrs}h ${mins}m baad`;
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-6">
      <h1 className="text-4xl font-bold text-amber-600 text-center mb-10 font-serif">
        ❤️ LoveTalks Dashboard ❤️
      </h1>

      <div className="flex flex-col gap-8 max-w-3xl mx-auto">

        {/* Chats Section */}
        <div>
          <h2 className="text-2xl font-bold text-amber-600 mb-4">💬 Chat History</h2>
          {chats.length === 0 ? (
            <p className="text-center text-gray-500">No chats yet 😔</p>
          ) : (
            chats.map((chat:any) => (
              <div
                key={chat._id}
                className="p-4 border border-amber-300 rounded-xl bg-white shadow-md mb-6"
              >
                <p className="text-sm text-gray-400 mb-2">
                  Session started: {new Date(chat.createdAt).toLocaleString()}
                </p>
                <div className="space-y-2">
                  {chat.messages.map((msg:any, idx:any) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl max-w-full ${
                        msg.sender === "bot"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-amber-500 text-white"
                      }`}
                    >
                      <span className="font-semibold capitalize">{msg.sender}:</span>{" "}
                      {msg.text}
                      <p className="text-xs text-gray-400 mt-1">
                        {new Date(msg.timestamp).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Scheduled Meetings Section */}
        {/* <div>
          <h2 className="text-2xl font-bold text-amber-600 mb-4">📅 Scheduled Meetings</h2>
          {meetings.length === 0 ? (
            <p className="text-center text-gray-500">No meetings fixed yet 😔</p>
          ) : (
            <div className="space-y-3">
              {meetings?.map((m:any) => (
                <div
                  key={m._id}
                  className="p-4 border border-amber-300 rounded-xl bg-white flex justify-between items-center shadow"
                >
                  <div>
                    <div className="font-semibold text-amber-600">
                      📍 {m.date} at {m.time}
                    </div>
                    <div className="text-sm text-gray-500">
                      Scheduled on: {new Date(m.createdAt).toLocaleString()}
                    </div>
                  </div>
                  <div className="text-amber-500 font-bold text-sm text-right">
                    {getRemainingTime(m.date, m.time)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div> */}

      </div>
    </div>
  );
}
