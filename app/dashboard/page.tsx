"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // CHANGE THESE WHEN NEEDED
  const zoomLink = "https://zoom.us"; // replace later
  const whatsappNumber = "66871033821"; // <-- YOUR WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const res = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Invalid login details");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white p-6">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* HEADER */}
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">Dashboard</h1>

          {session && (
            <button
              onClick={() => signOut()}
              className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg font-semibold"
            >
              Sign Out
            </button>
          )}
        </div>

        {/* MAIN CONTENT */}
        {session ? (
          <>
            {/* WELCOME CARD */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">
                Welcome, {session.user?.name || "User"}
              </h2>
              <p className="text-white/80">
                You now have access to your private dashboard.
              </p>
            </div>

            {/* ACTION CARDS */}
            <div className="grid md:grid-cols-2 gap-6">

              {/* JOIN CLASS */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-3">Join Class</h3>
                <p className="text-white/80 mb-4">
                  Click below to join your live Zoom class when available.
                </p>

                <Link
                  href={zoomLink}
                  target="_blank"
                  className="inline-block bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg font-semibold"
                >
                  Join Zoom Class
                </Link>
              </div>

              {/* WHATSAPP */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-3">Contact Me</h3>
                <p className="text-white/80 mb-4">
                  Need your login details or help? Message me directly on WhatsApp.
                </p>

                <Link
                  href={whatsappLink}
                  target="_blank"
                  className="inline-block bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg font-semibold"
                >
                  Message on WhatsApp
                </Link>
              </div>
            </div>
          </>
        ) : (
          /* LOGIN FORM (ON DASHBOARD) */
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Dashboard Sign In
            </h2>

            <form onSubmit={handleLogin} className="space-y-4">
              <input
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 rounded text-black"
                required
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded text-black"
                required
              />

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 px-5 py-2 rounded-lg font-semibold"
              >
                Sign In
              </button>
            </form>

            {error && (
              <p className="text-red-400 mt-4 text-center">{error}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
