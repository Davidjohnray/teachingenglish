"use client";

import { useState } from "react";

export default function ContactPage() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget; // ✅ store reference immediately
    setLoading(true);

    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contactdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const data = await res.json();

      if (data.success) {
        form.reset(); // ✅ safe now
        setSuccess(true);
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      alert("Network error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Your name"
          className="w-full border p-3 rounded"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Your email"
          className="w-full border p-3 rounded"
          required
        />

        <textarea
          name="message"
          placeholder="Your message"
          rows={5}
          className="w-full border p-3 rounded"
          required
        />

        <button
          disabled={loading}
          className="bg-indigo-600 text-white px-6 py-3 rounded"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {success && (
        <p className="mt-4 text-green-600 font-medium">
          Message sent successfully ✅
        </p>
      )}
    </div>
  );
}
