import Link from "next/link";
import TestimonialSlider from "@/components/TestimonialSlider";

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Learn English with Confidence
              <span className="block text-yellow-300 mt-2">
                Speak. Travel. Succeed.
              </span>
            </h1>

            <p className="text-lg text-blue-100 mb-8">
              Friendly one-to-one online English lessons for business,
              IELTS preparation, travel, and everyday conversation.
            </p>

            <div className="flex flex-wrap gap-4">
              {/* ✅ FIXED VIEW COURSES BUTTON */}
              <Link
                href="/courses"
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full transition"
              >
                View Courses
              </Link>

              <Link
                href="/free-trial"
                className="border border-white hover:bg-white hover:text-indigo-700 font-semibold px-6 py-3 rounded-full transition"
              >
                Book a Free Trial
              </Link>
            </div>
          </div>

          {/* RIGHT INFO BOX */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 shadow-lg">
            <ul className="space-y-4 text-lg">
              <li>✅ Business English</li>
              <li>✅ IELTS Preparation</li>
              <li>✅ Travel & Social English</li>
              <li>✅ One-to-One Online Classes</li>
              <li>✅ British Accent</li>
            </ul>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialSlider />
    </main>
  );
}
