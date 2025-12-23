import Footer from "@/components/Footer";
import AboutSection from "./components/About";
import ContactSection from "./components/Contact";
import ExperienceSection from "./components/Experience";
import HeroSection from "./components/Hero";
import ProjectsSection from "./components/Projects";
import SkillsSection from "./components/Skills";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import EducationSection from "./components/Education";

const HomePage = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      {/* <ExperienceSection /> */}
      <ContactSection />
      <Footer />
      <ScrollProgress className="bottom-[0px]" />
    </main>
  );
};

export default HomePage;
