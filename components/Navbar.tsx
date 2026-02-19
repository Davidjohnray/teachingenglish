"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link href="/" className="text-xl font-bold text-blue-600">
          TeachingEnglish
        </Link>

        <div className="flex items-center gap-4 text-gray-800 font-medium">
          <Link href="/courses">Courses</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>

          <Link
            href="/dashboard"
            className="px-3 py-2 border border-green-600 text-green-600 rounded hover:bg-green-600 hover:text-white"
          >
            Dashboard
          </Link>

          <Link
            href="/messages-admin"
            className="px-3 py-2 border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white"
          >
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
}
