"use client";

import { motion } from "motion/react";
import { Button } from "./ui/Button";

export function CTA() {
  return (
    <section id="start" className="py-20 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl lg:text-5xl font-semibold text-[#0a0a0a] mb-6">
            Everyone deserves to be heard.
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Join our early access program. We&rsquo;re working with care centers,
            therapists, and families to make AirWhisper available to those who
            need it most.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="primary" className="px-8">
              Request early access
            </Button>
            <Button variant="secondary">
              Talk to our team
            </Button>
          </div>
          <p className="text-sm text-gray-500">
            Free for qualifying patients. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
