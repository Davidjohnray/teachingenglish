"use client";

import { useState } from "react";
import Link from "next/link";

const rates = {
  USD: 1,
  GBP: 0.79,
  EUR: 0.92,
  THB: 32,
};

const symbols = {
  USD: "$",
  GBP: "£",
  EUR: "€",
  THB: "฿",
};

export default function PricingPage() {
  const [currency, setCurrency] = useState<keyof typeof rates>("USD");

  const convert = (usd: number) =>
    (usd * rates[currency]).toFixed(2);

  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Lesson Pricing
          </h1>
          <p className="text-gray-600 text-lg">
            One-to-one English lessons. Choose your currency.
          </p>

          {/* Currency Selector */}
          <div className="mt-6">
            <select
              value={currency}
              onChange={(e) =>
                setCurrency(e.target.value as keyof typeof rates)
              }
              className="border rounded-lg px-4 py-2"
            >
              <option value="USD">USD ($)</option>
              <option value="GBP">GBP (£)</option>
              <option value="EUR">EUR (€)</option>
              <option value="THB">THB (฿)</option>
            </select>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Pay As You Go */}
          <div className="bg-white rounded-xl border p-8">
            <h2 className="text-2xl font-bold mb-4">
              Pay As You Go
            </h2>

            <p className="mb-4">
              30-minute lesson
            </p>

            <p className="text-3xl font-bold">
              {symbols[currency]}{convert(10)}
            </p>

            <p className="text-sm text-gray-500 mt-2">
              ({symbols[currency]}{convert(20)} / hour)
            </p>

            <Link
              href="/free-trial"
              className="block mt-6 text-center border border-indigo-600 text-indigo-600 py-3 rounded-lg"
            >
              Book Free Trial
            </Link>
          </div>

          {/* 20 Lesson Pack */}
          <div className="bg-white rounded-xl border-2 border-indigo-600 p-8">
            <h2 className="text-2xl font-bold mb-4">
              20-Lesson Pack
            </h2>

            <p className="text-3xl font-bold">
              {symbols[currency]}{convert(190)}
            </p>

            <p className="text-sm text-gray-500 mt-2">
              10 hours • 5% discount
            </p>

            <p className="mt-4 text-gray-600">
              Effective rate:
              {" "}
              {symbols[currency]}{convert(19)} / hour
            </p>

            <Link
              href="/free-trial"
              className="block mt-6 text-center bg-indigo-600 text-white py-3 rounded-lg"
            >
              Book Free Trial
            </Link>
          </div>

          {/* 40 Lesson Pack */}
          <div className="bg-white rounded-xl border p-8">
            <h2 className="text-2xl font-bold mb-4">
              40-Lesson Pack
            </h2>

            <p className="text-3xl font-bold">
              {symbols[currency]}{convert(372)}
            </p>

            <p className="text-sm text-gray-500 mt-2">
              20 hours • 7% discount
            </p>

            <p className="mt-4 text-gray-600">
              Effective rate:
              {" "}
              {symbols[currency]}{convert(18.6)} / hour
            </p>

            <Link
              href="/free-trial"
              className="block mt-6 text-center border border-indigo-600 text-indigo-600 py-3 rounded-lg"
            >
              Book Free Trial
            </Link>
          </div>

        </div>

      </div>
    </main>
  );
}
