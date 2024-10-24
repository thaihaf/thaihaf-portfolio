"use client";
import avtImage from "@/images/avt.jpg";
import WavingHand from "@/images/waving-hand.svg";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ANIMATION_SECTION, FOOTER_SOCIALS } from "@/constants/constans";
import Link from "next/link";
import { MY_CARREER } from "@/constants/about.constants";
import { ANIMATION_CONTENT_SCROLLUP } from "@/constants/home.constants";
import WrapperSection from "@/components/atoms/Home/wrapper-section";
import AboutWrapperContent from "@/components/atoms/About/wrapper-content";

export default function About() {
  return (
    <div className="page-content flex-col-center">
      <section className="container flex-col-center lg:flex-row lg:gap-10">
        <div className="rounded-2xl overflow-hidden mb-8 m-auto max-w-96 aspect-auto lg:m-0 lg:max-w-md xs:max-w-2xl">
          <Image src={avtImage} alt="avatar" />
        </div>

        <div className="flex-col-center text-center lg:items-start">
          <motion.div
            className="flex-center flex-nowrap gap-3 border-primary p-2.5 pr-6 mb-5 rounded-full"
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
              Hello, Explore My Portfolio
            </div>
          </motion.div>

          <div className="text-3xl font-semibold mb-2.5 lg:text-5xl xs:text-7xl lg:mb-5">
            I&apos;m <span className="text-[#e58a7f]">Nguyễn Thái Hà</span>
          </div>

          <div className="flex-center gap-3 text-[22px] mb-8 lg:text-2xl xs:text-4xl">
            <div className="font-medium ">I specialize in</div>
            <div className="bg-[var(--primary-bg)] px-4 py-2 rounded-xl">
              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  1000,
                  "Designing",
                  2000,
                  "Templating",
                  2000,
                  "Development",
                  2000,
                ]}
                speed={30}
                style={{ fontWeight: "bold" }}
                repeat={Infinity}
              />
            </div>
          </div>

          <div className="border-primary rounded-2xl p-6">
            <div className="flex items-center justify-between flex-nowrap gap-5">
              <div className="text-2xl text-left font-bold">About Me</div>

              <div className="flex-center items-end gap-3">
                {FOOTER_SOCIALS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      className="rounded-full overflow-hidden p-2.5 bg-[#1c1c21] border-primary transition-transform duration-200 hover:-translate-y-1"
                    >
                      <Icon height={22} width={22} />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="text-[var(--secondary-text)] mt-3 ">
              Creative professional specializing in web development, bringing
              imaginative solutions to life through innovative and visually
              compelling designs.
            </div>
          </div>
        </div>
      </section>

      <WrapperSection
        title={MY_CARREER.title}
        desc={MY_CARREER.desc}
        animationScroll={ANIMATION_CONTENT_SCROLLUP}
      >
        {MY_CARREER.items.map((item) => {
          return (
            <AboutWrapperContent
              dateTime={item.dateTime}
              year={item.year}
              title={item.title}
              desc={item.desc}
              animationScroll={ANIMATION_CONTENT_SCROLLUP}
              key={item.title}
            >
              sdgsfd
            </AboutWrapperContent>
          );
        })}
      </WrapperSection>
    </div>
  );
}
