"use client";

export default function Client({ messages }) {
  async function del(date) {
    await fetch("/admin/delete-message", {

      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date }),
    });

    window.location.reload();
  }

  return (
    <>
      {messages.map((m) => (
        <div key={m.date} style={{ border: "1px solid #ccc", margin: 10 }}>
          <p>{m.name}</p>
          <p>{m.email}</p>
          <p>{m.message}</p>
          <button
  onClick={() => del(m.date)}
  style={{
    marginTop: "8px",
    backgroundColor: "#dc2626",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer",
  }}
>
  Delete
</button>

        </div>
      ))}
    </>
  );
}
