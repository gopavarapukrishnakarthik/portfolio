import AnimatedGrid from "@/components/ui/animated-grid";
import { Github, Linkedin, Mail } from "lucide-react";
import Reveal from "@/components/ui/reveal";
import Particles from "@/components/ui/particles";
import TypingAnimation from "@/components/ui/typing-animation";
import OrbitingLines from "@/components/ui/orbiting-lines";

export default function HeroSection() {
  return (
    <section id="about"  className="relative min-h-screen flex flex-col lg:flex-row justify-center items-center px-6 py-20 gap-12">
      <AnimatedGrid />
      <Particles className="opacity-40" />

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
              text="Full Stack Developer and DevOps Engineer with 3 years of experience building, deploying, and scaling modern web applications. I enjoy crafting reliable backend systems, intuitive user interfaces, and smooth CI/CD workflows that make products fast, secure, and easy to maintain."
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
              href="https://github.com/gopavarapukrishnakarthik"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/20 hover:border-yellow-400 hover:bg-yellow-400/10 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/gopavarapukrishnakarthik/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/20 hover:border-yellow-400 hover:bg-yellow-400/10 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="mailto:gkkarthik2021@gmail.com"
              className="p-3 rounded-full border border-white/20 hover:border-yellow-400 hover:bg-yellow-400/10 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="mt-12">
          <a
             href={`${import.meta.env.BASE_URL}resume.pdf`}
            download
            className="mt-8 px-6 py-3 rounded-xl border border-white/30 text-white/80 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300 text-sm font-medium"
          >
            Download Resume ↓
          </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.3}>
        <div className="shrink-0 ml-14">
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
