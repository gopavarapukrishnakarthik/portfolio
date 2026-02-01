import AnimatedGrid from "@/components/ui/animated-grid";
import { Github, Linkedin } from "lucide-react";
import Reveal from "@/components/ui/reveal";
import Particles from "@/components/ui/particles";


export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-6">
          <AnimatedGrid />
          <Particles />


      <Reveal>
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
                  Hi, I’m <span className="text-yellow-400">Krishna </span>
                  Karthik
        </h1>
      </Reveal>

      <Reveal>
        <p className="mt-6 max-w-2xl text-gray-400 text-lg leading-relaxed">
          Full Stack Developer building modern web products with React,
          TailwindCSS and scalable backend systems.
        </p>
      </Reveal>

      <Reveal>
        <div className="flex gap-5 mt-10 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 rounded-xl bg-yellow-500 text-black font-medium hover:bg-yellow-600 transition"
          >
            View Work
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            className="px-6 py-3 rounded-xl border border-white/20 hover:border-yellow-400 transition flex items-center gap-2"
          >
            <Github size={18} />
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="px-6 py-3 rounded-xl border border-white/20 hover:border-yellow-400 transition flex items-center gap-2"
          >
            <Linkedin size={18} />
            LinkedIn
                  </a>
                  <a
  href="/resume.pdf"
  download
  className="px-6 py-3 rounded-xl border border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-black transition"
>
  Download Resume
</a>

        </div>
      </Reveal>
    </section>
  );
}
