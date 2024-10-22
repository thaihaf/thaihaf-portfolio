"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { TooltipProvider } from "@/components/ui/tooltip";
import { domMax, LazyMotion } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export function LayoutProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <LazyMotion features={domMax}>
        <TooltipProvider>
          <Header />
          {children}
          <Footer />
        </TooltipProvider>
      </LazyMotion>
    </NextThemesProvider>
  );
}
