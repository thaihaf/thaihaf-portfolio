"use client";
import WavingHand from "@/images/waving-hand.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { ANIMATION_SECTION_1 } from "@/constants/home.constants";

export default function About() {
  return (
    <div className="mx-auto">
      <div className="page-content flex flex-col items-center">
        <section className="container flex flex-col items-center gap-8 text-center">
          <motion.div
            className="flex flex-nowrap items-center gap-3 border-[var(--primary-border)] border-2 border-solid  p-2.5 pr-6 rounded-full"
            initial={ANIMATION_SECTION_1.initial}
            animate={ANIMATION_SECTION_1.animate}
            transition={{
              duration: ANIMATION_SECTION_1.duration,
              delay: 0 * ANIMATION_SECTION_1.delay,
            }}
          >
            <div className="w-14 h-14 rounded-full bg-[var(--primary-bg)] p-4">
              <Image src={WavingHand} alt="waving-hand" />
            </div>
            <div className="text-[var(--medium-text)] text-nowrap">
              Hello! Im Pragadesh
            </div>
          </motion.div>

          <motion.div
            className="text-3xl font-bold"
            initial={ANIMATION_SECTION_1.initial}
            animate={ANIMATION_SECTION_1.animate}
            transition={{
              duration: ANIMATION_SECTION_1.duration,
              delay: 1 * ANIMATION_SECTION_1.delay,
            }}
          >
            Revitalize Your Digital Impact through Boundless Creativity
          </motion.div>

          <motion.div
            className="text-[var(--secondary-text)]"
            initial={ANIMATION_SECTION_1.initial}
            animate={ANIMATION_SECTION_1.animate}
            transition={{
              duration: ANIMATION_SECTION_1.duration,
              delay: 2 * ANIMATION_SECTION_1.delay,
            }}
          >
            Effortlessly elevate your online presence by crafting a standout
            portfolio with the ease and versatility of our comprehensive
            template
          </motion.div>

          <motion.button
            className="button-primary"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={ANIMATION_SECTION_1.initial}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: ANIMATION_SECTION_1.duration,
                delay: 3 * ANIMATION_SECTION_1.delay,
              },
            }}
          >
            Get the contact
          </motion.button>
        </section>
      </div>
    </div>
  );
}
