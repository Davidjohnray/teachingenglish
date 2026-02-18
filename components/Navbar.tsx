import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-indigo-600"
        >
          TeachingEnglish
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/courses"
            className="text-gray-700 hover:text-indigo-600"
          >
            Courses
          </Link>

          <Link
            href="/pricing"
            className="text-gray-700 hover:text-indigo-600"
          >
            Pricing
          </Link>

          <Link
            href="/about"
            className="text-gray-700 hover:text-indigo-600"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-gray-700 hover:text-indigo-600"
          >
            Contact
          </Link>

          {/* ✅ ADMIN BUTTON */}
          <Link
            href="/admin/login"
            className="text-gray-700 hover:text-indigo-600 font-semibold"
          >
            Admin
          </Link>

          <Link
            href="/free-trial"
            className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Free Trial
          </Link>
        </nav>

        {/* Mobile Menu Icon (visual only for now) */}
        <div className="md:hidden text-2xl cursor-pointer">
          ☰
        </div>

      </div>
    </header>
  );
}
