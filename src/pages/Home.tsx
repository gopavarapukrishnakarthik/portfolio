import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import SkillsSection from "@/sections/SkillsSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";
import TechStackSection from "@/sections/TechStackSection";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Navbar />

      <HeroSection />
      <TechStackSection />
      <SkillsSection />
      <Timeline />
      <ProjectsSection />
      <ContactSection />

      <Footer />
    </div>
  );
}
