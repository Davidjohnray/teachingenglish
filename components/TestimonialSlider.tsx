"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    name: "Maria S.",
    country: "Spain",
    text: "I felt comfortable speaking English from the first lesson. The classes are relaxed, clear, and very practical for real life.",
  },
  {
    name: "James L.",
    country: "UK",
    text: "Excellent Business English lessons. Very professional, well-structured, and tailored exactly to my job needs.",
  },
  {
    name: "Ananya P.",
    country: "India",
    text: "My IELTS speaking confidence improved quickly. Clear feedback, great explanations, and very supportive teaching style.",
  },
  {
    name: "Thomas R.",
    country: "Germany",
    text: "Lessons are enjoyable and never boring. The teacher adapts perfectly to your level and interests.",
  },
  {
    name: "Nok K.",
    country: "Thailand",
    text: "Friendly British teacher with clear pronunciation. Helped me feel confident speaking with foreigners at work.",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  return (
    <section className="bg-indigo-600 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-4">
          What Students Say
        </h2>
        <p className="text-indigo-200 mb-12">
          Real feedback from students around the world
        </p>

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white text-gray-800 rounded-2xl p-10 shadow-lg"
        >
          <p className="text-lg italic mb-6">
            “{testimonials[index].text}”
          </p>

          <p className="font-semibold">
            {testimonials[index].name}
          </p>
          <p className="text-sm text-gray-500">
            {testimonials[index].country}
          </p>
        </motion.div>

        {/* Controls */}
        <div className="flex justify-center gap-6 mt-8">
          <button
            onClick={prev}
            className="border border-white px-5 py-2 rounded-full hover:bg-white hover:text-indigo-600 transition"
          >
            ←
          </button>
          <button
            onClick={next}
            className="border border-white px-5 py-2 rounded-full hover:bg-white hover:text-indigo-600 transition"
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
}
