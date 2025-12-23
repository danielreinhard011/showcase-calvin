"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { useRef } from "react";

const educationItems = [
  {
    id: 1,
    degree: "Full Stack Web Development",
    institution: "Purwadhika Digital Technology School",
    period: "2024 - 2025",
    location: "Sleman, DIY, Indonesia",
    description:
      "Intensive program covering modern web development, including React, Node.js, and databases. Built and deployed full-stack applications like a job board and a ticket-selling platform, with a focus on clean architecture and best practices.",
    achievements: [
      "Best Final Project",
      "Deployed Live Applications",
      "Perfect Attendance",
    ],
    color: "green",
    logo: "/purwadhika.jpg",
  },
  {
    id: 2,
    degree: "Bachelor's Degree in Aerospace Engineering",
    institution: "Institut Teknologi Dirgantara Adisutjipto Yogyakarta",
    period: "2019 - 2024",
    location: "Bantul, DIY, Indonesia",
    description:
      "Researched hybrid composites using natural fibers, specifically pineapple leaves and bamboo fiber, for aerospace applications. Passionate about materials science and sustainable engineering solutions.",
    achievements: [
      "Cum Laude Honor",
      "Best GPA in Class",
      "Active in Student Organizations",
      "Internship at PT Angkasa Pura I",
    ],
    color: "orange",
    logo: "/itda.png",
  },
];

export default function EducationSection() {
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
    <section id="education" className="section-pattern py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Education 🎓
            </h2>
            <div className="gradient-bg mx-auto mt-4 h-1 w-20 rounded-full"></div>
            <p className="mt-4 max-w-[700px] text-xl text-muted-foreground">
              My academic journey and professional development
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
          {educationItems.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <Card className="gradient-border-hover overflow-hidden transition-shadow duration-300 hover:shadow-md">
                <div className={`h-2 w-full bg-${item.color}`}></div>
                <CardHeader className="flex flex-col gap-4 pb-2 md:flex-row md:items-start">
                  <div
                    className={`h-12 w-12 flex-shrink-0 rounded-full bg-${item.color}/10 mt-1 flex items-center justify-center`}
                  >
                    <Avatar>
                      <AvatarImage src={`${item.logo}`} alt="logo" />
                      <AvatarFallback>{item.institution}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex-grow">
                    <CardTitle className={`text-xl text-${item.color}`}>
                      {item.degree}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium">
                      {item.institution}
                    </CardDescription>
                    <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.achievements.map((achievement, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className={`bg-${item.color}/10 text-${item.color}-dark`}
                      >
                        {achievement}
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
