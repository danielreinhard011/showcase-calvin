"use client";

import { AuroraText } from "@/components/magicui/aurora-text";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex h-screen flex-col items-center justify-center px-4 text-center"
    >
      <div className="animated-gradient-bg absolute inset-0 -z-10 opacity-10"></div>

      <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-yellow/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-blue/10 blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-4"
      >
        <h1 className="text-3xl font-bold tracking-tighter md:text-6xl lg:text-7xl">
          🦊 Hi! it's{" "}
          <AuroraText colors={["#F59E0B", "#F97316", "#10B981", "#3B82F6"]}>
            Calvin
          </AuroraText>{" "}
          here 🧑‍💻
        </h1>

        <TypingAnimation
          className="mx-auto max-w-[600px] text-xl text-muted-foreground md:text-3xl"
          duration={50}
        >
          I build modern web applications with cutting-edge technologies 🚀
        </TypingAnimation>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col justify-center gap-4 pt-8 sm:flex-row"
        >
          <Button
            size="lg"
            className="gradient-bg transition-opacity hover:bg-muted-foreground hover:text-white hover:opacity-90"
            asChild
          >
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gradient-border-hover"
            asChild
          >
            <Link href="#contact">Contact Me</Link>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
        transition={{
          duration: 0.8,
          delay: 1.4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 0.2,
        }}
        className="absolute bottom-10"
      >
        <Link
          href="#about"
          className="flex flex-col items-center text-muted-foreground transition-colors hover:text-primary"
        >
          <span className="mb-2 text-sm">Scroll Down</span>
          <ArrowDown className="h-5 w-5" />
        </Link>
      </motion.div>
      <RetroGrid cellSize={60} angle={70} opacity={0.2} />
    </section>
  );
}
