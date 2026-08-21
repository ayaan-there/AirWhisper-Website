"use client";

import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Wear your watch",
    description:
      "AirWhisper runs on Apple Watch, using motion sensors to capture every subtle wrist movement.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Make a gesture",
    description:
      "Air-write letters, use predefined gestures, or move naturally. No touch, no grip required.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Speak freely",
    description:
      "Machine learning translates your movements into words, spoken aloud or displayed as text instantly.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-20 lg:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-[#5BA4D9] uppercase tracking-wide mb-4">
            How it works
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-[#0a0a0a] mb-6">
            Three simple steps to communicate
          </h2>
          <p className="text-lg text-gray-600">
            AirWhisper makes communication effortless with intuitive wrist movements
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5BA4D9]/10 text-[#5BA4D9]">
                    {step.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-400">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-[#0a0a0a] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
