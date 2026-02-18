import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import BackHomeButton from '@/components/BackHomeButton';

export const metadata: Metadata = {
  title: 'TeachingEnglish | British English Teacher',
  description:
    'Learn English with a qualified British English teacher. IELTS, Business English, conversation practice and more.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />

        <main className="pt-24 min-h-screen">
          {children}
        </main>

        <BackHomeButton />
      </body>
    </html>
  );
}
