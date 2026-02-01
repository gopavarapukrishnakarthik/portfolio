import Reveal from "@/components/ui/reveal";

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "TailwindCSS",
  "Next.js",
  "Docker",
  "AWS",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto px-6">
      <Reveal>
        <h2 className="text-4xl font-bold mb-10">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {skills.map((s, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 
              hover:border-yellow-400 hover:scale-[1.03] transition text-center"
            >
              {s}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
