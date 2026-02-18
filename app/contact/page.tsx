"use client";

import { useState } from "react";

export default function ContactPage() {
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const message = {
      id: Date.now(),
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      date: new Date().toLocaleString(),
    };

    const existing =
      JSON.parse(localStorage.getItem("adminMessages") || "[]");

    localStorage.setItem(
      "adminMessages",
      JSON.stringify([message, ...existing])
    );

    form.reset();
    setSuccess(true);
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Your name" required className="w-full border p-3 rounded" />
        <input name="email" type="email" placeholder="Your email" required className="w-full border p-3 rounded" />
        <textarea name="message" placeholder="Your message" rows={5} required className="w-full border p-3 rounded" />

        <button className="bg-indigo-600 text-white px-6 py-3 rounded">
          Send Message
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
