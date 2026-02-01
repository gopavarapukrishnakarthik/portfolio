import Reveal from "@/components/ui/reveal";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Tech Company",
    year: "2023",
    desc: "Built responsive UI dashboards using React + Tailwind.",
  },
  {
    role: "Full Stack Developer",
    company: "Recruitment Platform Project",
    year: "2024",
    desc: "Developed candidate tracking + interview scheduling system.",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 max-w-5xl mx-auto px-6">
      <Reveal>
        <h2 className="text-4xl font-bold mb-10">Experience</h2>

        <div className="space-y-8 border-l border-white/20 pl-6">
          {experiences.map((exp, i) => (
            <div key={i} className="relative">
              <span className="absolute -left-[10px] top-2 w-4 h-4 rounded-full bg-yellow-400" />

              <h3 className="text-xl font-semibold text-yellow-400">
                {exp.role}
              </h3>
              <p className="text-gray-400 text-sm">
                {exp.company} • {exp.year}
              </p>
              <p className="mt-2 text-gray-500">{exp.desc}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
