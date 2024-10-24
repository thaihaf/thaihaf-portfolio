import React from "react";
import avtImage from "@/images/avt.jpg";
import Image from "next/image";
import {
  FOOTER_LINKS_STATUS,
  FOOTER_PAGE_LINKS,
  FOOTER_SOCIALS,
} from "@/constants/constans";
import Link from "next/link";
import clsx from "clsx";
import LinkButton from "@/components/layout/LinkButton";
import { MoveRight } from "lucide-react";
export default function Footer() {
  return (
    <div className="container p-5 mt-3 ">
      <div
        className={clsx(
          "bg-[#0e0e10] rounded-2xl flex-col-center gap-14 p-[40px_40px_100px]",
          "lg:grid lg:grid-cols-3 xs:grid-cols-4"
        )}
      >
        <div className="flex-col-center lg:m-r-auto">
          <div className="rounded-full overflow-hidden mb-3">
            <Image src={avtImage} alt="avatar" height={100} />
          </div>

          <div className="text-xl mb-0.5">Thaihaf</div>
          <div className="text-sm text-[var(--secondary-text)]">
            Design & Developer
          </div>

          <div className="flex-center gap-3 mt-3">
            {FOOTER_SOCIALS.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  className="rounded-lg overflow-hidden p-2.5 bg-[#1c1c21] border-primary transition-transform duration-200 hover:-translate-y-1"
                >
                  <Icon height={22} width={22} />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex-col-center gap-4">
          <div className="text-xl mb-5">Explore</div>

          {FOOTER_PAGE_LINKS.map((link) => {
            const isDone = link.status === FOOTER_LINKS_STATUS.DONE;
            return (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                className={clsx(
                  "group/link relative transition-all duration-200",
                  "text-[var(--secondary-text)] text-lg flex-center gap-2.5 capitalize",
                  isDone
                    ? "hover:!text-[var(--primary-text)]"
                    : "pointer-events-none"
                )}
              >
                {link.label}

                {!isDone ? (
                  <div className="px-2 border-primary rounded-lg capitalize">
                    {link.status}
                  </div>
                ) : (
                  <div className="absolute left-[110%] overflow-hidden">
                    <MoveRight className="transition-all duration-200 -translate-x-full group-hover/link:translate-x-0" />
                  </div>
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex-col-center gap-4">
          <div className="text-xl mb-5">Show Support!</div>

          {FOOTER_SOCIALS.map((link) => {
            return (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                className={clsx(
                  "group/social relative transition-all duration-200",
                  "text-[var(--secondary-text)] text-lg flex-center gap-2.5 capitalize hover:!text-[var(--primary-text)]"
                )}
              >
                {link.label}

                <div className="absolute left-[110%] overflow-hidden">
                  <MoveRight className="transition-all duration-200 -translate-x-full group-hover/social:translate-x-0" />
                </div>
              </Link>
            );
          })}
        </div>

        <LinkButton
          className="lg:col-span-3 xs:col-auto xs:items-start m-auto text-center"
          title="Have an idea?"
          href=""
          text="Contact Me"
        />
      </div>
    </div>
  );
}
