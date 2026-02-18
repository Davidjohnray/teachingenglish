import Link from "next/link";

export default function BookPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">

          <h1 className="text-4xl font-bold mb-6">
            Book Your Free 15-Minute Trial
          </h1>

          <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
            This short trial lesson is a relaxed introduction — we’ll get to
            know each other, talk about your goals, and see how I can help
            you improve your English.
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-10 flex justify-center gap-4">
            <Link href="/">
              <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition">
                Back to Home
              </button>
            </Link>

            <Link href="/free-trial">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-xl transition">
                Book a Free Trial
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Happens in the Free Trial?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <Step
            number="1"
            title="Get to Know You"
            text="We talk about your background, level, and why you want to improve your English."
          />

          <Step
            number="2"
            title="Assess Your Needs"
            text="I listen to how you speak and identify areas we can improve together."
          />

          <Step
            number="3"
            title="Plan Your Learning"
            text="I explain how lessons or courses would work based on your goals."
          />

        </div>
      </section>

      {/* INFO BOX */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-2xl p-8 shadow-md">

          <h3 className="text-2xl font-semibold mb-4">
            Important Information
          </h3>

          <ul className="space-y-3 text-gray-700">
            <li>⏱️ Duration: <strong>15 minutes</strong></li>
            <li>💻 Online (Zoom / Google Meet)</li>
            <li>🎓 No teaching pressure – just conversation</li>
            <li>💬 Ask any questions you like</li>
            <li>❌ No obligation to continue</li>
          </ul>

        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-4">
            Ready to Book Your Free Trial?
          </h2>

          <p className="text-gray-600 mb-8">
            Choose a time that works for you. I look forward to meeting you.
          </p>

          <div className="bg-white border-2 border-dashed border-gray-300 rounded-xl p-10 text-gray-500">
            <p className="font-semibold">
              Booking Calendar Goes Here
            </p>
            <p className="text-sm mt-2">
              (Calendly / Tidycal embed)
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}

/* STEP COMPONENT */

function Step({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm text-center">
      <div className="text-3xl font-bold text-indigo-600 mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>
      <p className="text-gray-600">
        {text}
      </p>
    </div>
  );
}
