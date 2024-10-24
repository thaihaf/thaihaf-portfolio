"use client";
import WavingHand from "@/images/waving-hand.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import {
  ANIMATION_CONTENT_SCROLLUP,
  OVERVIEW_INFO,
  SKILL_AND_EXPERTISE,
  SKILLS,
  TOOLS,
} from "@/constants/home.constants";
import { Atom, Plus } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";
import { ANIMATION_SECTION } from "@/constants/constans";
import AnimatedCounter from "@/components/atoms/Home/animation-counter";
import WrapperSection from "@/components/atoms/Home/wrapper-section";

export default function Home() {
  return (
    <div className="page-content flex-col-center">
      <section className="container flex-col-center gap-8 text-center lg:!max-w-[750px] lg:!w-[90%] xs:!max-w-[950px] xs:!w-[100%]">
        <motion.div
          className="flex-center flex-nowrap gap-3 border-primary p-2.5 pr-6 rounded-full"
          initial={ANIMATION_SECTION.initial}
          animate={ANIMATION_SECTION.animate}
          transition={{
            duration: 0 * ANIMATION_SECTION.duration,
            delay: 0 * ANIMATION_SECTION.delay,
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
          initial={ANIMATION_SECTION.initial}
          animate={ANIMATION_SECTION.animate}
          transition={{
            duration: 1 * ANIMATION_SECTION.duration,
            delay: 1 * ANIMATION_SECTION.delay,
          }}
        >
          Revitalize Your Digital Impact through Boundless Creativity
        </motion.div>

        <motion.div
          className="text-[var(--secondary-text)]"
          initial={ANIMATION_SECTION.initial}
          animate={ANIMATION_SECTION.animate}
          transition={{
            duration: 2 * ANIMATION_SECTION.duration,
            delay: 2 * ANIMATION_SECTION.delay,
          }}
        >
          Effortlessly elevate your online presence by crafting a standout
          portfolio with the ease and versatility of our comprehensive template
        </motion.div>

        <motion.button
          className="button-primary"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={ANIMATION_SECTION.initial}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 3 * ANIMATION_SECTION.duration,
              delay: 3 * ANIMATION_SECTION.delay,
            },
          }}
        >
          Get the contact
        </motion.button>
      </section>

      <motion.section
        className="mt-12"
        initial={ANIMATION_SECTION.initial}
        animate={ANIMATION_SECTION.animate}
        transition={{
          duration: 4 * ANIMATION_SECTION.duration,
          delay: 4 * ANIMATION_SECTION.delay,
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
                className="flex items-center gap-3 border-primary px-5 py-2 rounded-full text-nowrap mx-2 text-base"
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
                    "before:hidden lg:before:block before:absolute before:w-[60px] before:aspect-square before:left-[-45px] before:top-[-14px] before:rounded-full before:bg-[var(--primary-bg)] after:block after:absolute after:w-[80px] after:aspect-square after:left-[-80px] after:top-0 after:rounded-full after:bg-[var(--background)]",
                  isLast &&
                    "before:hidden lg:before:block before:absolute before:w-[60px] before:aspect-square before:right-[-45px] before:top-[-14px] before:rounded-full before:bg-[var(--primary-bg)] after:block after:absolute after:w-[80px] after:aspect-square after:right-[-80px] after:top-0 after:rounded-full after:bg-[var(--background)]"
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

      <WrapperSection
        title={SKILL_AND_EXPERTISE.title}
        desc={SKILL_AND_EXPERTISE.desc}
        animationScroll={ANIMATION_CONTENT_SCROLLUP}
      >
        {SKILL_AND_EXPERTISE.items.map((item) => {
          return (
            <motion.div
              key={item.id}
              className={clsx(
                "border-primary p-1.5 bg-[var(--primary-bg)]",
                "rounded-3xl p-4"
              )}
            >
              <div
                className={clsx(
                  "bg-black rounded-3xl flex flex-col items-center justify-center gap-2",
                  "border-primary h-52 group/item"
                )}
              >
                <div
                  className={clsx(
                    "p-4 border-primary bg-[var(--primary-bg)] rounded-full box-shadow transition-all duration-300",
                    "lg:translate-y-4 lg:group-hover/item:!translate-y-0"
                  )}
                >
                  <Atom size={32} />
                </div>
                <motion.div
                  className={clsx(
                    "text-[var(--secondary-text)] font-medium lg:opacity-0 lg:invisible transition-all duration-300",
                    "hover:text-[var(--primary-text)] lg:group-hover/item:opacity-100 lg:group-hover/item:visible"
                  )}
                >
                  <Link href={"/work"}>View Projects</Link>
                </motion.div>
              </div>

              <div className="text-xl mt-5 mb-2.5">{item.label}</div>
              <div className="text-[var(--secondary-text)] mb-4">
                {item.desc}
              </div>
            </motion.div>
          );
        })}
      </WrapperSection>

      <WrapperSection
        title={TOOLS.title}
        desc={TOOLS.desc}
        animationScroll={ANIMATION_CONTENT_SCROLLUP}
      >
        {TOOLS.items.map((item) => {
          return (
            <motion.div
              key={item.id}
              className={clsx(
                "border-primary p-1.5 bg-[var(--background)]",
                "rounded-3xl p-4",
                "lg:!p-6"
              )}
            >
              <div className="flex items-center gap-3">
                <div className="p-3 w-fit border-primary bg-[var(--primary-bg)] rounded-xl">
                  <Atom size={32} />
                </div>

                <Link
                  href={""}
                  className="text-xl font-bold transition-all duration-200 text-[#c9cace] hover:text-[var(--primary-text)]"
                >
                  {item.label}
                </Link>
              </div>

              <div className="text-[var(--secondary-text)] mt-3.5 mb-2 text-left">
                {item.desc}
              </div>
            </motion.div>
          );
        })}
      </WrapperSection>
    </div>
  );
}
