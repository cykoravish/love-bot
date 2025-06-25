const API_BASE = import.meta.env.VITE_API_BASE;

export async function saveChat(messages:any) {
  const response = await fetch(`${API_BASE}/chats`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
  });
  return response.json();
}

export async function getAllChats() {
  const response = await fetch(`${API_BASE}/chats`);
  console.log("all chats response", response);
  return response.json();
}
//////////////////////////////////////////////////////

export const scheduleMeeting = async (date:any, time:any) => {
  console.log("date. time", date, time);
  const res = await fetch(`${API_BASE}/meetings/schedule`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ date, time }),
  });
  return await res.json();
};

export const getMeetings = async () => {
  const res = await fetch(`${API_BASE}/meetings`);
  return await res.json();
};

export const cancelMeeting = async (id:any) => {
  const res = await fetch(`${API_BASE}/meetings/${id}`, { method: "DELETE" });
  return await res.json();
};

export const updateMeeting = async (id:any, date:any, time:any) => {
  const res = await fetch(`${API_BASE}/meetings/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ date, time }),
  });
  return await res.json();
};