import AnimatedGrid from "@/components/ui/animated-grid";
import { Github, Linkedin, Mail } from "lucide-react";
import Reveal from "@/components/ui/reveal";
import Particles from "@/components/ui/particles";
import TypingAnimation from "@/components/ui/typing-animation";

export default function HeroSection() {
  return (
    <section
      id="about"
      className="relative min-h-[110vh] flex items-center overflow-hidden bg-[#f6f6f7]">
      <AnimatedGrid />
      <Particles className="opacity-30" />

      {/* RIGHT HERO IMAGE */}
      <img
        src="/portfolio/image.png"
        alt="Krishna Karthik"
        className="hidden lg:block absolute -right-36 bottom-0 h-[110vh] object-contain pointer-events-none"
      />

      {/* HERO CONTENT */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-2xl ml-[4vw] flex flex-col items-start text-left">
          <Reveal delay={0.2}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 text-gray-900">
              Hi, I am
              <span className="text-yellow-500"> Krishna</span> Karthik
            </h1>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-4 text-gray-600 text-lg md:text-xl leading-relaxed">
              <TypingAnimation
                text="Full Stack Developer with 3 years of experience building, deploying, and scaling modern web applications. I enjoy crafting reliable backend systems, intuitive user interfaces, and smooth CI/CD workflows."
                duration={30}
              />
            </div>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="flex gap-4 mt-12 flex-wrap">
              <a
                href="#projects"
                className="px-8 py-4 rounded-xl bg-yellow-500 text-white font-semibold hover:bg-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/40">
                View My Work
              </a>

              <a
                href="#contact"
                className="px-8 py-4 rounded-xl border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white transition-all duration-300 hover:scale-105 font-semibold">
                Get In Touch
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.8}>
            <div className="flex gap-6 mt-10">
              <a
                href="https://github.com/gopavarapukrishnakarthik"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-gray-300 text-gray-700 hover:border-yellow-500 hover:bg-yellow-50 transition-all duration-300 hover:scale-110">
                <Github size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/gopavarapukrishnakarthik/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-gray-300 text-gray-700 hover:border-yellow-500 hover:bg-yellow-50 transition-all duration-300 hover:scale-110">
                <Linkedin size={24} />
              </a>

              <a
                href="mailto:gkkarthik2021@gmail.com"
                className="p-3 rounded-full border border-gray-300 text-gray-700 hover:border-yellow-500 hover:bg-yellow-50 transition-all duration-300 hover:scale-110">
                <Mail size={24} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="mt-12">
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download
                className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:border-yellow-500 hover:text-yellow-600 transition-all duration-300 text-sm font-medium">
                Download Resume ↓
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
