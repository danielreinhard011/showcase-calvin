"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export default function Footer() {
  const { theme, setTheme } = useTheme();

  return (
    <footer className="border-t bg-gradient-to-r from-blue/5 to-yellow/5 py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="flex space-x-4">
            <Link
              href="https://github.com/calvin-key"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
              className="rounded-full bg-muted p-2 transition-colors hover:bg-[#6e7781] hover:text-[#181717]"
            >
              <FiGithub className="h-5 w-5" />
              <span className="sr-only">Github</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/calvin-pangkey777"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full bg-muted p-2 transition-colors hover:bg-blue/20 hover:text-blue"
            >
              <FaLinkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://wa.me/6281380093183"
              className="rounded-full bg-muted p-2 transition-colors hover:bg-green/20 hover:text-green"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Whatsapp"
            >
              <FaWhatsapp className="h-5 w-5" />
              <span className="sr-only">Whatsapp</span>
            </Link>
            <Link
              href="https://www.instagram.com/calvin____key/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full bg-muted p-2 transition-colors hover:bg-pink-300/20 hover:text-pink-500"
            >
              <FaInstagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="#" className="underline-offset-4 hover:underline">
              Home
            </Link>
            <Link href="#about" className="underline-offset-4 hover:underline">
              About
            </Link>
            <Link
              href="#education"
              className="underline-offset-4 hover:underline"
            >
              Education
            </Link>
            <Link
              href="#projects"
              className="underline-offset-4 hover:underline"
            >
              Projects
            </Link>
            <Link href="#skills" className="underline-offset-4 hover:underline">
              Skills
            </Link>
            {/* <Link
              href="#experience"
              className="underline-offset-4 hover:underline"
            >
              Experience
            </Link> */}
            <Link
              href="#contact"
              className="underline-offset-4 hover:underline"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center justify-center gap-3 md:gap-6">
            <p className="text-left text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Calvin Pangkey. All rights
              reserved.
            </p>
            <div className="h-5 border-l border-muted-foreground"></div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="!border-radius-50 flex items-center justify-center !rounded-full text-muted-foreground"
            >
              <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
