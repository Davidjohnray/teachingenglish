'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="text-2xl font-extrabold text-blue-600">
          TeachingEnglish
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 font-semibold">
          <Link href="/courses" className="hover:text-blue-600">Courses</Link>
          <Link href="/pricing" className="hover:text-blue-600">Pricing</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>

          {/* ✅ ADMIN BUTTON */}
          <Link
            href="/admin/messages"
            className="hover:text-blue-600"
          >
            Admin
          </Link>

          <Link
            href="/free-trial"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Free Trial
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl font-bold"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="flex flex-col px-6 py-6 gap-4 text-lg font-semibold">

            <Link href="/courses" onClick={() => setMenuOpen(false)}>Courses</Link>
            <Link href="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

            {/* ✅ ADMIN BUTTON (MOBILE) */}
            <Link
              href="/admin/messages"
              onClick={() => setMenuOpen(false)}
            >
              Admin
            </Link>

            <Link
              href="/free-trial"
              onClick={() => setMenuOpen(false)}
              className="mt-4 bg-blue-600 text-white text-center py-3 rounded-lg"
            >
              Book Free Trial
            </Link>

          </div>
        </div>
      )}
    </header>
  )
}
