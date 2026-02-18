"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const router = useRouter();

  // 🔐 PROTECT PAGE (PC + MOBILE)
  useEffect(() => {
    const loggedIn = localStorage.getItem("adminLoggedIn_v2");

    if (loggedIn !== "true") {
      router.push("/admin/login");
      return;
    }

    const stored = JSON.parse(
      localStorage.getItem("adminMessages") || "[]"
    );
    setMessages(stored);
  }, [router]);

  // ❌ DELETE MESSAGE
  function deleteMessage(id: number) {
    const updated = messages.filter((m) => m.id !== id);
    setMessages(updated);
    localStorage.setItem("adminMessages", JSON.stringify(updated));
  }

  // 🚪 LOGOUT
  function handleLogout() {
    localStorage.removeItem("adminLoggedIn_v2");
    router.push("/admin/login");
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Messages</h1>

        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {/* EMPTY STATE */}
      {messages.length === 0 && (
        <p className="text-gray-600">No messages yet.</p>
      )}

      {/* MESSAGES */}
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
