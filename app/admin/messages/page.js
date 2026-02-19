"use client";

import { useEffect, useState } from "react";

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("adminMessages");
    if (stored) {
      setMessages(JSON.parse(stored));
    }
    setLoaded(true);
  }, []);

  function deleteMessage(index) {
    const updated = messages.filter((_, i) => i !== index);
    setMessages(updated);
    localStorage.setItem("adminMessages", JSON.stringify(updated));
  }

  function deleteAll() {
    localStorage.removeItem("adminMessages");
    setMessages([]);
  }

  if (!loaded) {
    return <p>Loading messages...</p>;
  }

  return (
    <div style={{ maxWidth: 800, margin: "40px auto" }}>
      <h1>Admin Messages</h1>

      {messages.length > 0 && (
        <button onClick={deleteAll} style={{ marginBottom: 20 }}>
          Delete All Messages
        </button>
      )}

      {messages.length === 0 && <p>No messages found.</p>}

      {messages.map((msg, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: 10,
            marginBottom: 10,
          }}
        >
          <p><strong>Name:</strong> {msg.name}</p>
          <p><strong>Email:</strong> {msg.email}</p>
          <p><strong>Message:</strong> {msg.message}</p>

          <button onClick={() => deleteMessage(index)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
