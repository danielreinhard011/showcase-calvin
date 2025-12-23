"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-pattern py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="gradient-border relative h-[400px] w-full overflow-hidden rounded-xl"
          >
            <Image
              src="/your-photo.jpeg"
              alt="Calvin portrait"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Me 🦊
              </h2>
              <div className="gradient-bg mt-4 h-1 w-20 rounded-full"></div>
            </div>

            <p className="text-lg text-muted-foreground">
              Hi, I'm Calvin Pangkey, a problem-solver with a strong technical
              background and a passion for building modern web applications.
              With experience in both engineering and software development, I
              love tackling complex challenges and creating efficient, scalable,
              and user-friendly solutions.
            </p>

            <p className="text-lg text-muted-foreground">
              I specialize in full-stack development using React, Next.js,
              Node.js, and TypeScript, building applications that deliver
              seamless user experiences. My ability to break down complex
              systems and optimize performance gives me a unique perspective in
              web development, and I'm always eager to push the boundaries of
              technology and innovation.
            </p>

            <Button
              variant="outline"
              size="lg"
              className="gradient-border-hover mt-4"
              asChild
            >
              <Link
                href="https://res.cloudinary.com/dwptrdpk0/image/upload/v1743306793/Resume_luoqry.pdf"
                target="_blank"
                className="gap-2"
              >
                <FileText className="h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
