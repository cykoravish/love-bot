import { useState } from "react";

export default function MeetingScheduler({
  show,
  onClose,
  onSubmit,
  loading,
}: any) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  if (!show) return null;

  const handleSubmit = () => {
    const selectedDateTime = new Date(`${date}T${time}`);
    if (selectedDateTime <= new Date()) {
      alert("Past time nahi baby ❤️");
      return;
    }
    onSubmit(date, time);
    setDate("");
    setTime("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-sm">
        <h2 className="text-2xl font-bold text-amber-600 mb-4 font-serif">
          Schedule Meeting ❤️
        </h2>

        <div className="flex flex-col gap-4">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="p-3 border border-amber-400 rounded-xl"
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="p-3 border border-amber-400 rounded-xl"
          />

          <div className="flex justify-between">
            <button onClick={onClose} className="border p-2 rounded-xl">
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`${
                loading ? "bg-amber-400" : "bg-amber-500"
              } text-white p-2 rounded-xl`}
            >
              {loading ? "scheduling..." : "Save ❤️"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
