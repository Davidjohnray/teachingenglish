"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-xl font-bold text-indigo-600">
          TeachingEnglish
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/courses">Courses</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>

          <Link
            href="/free-trial"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Book Free Trial
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-6 space-y-4">

          <Link href="/courses" onClick={() => setMenuOpen(false)}>
            Courses
          </Link>

          <Link href="/pricing" onClick={() => setMenuOpen(false)}>
            Pricing
          </Link>

          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>

          <Link
            href="/free-trial"
            onClick={() => setMenuOpen(false)}
            className="block bg-indigo-600 text-white text-center py-3 rounded-lg"
          >
            Book Free Trial
          </Link>

        </div>
      )}
    </header>
  );
}
