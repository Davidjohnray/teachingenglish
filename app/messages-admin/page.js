"use client";

import { useEffect, useState } from "react";

const ADMIN_PASSWORD = "admin123"; // change later

export default function AdminMessagesPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [messages, setMessages] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const auth = sessionStorage.getItem("admin-auth");
    if (auth === "true") {
      setAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (!authenticated) return;

    const stored = localStorage.getItem("adminMessages");
    if (stored) {
      setMessages(JSON.parse(stored));
    }
    setLoaded(true);
  }, [authenticated]);

  function login() {
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem("admin-auth", "true");
      setAuthenticated(true);
    } else {
      alert("Wrong admin password");
    }
  }

  function logout() {
    sessionStorage.removeItem("admin-auth");
    setAuthenticated(false);
  }

  function deleteMessage(index) {
    const updated = messages.filter((_, i) => i !== index);
    setMessages(updated);
    localStorage.setItem("adminMessages", JSON.stringify(updated));
  }

  function deleteAll() {
    localStorage.removeItem("adminMessages");
    setMessages([]);
  }

  /* 🔐 LOGIN SCREEN */
  if (!authenticated) {
    return (
      <div style={{ maxWidth: 400, margin: "100px auto" }}>
        <h1>Admin Login</h1>
        <input
          type="password"
          value={password}
          placeholder="Admin password"
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: 10, marginBottom: 10 }}
        />
        <button onClick={login} style={{ width: "100%", padding: 10 }}>
          Login
        </button>
      </div>
    );
  }

  /* 📩 MESSAGES */
  if (!loaded) return <p>Loading messages...</p>;

  return (
    <div style={{ maxWidth: 800, margin: "40px auto" }}>
      <h1>Admin Messages</h1>

      <button onClick={logout} style={{ marginBottom: 20 }}>
        Admin Sign Out
      </button>

      {messages.length > 0 && (
        <button onClick={deleteAll} style={{ marginLeft: 10 }}>
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
