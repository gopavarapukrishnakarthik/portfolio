import Reveal from "@/components/ui/reveal";
import ShineBorder from "@/components/ui/shine-border";
import { ExternalLink, Github, Lock } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "HR Portal Website",
    desc: "Internal recruitment and HR management platform with authentication and role-based access. Includes job postings, candidate tracking, employee management, leave and payroll handling, and office workflow automation.",
    tech: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux",
      "Tailwind CSS",
      "Shadcn/UI",
    ],
  },
  {
    title:  "Krishi-CHC portal",
    desc: "A digital Custom Hiring Center (CHC) platform enabling farmers within FPOs to manage agricultural machinery, bookings, and crop-related operations via a web application.",
    tech: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Zod",
      "REST APIs",
    ],
  },
  {
    title: "Fitpulse",
    desc: "Modern gym application for tracking workouts and progress. Built with a component-driven architecture, smooth animations, and persistent client-side state for a premium user experience.",
    tech: [
      "React.js",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Magic UI",
      "React Router DOM",
      "Zustand",
      "LocalStorage",
      "Axios",
      "Fetch API",
      "Github Pages",
    ],
    github: "https://github.com/gopavarapukrishnakarthik/fitpulse",
    demo: "https://gopavarapukrishnakarthik.github.io/fitpulse/",
  },
  {
    title: "TripWise – Route Planning Application",
    desc: "Interactive trip planning application with map-based routing and stop management. Supports driving, walking, and cycling routes using open-source mapping and routing services.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Zustand",
      "MapLibre",
      "OpenStreetMap",
      "OSRM",
    ],
    github: "https://github.com/gopavarapukrishnakarthik/Tripwise",
    demo: "https://gopavarapukrishnakarthik.github.io/Tripwise/",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-28 max-w-7xl mx-auto px-6">
      <Reveal>
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in full-stack
            development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => {
            const hasLinks = Boolean(p.github || p.demo);

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <ShineBorder className="h-full">
                  <div className="space-y-6 h-full flex flex-col">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">
                          {p.title}
                        </h3>

                        {!hasLinks && (
                          <span className="flex items-center gap-1.5 px-3 py-1 text-xs rounded-full bg-gray-700/40 text-gray-300 border border-gray-600">
                            <Lock size={14} />
                            Private Project
                          </span>
                        )}
                      </div>

                      <p className="text-gray-300 leading-relaxed text-base">
                        {p.desc}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-1.5 text-sm rounded-full bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {hasLinks && (
                      <div className="flex gap-6 pt-4 mt-auto">
                        {p.github && (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-base text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium"
                          >
                            <Github size={20} />
                            View Code
                          </a>
                        )}

                        {p.demo && (
                          <a
                            href={p.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-base text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium"
                          >
                            <ExternalLink size={20} />
                            Live Demo
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </ShineBorder>
              </motion.div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
