import AnimatedGrid from "@/components/ui/animated-grid";
import { Github, Linkedin, Mail } from "lucide-react";
import Reveal from "@/components/ui/reveal";
import Particles from "@/components/ui/particles";
import TypingAnimation from "@/components/ui/typing-animation";
import OrbitingLines from "@/components/ui/orbiting-lines";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row justify-center items-center px-6 py-20 gap-12">
      <AnimatedGrid />
      <Particles className="opacity-40" />

      {/* Text Content */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
        <Reveal delay={0.2}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6">
            Hi, I am 
            <span className="text-yellow-400"> Krishna</span> Karthik
          </h1>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-4 text-gray-300 text-lg md:text-xl leading-relaxed">
            <TypingAnimation
              text="Full Stack Developer passionate about building modern web applications with React, TypeScript, and scalable backend systems. I craft beautiful, performant experiences that users love."
              duration={30}
            />
          </div>
        </Reveal>

        <Reveal delay={0.6}>
          <div className="flex gap-4 mt-12 justify-center lg:justify-start flex-wrap">
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/50"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-xl border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 hover:scale-105 font-semibold"
            >
              Get In Touch
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.8}>
          <div className="flex gap-6 mt-10">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/20 hover:border-yellow-400 hover:bg-yellow-400/10 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/20 hover:border-yellow-400 hover:bg-yellow-400/10 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="mailto:your.email@example.com"
              className="p-3 rounded-full border border-white/20 hover:border-yellow-400 hover:bg-yellow-400/10 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <a
            href="/resume.pdf"
            download
            className="mt-8 px-6 py-3 rounded-xl border border-white/30 text-white/80 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300 text-sm font-medium"
          >
            Download Resume ↓
          </a>
        </Reveal>
      </div>

      {/* Orbiting Image */}
      <Reveal delay={0.3}>
        <div className="flex-shrink-0">
          <OrbitingLines 
            imageSrc="/portfolio/image.png" 
            imageAlt="Krishna Karthik"
            numberOfOrbits={3}
          />
        </div>
      </Reveal>
    </section>
  );
}
