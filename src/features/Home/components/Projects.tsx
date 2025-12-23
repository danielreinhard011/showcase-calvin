"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion, useInView } from "framer-motion";
import { ChevronDown, Code, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";

type GitHubLink = {
  label: string;
  url: string;
};

type MediaType = "image" | "video";

type ProjectMedia = {
  type: MediaType;
  url: string;
};

type Project = {
  id: number;
  title: string;
  description: string;
  media: ProjectMedia;
  technologies: string[];
  githubLinks: GitHubLink[] | string;
  liveUrl: string;
  color: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Supajob",
    description:
      "A comprehensive job board web application built to connect job seekers with employers seamlessly. Candidates can browse job listings, apply effortlessly, and even generate professional CVs within the platform. Companies can post job openings, manage applicants, and conduct assessments to streamline the hiring process. The platform features a dynamic dashboard for both roles, social login, subscription plans, and an intuitive UI to enhance the job-hunting and recruitment experience.",
    media: {
      type: "video",
      url: "/supajob.webm",
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Express",
      "Cloudinary",
    ],
    githubLinks: [
      { label: "Frontend", url: "https://github.com/huda-7077/FP-0510-01-FE" },
      { label: "Backend", url: "https://github.com/huda-7077/FP-0510-01-BE" },
    ],
    liveUrl: "https://supajob.my.id/",
    color: "yellow",
  },
  {
    id: 2,
    title: "Scaena",
    description:
      "A versatile ticketing platform designed for both event organizers and attendees. Users can purchase tickets, apply vouchers, earn and redeem loyalty points, and utilize referral codes for exclusive discounts. Event organizers can efficiently create and manage events, issue customized vouchers, and oversee ticket sales. The app offers a clean and user-friendly UI, ensuring a seamless and rewarding experience for all users.",
    media: {
      type: "image",
      url: "/scaena.png",
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Express",
      "Supabase",
      "Cloudinary",
    ],
    githubLinks: [
      { label: "Frontend", url: "https://github.com/calvin-key/MP-0510-03-FE" },
      { label: "Backend", url: "https://github.com/calvin-key/MP-0510-03-BE" },
    ],
    liveUrl: "https://scaena-calvins-projects-60bdac0f.vercel.app",
    color: "orange",
  },
  {
    id: 3,
    title: "EverAfter Wedding Organizer",
    description:
      "A visually appealing company profile website for a wedding organizer, designed to highlight its services and expertise. The site features detailed service offerings, an engaging about section, and an easy-to-navigate contact page, making it effortless for potential clients to explore and connect. With a modern, elegant design, the platform reflects the brand's identity while ensuring a smooth user experience.",
    media: {
      type: "video",
      url: "/everafter.webm",
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "CMS",
      "Contentful",
    ],
    githubLinks: "https://github.com/calvin-key/everafter-app",
    liveUrl: "https://everafter-app.vercel.app",
    color: "green",
  },
];

const THUMBNAIL_ASPECT_RATIO = 16 / 9;

function ProjectThumbnail({ media, title, color }: { media: ProjectMedia; title: string; color: string }) {
  return (
    <div className="relative overflow-hidden" style={{ paddingTop: `${(1 / THUMBNAIL_ASPECT_RATIO) * 100}%` }}>
      <div className={`absolute inset-0 bg-${color}/20 z-10`}></div>
      {media.type === "image" ? (
        <Image
          src={media.url || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        <video
          src={media.url}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          autoPlay
          muted
          loop
          playsInline
        />
      )}
    </div>
  );
}

function GitHubButton({
  links,
  color,
}: {
  links: GitHubLink[] | string;
  color: string;
}) {
  if (typeof links === "string") {
    return (
      <Button
        variant="outline"
        size="sm"
        className="gradient-border-hover"
        asChild
      >
        <Link
          href={links}
          className="gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="h-4 w-4" />
          Code
        </Link>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gradient-border-hover gap-2"
        >
          <FaGithub className="h-4 w-4" />
          Code
          <ChevronDown className="ml-1 h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48">
        {links.map((link, index) => (
          <DropdownMenuItem key={index} asChild>
            <Link
              href={link.url}
              className="flex w-full cursor-pointer items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code className={`h-4 w-4 text-${color}`} />
              {link.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function ProjectsSection() {
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
    <section id="projects" className="blue-pattern py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <span>Featured Projects </span>🚀
            </h2>
            <div className="gradient-bg mx-auto mt-4 h-1 w-20 rounded-full"></div>
            <p className="mt-4 max-w-[700px] text-xl text-muted-foreground">
              Here are some of my recent projects that showcase my skills and
              expertise
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="gradient-border-hover group flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg">
                <ProjectThumbnail 
                  media={project.media}
                  title={project.title}
                  color={project.color}
                />
                <CardHeader>
                  <CardTitle className={`text-${project.color} text-lg`}>
                    {project.title}
                  </CardTitle>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className={`bg-${project.color}/10 text-${project.color}-dark`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <GitHubButton
                    links={project.githubLinks}
                    color={project.color}
                  />
                  <Button
                    size="sm"
                    asChild
                  >
                    <Link
                      href={project.liveUrl}
                      className="gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* <div className="mt-12 flex justify-center">
          <Button
            variant="outline"
            size="lg"
            className="gradient-border-hover"
            asChild
          >
            <Link href="#">View All Projects</Link>
          </Button>
        </div> */}
      </div>
    </section>
  );
}