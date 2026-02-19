"use client";

import { lesson } from "@/lib/lesson";
import { useSession } from "next-auth/react";

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Student Dashboard
      </h1>

      <div className="border rounded-lg p-6 shadow-sm bg-white mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Upcoming Lesson
        </h2>

        <p className="text-gray-700">
          📅 <strong>Date:</strong> {lesson.date}
        </p>
        <p className="text-gray-700 mb-4">
          ⏰ <strong>Time:</strong> {lesson.time}
        </p>

        <a
          href={lesson.zoomLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded font-semibold hover:bg-green-700 transition"
        >
          Join Live Class
        </a>
      </div>

      {session && (
        <a
          href="https://wa.me/447912345678"
          target="_blank"
          className="inline-block bg-emerald-600 text-white px-6 py-3 rounded font-semibold"
        >
          💬 Message me on WhatsApp
        </a>
      )}
    </div>
  );
}
