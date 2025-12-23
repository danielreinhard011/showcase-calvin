"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AuroraText } from "./magicui/aurora-text";
import ThemeToggle from "./ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const navItems = [
  { name: "Home", href: "#", icon: "🏠", sectionId: "hero" },
  { name: "About", href: "#about", icon: "🦊", sectionId: "about" },
  { name: "Education", href: "#education", icon: "🎓", sectionId: "education" },
  { name: "Projects", href: "#projects", icon: "🚀", sectionId: "projects" },
  { name: "Skills", href: "#skills", icon: "⚡️", sectionId: "skills" },
  // {
  //   name: "Experience",
  //   href: "#experience",
  //   icon: "💼",
  //   sectionId: "experience",
  // },
  { name: "Contact", href: "#contact", icon: "🤙", sectionId: "contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  const pathname = usePathname();
  const footerPositionRef = useRef<number | null>(null);
  const bufferZone = 100;

  useEffect(() => {
    const calculateFooterPosition = () => {
      const footer = document.querySelector("footer");
      if (footer) {
        footerPositionRef.current =
          footer.offsetTop - window.innerHeight + bufferZone;
      }
    };

    calculateFooterPosition();

    window.addEventListener("resize", calculateFooterPosition);
    return () => window.removeEventListener("resize", calculateFooterPosition);
  }, []);

  useEffect(() => {
    const determineActiveSection = () => {
      const sections = Array.from(document.querySelectorAll("section[id]"));

      if (sections.length === 0) {
        console.warn("No sections with IDs found");
        return;
      }

      const sectionVisibility = sections.map((section) => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const visibleHeight =
          Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        const visiblePercentage =
          visibleHeight > 0 ? visibleHeight / rect.height : 0;

        return {
          id: section.id,
          visiblePercentage,
        };
      });

      const mostVisibleSection = sectionVisibility.reduce((prev, current) =>
        current.visiblePercentage > prev.visiblePercentage ? current : prev,
      );

      if (mostVisibleSection.visiblePercentage > 0.2) {
        setActiveSection(mostVisibleSection.id);
      }
    };

    determineActiveSection();

    window.addEventListener("scroll", determineActiveSection);

    return () => {
      window.removeEventListener("scroll", determineActiveSection);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (footerPositionRef.current !== null) {
        setIsVisible(currentScrollY < footerPositionRef.current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        isMobileMenuOpen &&
        !target.closest("#mobile-menu") &&
        !target.closest("#menu-button")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <>
      <div
        className={`fixed left-0 right-0 top-0 z-50 transform transition-all duration-500 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        } ${isScrolled ? "py-2" : "py-4"}`}
      >
        <div
          className={`mx-auto px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
            isScrolled ? "max-w-7xl" : "max-w-4xl"
          }`}
        >
          <div
            className={`flex items-center justify-between rounded-full transition-all duration-300 ${
              isScrolled
                ? "border border-border/50 bg-background/80 px-4 py-3 shadow-lg backdrop-blur-md"
                : "bg-background/50 px-3 py-4 backdrop-blur-sm"
            }`}
          >
            <Link href="#" className="flex items-center gap-2">
              <motion.div
                className="flex h-8 w-8 items-center justify-center rounded-full p-2 backdrop-blur-sm"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Avatar className="backdrop-blur-sm">
                  <AvatarImage src="/photo.jpeg" alt="CP" />
                  <AvatarFallback>CP</AvatarFallback>
                </Avatar>
              </motion.div>
              <AuroraText
                colors={["#F59E0B", "#F97316", "#10B981", "#3B82F6"]}
                className="hidden text-lg font-bold duration-500 hover:text-xl sm:inline-block"
              >
                calvin-key
              </AuroraText>
            </Link>

            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.sectionId
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-3 py-2 text-sm font-medium rounded-full transition-colors ${
                      isActive ? "text-orange" : "hover:text-orange"
                    } group`}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow via-orange to-blue rounded-full"
                        layoutId="activeSection"
                        transition={{ type: "spring", duration: 0.5 }}
                      />
                    )}
                    {!isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow rounded-full opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></span>
                    )}
                  </Link>
                )
              })}
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />

              <Button
                id="menu-button"
                variant="ghost"
                size="icon"
                className="rounded-full md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed right-4 top-16 z-50 w-56 rounded-xl border border-border/50 bg-background/95 p-4 shadow-lg backdrop-blur-lg"
          >
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-primary/10"
                >
                  <span>
                    {item.icon} {item.name}
                  </span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
