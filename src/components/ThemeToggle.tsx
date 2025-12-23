"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Toggle theme"
      className="!border-radius-50 gradient-border-hover relative h-10 w-10 overflow-hidden !rounded-full bg-background/80 backdrop-blur-sm"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-200 via-orange-200 to-yellow-50 opacity-70 dark:bg-gradient-to-l dark:from-blue-500/10 dark:via-orange-500/5 dark:to-yellow-500/40" />

      <div className="relative h-full w-full">
        <AnimatePresence mode="wait">
          {isDark ? (
            /* Moon animation */
            <motion.div
              key="moon"
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                scale: isHovered ? 1.2 : 1,
              }}
              exit={{ y: 20, opacity: 0 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="text-xl">{isHovered ? "🌖" : "🌘"}</span>
            </motion.div>
          ) : (
            /* Sun animation */
            <motion.div
              key="sun"
              initial={{ y: -20, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                scale: isHovered ? 1.2 : 1,
                rotate: isHovered ? 180 : 0,
              }}
              exit={{ y: -20, opacity: 0 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="text-xl">☀️</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Futuristic glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-yellow-500/20"
        animate={{
          opacity: isHovered ? 0.7 : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
