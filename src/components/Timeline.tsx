import Reveal from "@/components/ui/reveal";

const experiences = [
  {
    role: "DevOps Engineer",
    company: "Enterprise Projects",
    year: "Apr 2023 – Mar 2024",
    desc: "Managed Kubernetes clusters ensuring high availability and performance. Automated CI/CD pipelines using Jenkins and Git, supported containerized applications with Docker, and assisted with AWS infrastructure (EKS, EC2, S3).",
  },
  {
    role: "Full Stack Developer",
    company: "Product & Platform Development",
    year: "Mar 2024 – Present",
    desc: "Developing internal HR systems and Krishi-CHC, a digital Custom Hiring Center platform for FPOs. Designed and built a scalable backend using Node.js, Express, PostgreSQL, and Drizzle ORM, while creating modern React-based UIs with TypeScript, Tailwind CSS, and Shadcn/UI.",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 max-w-5xl mx-auto px-6">
      <Reveal>
        <h2 className="text-4xl font-bold mb-10">Experience</h2>

        <div className="space-y-10 border-l border-white/20 pl-6">
          {experiences.map((exp, i) => (
            <div key={i} className="relative">
              <span className="absolute -left-6 top-2 w-4 h-4 rounded-full bg-yellow-400" />

              <h3 className="text-xl md:text-2xl font-semibold text-yellow-400">
                {exp.role}
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                {exp.company} • {exp.year}
              </p>
              <p className="mt-3 text-gray-500 leading-relaxed">
                {exp.desc}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
