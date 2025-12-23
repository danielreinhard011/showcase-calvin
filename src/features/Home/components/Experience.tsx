"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    id: 1,
    role: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description:
      "Lead developer for multiple web applications, managing both frontend and backend development. Implemented CI/CD pipelines and mentored junior developers.",
    technologies: ["Next.js", "TypeScript", "Node.js", "AWS"],
    color: "blue",
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2019 - 2021",
    description:
      "Developed and maintained various web applications. Collaborated with design and product teams to implement new features and improve user experience.",
    technologies: ["React", "Express", "MongoDB", "Docker"],
    color: "green",
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Creative Web Agency",
    period: "2017 - 2019",
    description:
      "Created responsive and interactive user interfaces for client websites. Worked closely with designers to implement pixel-perfect designs.",
    technologies: ["JavaScript", "HTML/CSS", "jQuery", "SASS"],
    color: "yellow",
  },
];

export default function ExperienceSection() {
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
    <section id="experience" className="blue-pattern py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Work Experience 💼
            </h2>
            <div className="gradient-bg mx-auto mt-4 h-1 w-20 rounded-full"></div>
            <p className="mt-4 max-w-[700px] text-xl text-muted-foreground">
              My professional journey and career highlights
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto max-w-3xl space-y-8"
        >
          {experiences.map((exp) => (
            <motion.div key={exp.id} variants={itemVariants}>
              <Card className="gradient-border-hover transition-shadow duration-300 hover:animate-pulse hover:shadow-md">
                <CardHeader>
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className={`text-xl text-${exp.color}`}>
                        {exp.role}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className={`w-fit bg-${exp.color}/10 text-${exp.color}-dark border-${exp.color}/30`}
                    >
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className={`bg-${exp.color}/10 text-${exp.color}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
