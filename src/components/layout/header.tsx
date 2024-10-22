import { HEADER_ITEMS } from "@/constants/constans";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="container fixed z-50 w-full top-6 left-0 right-0">
      <div className="m-auto w-fit flex-center gap-2.5 flex-nowrap p-1.5 border-primary bg-[var(--primary-bg)] rounded-2xl">
        {HEADER_ITEMS.map((item) => {
          const HeaderIcon = item.icon;
          const isActive = item.href === pathname;
          return (
            <Link
              key={item.value}
              href={item.href}
              className={clsx(
                "flex flex-nowrap items-center py-3.5 px-4 gap-1.5 rounded-xl text-[var(--secondary-text)]",
                "sm:py-3.5 sm:px-7",
                isActive &&
                  "!bg-[var(--background)] !text-[var(--primary-text)] !font-500"
              )}
            >
              <Tooltip>
                <TooltipTrigger>
                  <HeaderIcon
                    color={clsx(
                      isActive ? "var(--primary-text)" : "var(--secondary-text)"
                    )}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>

              <div className="hidden sm:block">{item.label}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
