"use client";

import { useEffect, useState } from "react";

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("adminMessages") || "[]");
    setMessages(stored);
  }, []);

  function deleteMessage(id: number) {
    const updated = messages.filter((m) => m.id !== id);
    setMessages(updated);
    localStorage.setItem("adminMessages", JSON.stringify(updated));
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Messages</h1>

      {messages.length === 0 && <p>No messages yet.</p>}

      <div className="space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="border p-4 rounded flex justify-between items-start"
          >
            <div>
              <p><strong>Name:</strong> {msg.name}</p>
              <p><strong>Email:</strong> {msg.email}</p>
              <p className="mt-2">{msg.message}</p>
              <p className="text-sm text-gray-500 mt-2">{msg.date}</p>
            </div>

            <button
              onClick={() => deleteMessage(msg.id)}
              className="text-red-600 font-semibold"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
