import { ANIMATION_CONTENT_SCROLL_TYPE } from "@/enums/home.enum";
import React from "react";
import { motion } from "framer-motion";

interface WrapperContentProps {
  children: React.ReactNode;
  title: string;
  desc: string;
  dateTime?: string;
  year?: number | null;
  animationScroll: ANIMATION_CONTENT_SCROLL_TYPE;
}
export default function AboutWrapperContent({
  children,
  title,
  desc,
  dateTime,
  //   year,
  animationScroll,
}: WrapperContentProps) {
  return (
    <div className="flex flex-col-center mt-10">
      <div className="flex flex-col-center gap-5 w-full">
        <motion.div
          className="rounded-lg bg-[var(--primary-bg)] p-[12px_30px] text-[var(--secondary-text)]"
          initial={animationScroll.initial}
          animate={animationScroll.animate}
          transition={{
            duration: animationScroll.duration,
            delay: animationScroll.delay,
          }}
        >
          {dateTime}
        </motion.div>

        <motion.div
          className="border-primary rounded-2xl p-5 bg-[var(--primary-bg)]"
          initial={animationScroll.initial}
          animate={animationScroll.animate}
          transition={{
            duration: 2 * animationScroll.duration,
            delay: 2 * animationScroll.delay,
          }}
        >
          {children}
        </motion.div>

        <motion.div
          className="rounded-2xl bg-[var(--primary-bg)] p-5 flex-col-center w-full gap-4"
          initial={animationScroll.initial}
          animate={animationScroll.animate}
          transition={{
            duration: 3 * animationScroll.duration,
            delay: 3 * animationScroll.delay,
          }}
        >
          <div className="text-2xl font-bold">{title}</div>
          <div className="text-[var(--secondary-text)]">{desc}</div>
        </motion.div>
      </div>
    </div>
  );
}
