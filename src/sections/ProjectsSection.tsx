import Reveal from "@/components/ui/reveal";

const projects = [
  {
    title: "Recruitment Dashboard",
    desc: "Candidate tracking + interview scheduling platform.",
  },
  {
    title: "Portfolio Website",
    desc: "Modern portfolio built with React + Magic UI animations.",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <Reveal>
        <h2 className="text-4xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/5 border border-white/10 p-7 
              hover:border-yellow-400 hover:scale-[1.02] transition"
            >
              <h3 className="text-xl font-semibold text-yellow-400">
                {p.title}
              </h3>
              <p className="mt-4 text-gray-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
