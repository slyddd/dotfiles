"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import bg_dark from "@/assets/images/home_bg_dark.webp";
import bg_light from "@/assets/images/home_bg.webp";

export function BgHome() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="relative flex w-1/2">
      <AnimatePresence>
        {theme === "dark" && (
          <motion.div
            animate={{ opacity: 1, filter: "blur(0)" }}
            className="absolute left-0 top-0 z-10 h-full w-full"
            exit={{ opacity: 0, filter: "blur(10px) invert(1)" }}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
          >
            <Image
              alt="Background"
              className="image-mask w-fit"
              src={bg_dark}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {theme === "light" && (
          <motion.div
            animate={{ opacity: 1, filter: "blur(0)" }}
            className="absolute left-0 top-0 z-10 h-full w-full"
            exit={{ opacity: 0, filter: "blur(10px) invert(1)" }}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
          >
            <Image
              alt="Background"
              className="image-mask w-fit"
              src={bg_light}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
