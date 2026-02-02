import Reveal from "@/components/ui/reveal";
import ShineBorder from "@/components/ui/shine-border";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "A full-featured online shopping platform with real-time inventory management, Stripe payment integration, admin dashboard, and AI-powered product recommendations.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis"],
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://demo.example.com",
  },
  {
    title: "Task Management System",
    desc: "Collaborative project management tool with drag-and-drop kanban boards, real-time updates, team analytics, and integrations with Slack and GitHub.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "TailwindCSS"],
    github: "https://github.com/yourusername/task-manager",
    demo: "https://demo.example.com",
  },
  {
    title: "AI Content Generator",
    desc: "AI-powered content creation platform using OpenAI GPT-4. Features include blog post generation, SEO optimization, multi-language support, and content scheduling.",
    tech: ["React", "OpenAI", "Express", "PostgreSQL", "AWS"],
    github: "https://github.com/yourusername/ai-content",
    demo: "https://demo.example.com",
  },
  {
    title: "Real-Time Analytics Dashboard",
    desc: "Live data visualization dashboard with customizable widgets, real-time metrics, export capabilities, and automated report generation for business intelligence.",
    tech: ["Next.js", "D3.js", "WebSocket", "Redis", "Docker"],
    github: "https://github.com/yourusername/analytics",
    demo: "https://demo.example.com",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-28 max-w-7xl mx-auto px-6">
      <Reveal>
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <ShineBorder className="h-full">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-3">
                      {p.title}
                    </h3>
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

                  <div className="flex gap-6 pt-4">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-base text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium"
                    >
                      <Github size={20} />
                      View Code
                    </a>
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-base text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </ShineBorder>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
