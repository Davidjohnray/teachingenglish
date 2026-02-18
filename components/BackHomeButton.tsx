'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BackHomeButton() {
  const pathname = usePathname();

  // Do not show button on homepage
  if (pathname === '/') return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href="/"
        className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300"
      >
        ← Back Home
      </Link>
    </div>
  );
}
