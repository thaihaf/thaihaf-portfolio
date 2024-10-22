import clsx from "clsx";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface LinkButtonProps {
  title: string;
  href: string;
  target?: string;
  text: string;
  className?: string;
}
export default function LinkButton({
  href,
  title,
  text,
  target = "_blank",
  className = "",
}: LinkButtonProps) {
  return (
    <div className={clsx("flex-col-center", className)}>
      <div className="text-[var(--secondary-text)] text-base">{title}</div>

      <Link
        href={href}
        target={target}
        className={clsx("flex-center gap-5", "group")}
      >
        <div className="text-[22px] text-[#c9cace] transition-all duration-300  group-hover:text-white">
          {text}
        </div>
        <div className="border-primary bg-[var(--primary-bg)] p-2 rounded-full relative overflow-hidden">
          <MoveUpRight className="transition-all duration-300 group-hover:translate-x-full group-hover:-translate-y-full" />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex-center">
            <MoveUpRight className="transition-all duration-300 -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:-translate-y-0" />
          </div>
        </div>
      </Link>
    </div>
  );
}
