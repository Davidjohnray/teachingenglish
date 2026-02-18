"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TestimonialSlider from "@/components/TestimonialSlider";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* HERO */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-8">
            <Image
              src="/about-me-v2.jpg"
              alt="British English Teacher"
              width={220}
              height={220}
              priority
              className="rounded-full shadow-lg"
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            About Me
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-3xl mx-auto">
            British English teacher with over 20 years of experience helping
            students speak confidently and naturally.
          </p>
        </motion.section>

        {/* INTRODUCTION */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-sm p-10 mb-16"
        >
          <h2 className="text-3xl font-extrabold mb-6 tracking-tight">
            Introduction 👋
          </h2>

          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            Hi, I am a British English language teacher, born in England (UK).
            I have been teaching English for the past <strong>20 years</strong>,
            working with students of all ages — from Kindergarten to adults.
          </p>

          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
            My classes are fun, friendly, and interactive. I understand that
            speaking English can be challenging, so I focus on creating a
            relaxed environment where students feel confident and supported.
          </p>

          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            I am experienced in teaching <strong>IELTS</strong>, general
            conversation, and <strong>Business English</strong>. I’m always
            excited to meet new students and help them achieve their goals.
          </p>
        </motion.section>

        {/* TEACHING STYLE */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-extrabold mb-6 tracking-tight">
            Teaching Style ✍️
          </h2>

          <div className="bg-white rounded-2xl shadow-sm p-10">
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
              I would describe my teaching style as highly adaptable. I don’t
              believe in using only one teaching method or one way of working
              with students.
            </p>

            <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
              Every class is different, every student is different, and a good
              teacher should always adjust their approach to suit the student,
              lesson difficulty, and learning goals.
            </p>

            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              I strongly prefer a personal, individual approach that helps
              students improve naturally and confidently.
            </p>
          </div>
        </motion.section>

        {/* LEVELS & SKILLS */}
        <section className="grid md:grid-cols-2 gap-10 mb-16">
          {[
            {
              title: "Preferred Levels",
              items: [
                "True Beginner",
                "Beginner",
                "Intermediate",
                "Upper Intermediate",
                "Advanced",
              ],
            },
            {
              title: "Language Skills",
              items: [
                "Conversation Practice",
                "English for Business",
                "English for Interviews",
                "English for Travel",
                "Accent Reduction",
                "Pronunciation",
                "Reading & Listening",
                "Vocabulary Building",
                "IELTS Test Preparation",
              ],
            },
          ].map((box, i) => (
            <motion.div
              key={box.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-sm p-8"
            >
              <h3 className="text-2xl font-extrabold mb-4">
                {box.title}
              </h3>

              <ul className="space-y-2 text-lg text-gray-800 font-medium">
                {box.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </section>

        {/* INDUSTRIES */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-sm p-10 mb-16"
        >
          <h2 className="text-3xl font-extrabold mb-6 tracking-tight">
            Industry Familiarity
          </h2>

          <div className="grid md:grid-cols-2 gap-3 text-lg text-gray-800 font-medium">
            <p>💼 Business & Finance</p>
            <p>📈 Marketing & Sales</p>
            <p>🔬 Science</p>
            <p>🩺 Health Care</p>
            <p>💻 Technology & AI</p>
            <p>🏫 Education</p>
            <p>🏭 Engineering & Manufacturing</p>
            <p>👥 Human Resources</p>
            <p>🎤 Entertainment</p>
            <p>🪙 Bitcoin / Blockchain</p>
          </div>
        </motion.section>

        {/* PERSONAL */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-sm p-10 mb-16"
        >
          <h2 className="text-3xl font-extrabold mb-6 tracking-tight">
            A Little About Me 🌍
          </h2>

          <p className="text-lg md:text-xl text-gray-800 mb-4">
            I enjoy watching sports, especially football. I follow the English
            Premier League, but my favourite team is Swindon Town, who play in
            English League Two.
          </p>

          <p className="text-lg md:text-xl text-gray-800 mb-4">
            I also enjoy ice hockey, American football, and the Olympics. When
            relaxing, I like watching movies and TV series such as Harry Potter,
            Lord of the Rings, Star Wars, Game of Thrones, House of the Dragon,
            Peaky Blinders, Squid Game, and documentaries.
          </p>

          <p className="text-lg md:text-xl text-gray-800">
            Travelling is another passion of mine. I’ve visited countries
            including Canada, the USA, Thailand, New Zealand, and many European
            countries. I love learning about history, architecture, and culture.
          </p>
        </motion.section>

        {/* TESTIMONIALS */}
        <TestimonialSlider />

        {/* CTA */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <h2 className="text-4xl font-extrabold mb-4">
            Let’s Learn Together
          </h2>

          <p className="text-xl text-gray-700 mb-8">
            Book a free 15-minute trial and let’s talk about your goals.
          </p>

          <a
            href="/free-trial"
            className="inline-block bg-indigo-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-indigo-700 transition"
          >
            Book a Free Trial
          </a>
        </motion.section>

      </div>
    </main>
  );
}
