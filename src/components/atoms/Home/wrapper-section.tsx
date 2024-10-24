"use client";

import React from "react";
import { motion } from "framer-motion";
import { ANIMATION_CONTENT_SCROLL_TYPE } from "@/enums/home.enum";

interface WrapperContentProps {
  children: React.ReactNode;
  animationScroll: ANIMATION_CONTENT_SCROLL_TYPE;
  title: string | React.ReactNode;
  desc: string | React.ReactNode;
}
export default function WrapperSection({
  children,
  animationScroll,
  title,
  desc,
}: WrapperContentProps) {
  return (
    <section className="home-group">
      <motion.div
        className="home-title"
        initial={animationScroll.initial}
        animate={animationScroll.animate}
        transition={{
          duration: 1 * animationScroll.duration,
          delay: 1 * animationScroll.delay,
        }}
      >
        {title}
      </motion.div>
      <motion.div
        className="home-desc"
        initial={animationScroll.initial}
        animate={animationScroll.animate}
        transition={{
          duration: 1.5 * animationScroll.duration,
          delay: 1.5 * animationScroll.delay,
        }}
      >
        {desc}
      </motion.div>

      <motion.div
        className="home-items"
        initial={animationScroll.initial}
        animate={animationScroll.animate}
        transition={{
          duration: 2 * animationScroll.duration,
          delay: 2 * animationScroll.delay,
        }}
      >
        {children}
      </motion.div>
    </section>
  );
}
