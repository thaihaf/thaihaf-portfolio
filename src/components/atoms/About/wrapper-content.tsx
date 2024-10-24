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
    <motion.div
      className="flex flex-col-center mt-10"
      initial={animationScroll.initial}
      animate={animationScroll.animate}
      transition={{
        duration: animationScroll.duration,
        delay: animationScroll.delay,
      }}
    >
      <div className="flex flex-col-center gap-1 w-full">
        <div className="rounded-lg bg-[var(--primary-bg)] p-[12px_30px] text-[var(--secondary-text)]">
          {dateTime}
        </div>

        {children}

        <div className="rounded-2xl bg-[var(--primary-bg)] p-5 flex-col-center w-full gap-4">
          <div className="text-2xl font-bold">{title}</div>
          <div className="text-[var(--secondary-text)]">{desc}</div>
        </div>
      </div>
    </motion.div>
  );
}
