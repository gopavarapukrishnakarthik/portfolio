import Reveal from "@/components/ui/reveal";
import Marquee from "@/components/ui/marquee";

const techStack = [
  "React", "TypeScript", "Node.js", "MongoDB", "TailwindCSS",
  "Next.js", "Docker", "AWS", "PostgreSQL", "GraphQL",
  "Redux", "Express", "Git", "Figma", "Jest"
];

export default function TechStackSection() {
  return (
    <section className="py-16 md:py-20 max-w-7xl mx-auto px-6">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Technologies I Work With
        </h2>
        
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 py-10">
          <Marquee pauseOnHover className="[--duration:30s] [--gap:2rem]">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="px-8 py-4 rounded-xl bg-gradient-to-br from-yellow-400/10 to-purple-500/10 
                border border-yellow-400/30 hover:border-yellow-400 transition-all duration-300
                text-lg font-semibold whitespace-nowrap hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/20"
              >
                {tech}
              </div>
            ))}
          </Marquee>
        </div>
      </Reveal>
    </section>
  );
}
