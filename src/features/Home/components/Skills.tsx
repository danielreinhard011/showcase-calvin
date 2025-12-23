"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS",
      "Tailwind CSS",
      "Framer Motion",
    ],
    color: "yellow",
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "RESTful APIs"],
    color: "orange",
  },
  {
    category: "Database",
    items: ["PostgreSQL", "Redis", "Prisma"],
    color: "green",
  },
  {
    category: "DevOps & Tools",
    items: [
      "GitHub",
      "Docker",
      "Vercel",
      "Jest",
      "Cypress",
      "VSCode",
    ],
    color: "blue",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="skills" className="section-pattern py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Technical Skills ⚡️
            </h2>
            <div className="gradient-bg mx-auto mt-4 h-1 w-20 rounded-full"></div>
            <p className="mt-4 max-w-[700px] text-xl text-muted-foreground">
              A comprehensive list of technologies and tools I work with
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`gradient-border-hover rounded-xl border bg-background p-6 shadow-sm transition-shadow duration-300 hover:shadow-md`}
            >
              <h3 className={`mb-4 text-xl font-bold text-${skillGroup.color}`}>
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <div className={`mr-2 h-2 w-2 rounded-full bg-muted`}></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
