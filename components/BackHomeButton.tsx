"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BackHomeButton() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <Link
      href="/"
      className="fixed bottom-6 right-6 bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 transition z-50"
    >
      ← Back Home
    </Link>
  );
}
