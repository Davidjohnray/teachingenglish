"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminMessagesPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    if (status === "loading") return;

    // 🔒 HARD BLOCK non-admins
    if (!session || (session.user as any).role !== "admin") {
      router.push("/dashboard");
      return;
    }

    const stored =
      JSON.parse(localStorage.getItem("contactMessages") || "[]");
    setMessages(stored);
  }, [session, status, router]);

  function deleteMessage(index: number) {
    const updated = messages.filter((_, i) => i !== index);
    setMessages(updated);
    localStorage.setItem("contactMessages", JSON.stringify(updated));
  }

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>📩 Admin Messages</h1>

      {messages.length === 0 && <p>No messages yet.</p>}

      {messages.map((msg, i) => (
        <div
          key={i}
          style={{
            border: "1px solid #ccc",
            padding: 10,
            marginBottom: 10,
          }}
        >
          <p><strong>Name:</strong> {msg.name}</p>
          <p><strong>Email:</strong> {msg.email}</p>
          <p><strong>Message:</strong> {msg.message}</p>

          <button onClick={() => deleteMessage(i)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
