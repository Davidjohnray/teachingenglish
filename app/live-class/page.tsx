"use client";

import { useEffect } from "react";

export default function LiveClassPage() {

  useEffect(() => {
    const now = new Date();
    const classStart = new Date("2026-02-18T19:00:00");
    const classEnd   = new Date("2026-02-18T20:00:00");

    if (now < classStart || now > classEnd) {
      window.location.href = "/dashboard";
    }
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Live Lesson</h1>

      <iframe
        src="https://zoom.us/j/YOUR_MEETING_ID"
        className="w-full h-[600px] border rounded"
        allow="camera; microphone; fullscreen"
      />
    </div>
  );
}
