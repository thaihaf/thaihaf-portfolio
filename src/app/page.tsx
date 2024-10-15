"use client";
import WavingHand from "@/images/waving-hand.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import {
  ANIMATION_SECTION_1,
  OVERVIEW_INFO,
  SKILLS,
} from "@/constants/home.constants";
import { Plus } from "lucide-react";
import clsx from "clsx";
import AnimatedCounter from "@/components/atoms/AnimatedCounter";

export default function Home() {
  return (
    <div className="mx-auto">
      <div className="page-content flex flex-col items-center">
        <section className="container flex flex-col items-center gap-8 text-center lg:!max-w-[750px] lg:!w-[90%] xs:!max-w-[950px] xs:!w-[100%]">
          <motion.div
            className="flex flex-nowrap items-center gap-3 border-[var(--primary-border)] border-2 border-solid  p-2.5 pr-6 rounded-full"
            initial={ANIMATION_SECTION_1.initial}
            animate={ANIMATION_SECTION_1.animate}
            transition={{
              duration: 0 * ANIMATION_SECTION_1.duration,
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
            className="text-3xl font-bold lg:!text-5xl xs:!text-6xl"
            initial={ANIMATION_SECTION_1.initial}
            animate={ANIMATION_SECTION_1.animate}
            transition={{
              duration: 1 * ANIMATION_SECTION_1.duration,
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
              duration: 2 * ANIMATION_SECTION_1.duration,
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
                duration: 3 * ANIMATION_SECTION_1.duration,
                delay: 3 * ANIMATION_SECTION_1.delay,
              },
            }}
          >
            Get the contact
          </motion.button>
        </section>

        <motion.section
          className="mt-12"
          initial={ANIMATION_SECTION_1.initial}
          animate={ANIMATION_SECTION_1.animate}
          transition={{
            duration: 4 * ANIMATION_SECTION_1.duration,
            delay: 4 * ANIMATION_SECTION_1.delay,
          }}
        >
          <Marquee
            className={clsx(
              "container !p-4 !w-screen bg-[var(--primary-bg)] overflow-hidden mask-border text-[var(--medium-text)]",
              "min-[1430px]:rounded-full min-[1430px]:!p-[20px_24px_24px]"
            )}
            pauseOnHover
            direction="right"
            speed={40}
          >
            {SKILLS.map((item) => {
              return (
                <div
                  key={item}
                  className="flex items-center gap-3 border-[var(--primary-border)] border-2 border-solid  px-5 py-2 rounded-full text-nowrap mx-2 text-base"
                >
                  {item}
                </div>
              );
            })}
          </Marquee>

          <div
            className={clsx(
              "grid grid-rows-[repeat(2,_minmax(0px,_1fr))] grid-cols-[repeat(2,_minmax(100px,_1fr))]",
              "!p-2.5 mt-2.5 gap-2.5 w-full max-w-[500px] mx-auto",
              "lg:grid-rows-[repeat(1,_minmax(0px,_1fr))] lg:grid-cols-[repeat(4,_minmax(100px,_1fr))] lg:mt-0 lg:!p-0 lg:gap-5 lg:!max-w-none lg:!w-max"
            )}
          >
            {OVERVIEW_INFO.map((item, index) => {
              const isFirst = index === 0;
              const isLast = index === OVERVIEW_INFO.length - 1;
              return (
                <div
                  key={item.id}
                  className={clsx(
                    "flex flex-col items-center justify-center px-5 py-4 gap-2.5 w-full relative",
                    "bg-[var(--primary-bg)] text-[var(--medium-text)] rounded-[20px] ",
                    "lg:!p-[15px_20px_25px] lg:!rounded-t-none lg:!min-w-[200px] lg:!w-min",
                    isFirst &&
                      "before:hidden lg:before:block before:absolute before:bg-white before:w-[60px] before:aspect-square before:left-[-45px] before:top-[-14px] before:rounded-full before:bg-[var(--primary-bg)] after:block after:absolute after:bg-white after:w-[80px] after:aspect-square after:left-[-80px] after:top-0 after:rounded-full after:bg-[var(--background)]",
                    isLast &&
                      "before:hidden lg:before:block before:absolute before:bg-white before:w-[60px] before:aspect-square before:right-[-45px] before:top-[-14px] before:rounded-full before:bg-[var(--primary-bg)] after:block after:absolute after:bg-white after:w-[80px] after:aspect-square after:right-[-80px] after:top-0 after:rounded-full after:bg-[var(--background)]"
                  )}
                >
                  <div className="flex items-center justify-center text-[38px] font-medium text-[#c9cace] lg:text-[44px] xs:text-[54px]">
                    <AnimatedCounter to={item.value} />
                    <Plus color="var(--red-color)" />
                  </div>
                  <div className="text-[var(--medium-text)] text-center sm:text-nowrap">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
