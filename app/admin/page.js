"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminMessages() {
  const router = useRouter();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔐 CHECK LOGIN ON LOAD
  useEffect(() => {
    const loggedIn = localStorage.getItem("adminLoggedIn");
    if (!loggedIn) {
      router.push("/admin/login");
      return;
    }

    fetchMessages();
  }, []);

  async function fetchMessages() {
    const res = await fetch("/api/messages");
    const data = await res.json();
    setMessages(data);
    setLoading(false);
  }

  async function deleteMessage(id) {
    await fetch(`/api/delete-message?id=${id}`, { method: "DELETE" });
    fetchMessages();
  }

  function logout() {
    localStorage.removeItem("adminLoggedIn");
    router.push("/admin/login");
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin Messages</h1>

      <button onClick={logout} style={{ marginBottom: 20 }}>
        Logout
      </button>

      {messages.length === 0 && <p>No messages</p>}

      {messages.map((msg) => (
        <div
          key={msg.id}
          style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}
        >
          <p><b>Name:</b> {msg.name}</p>
          <p><b>Email:</b> {msg.email}</p>
          <p>{msg.message}</p>

          <button onClick={() => deleteMessage(msg.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
