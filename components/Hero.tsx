"use client";

import { motion } from "motion/react";
import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-semibold text-[#5BA4D9] uppercase tracking-wide mb-4">
                Assistive Communication Technology
              </p>

              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#0a0a0a] leading-tight mb-6">
                Your words. <span className="text-[#5BA4D9]">Your way.</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
                AirWhisper transforms simple wrist movements into speech and
                text in real time, giving you a voice without touch, grip, or
                sound.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Button variant="primary">Get early access</Button>
                <Button variant="secondary">Learn more</Button>
              </div>

              <div className="flex items-center gap-4 pt-8 border-t border-gray-200">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-10 w-10 rounded-full border-2 border-white bg-gray-200"
                      style={{
                        backgroundImage: `url(https://picsum.photos/seed/caregiver${i}/80/80)`,
                        backgroundSize: "cover",
                      }}
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium text-[#0a0a0a]">
                    Trusted by 2,400+ families
                  </p>
                  <p className="text-xs text-gray-500">
                    Across 38 care centers worldwide
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square max-w-lg mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://picsum.photos/seed/applewatchuser/800/800"
                  alt="Person using AirWhisper with Apple Watch"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Simple overlay card */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5BA4D9]/10">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-[#5BA4D9]"
                        >
                          <path
                            d="M12 2v20M2 12h20"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Live transcription</p>
                        <p className="font-medium text-[#0a0a0a]">
                          &ldquo;I&rsquo;d like some water, please.&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
