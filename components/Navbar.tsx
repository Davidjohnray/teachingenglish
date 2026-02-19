"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          TeachingEnglish
        </Link>

        {/* NAV LINKS */}
        <div className="flex items-center gap-6 text-gray-800 font-medium">

          <Link href="/courses" className="hover:text-blue-600">
            Courses
          </Link>

          <Link href="/pricing" className="hover:text-blue-600">
            Pricing
          </Link>

          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>

          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>

          {/* AUTH BUTTON */}
          {status === "loading" ? null : session ? (
            <>
              <Link
                href="/dashboard"
                className="hover:text-blue-600 font-semibold"
              >
                Dashboard
              </Link>

              <button
                onClick={() => signOut()}
                className="text-red-600 font-semibold"
              >
                Sign out
              </button>
            </>
          ) : (
            <button
              onClick={() => signIn()}
              className="text-blue-600 font-semibold"
            >
              Sign in
            </button>
          )}

          <Link
            href="/free-trial"
            className="ml-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Free Trial
          </Link>

        </div>
      </div>
    </nav>
  );
}
