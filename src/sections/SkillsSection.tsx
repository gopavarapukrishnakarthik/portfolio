import Reveal from "@/components/ui/reveal";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { Code, Database, Cloud, Smartphone, Zap, Globe } from "lucide-react";

const skills = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces with React, TypeScript, Next.js, TailwindCSS, and Framer Motion. Focus on performance and accessibility.",
    Icon: Code,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Backend Architecture",
    description: "Designing scalable APIs with Node.js, Express, GraphQL, and microservices patterns.",
    Icon: Database,
    className: "md:col-span-1",
  },
  {
    title: "Cloud & DevOps",
    description: "Deploying and managing applications on AWS, Docker, Kubernetes with CI/CD pipelines.",
    Icon: Cloud,
    className: "md:col-span-1",
  },
  {
    title: "Mobile Development",
    description: "Creating cross-platform mobile apps with React Native and Progressive Web Apps.",
    Icon: Smartphone,
    className: "md:col-span-1",
  },
  {
    title: "Web Performance",
    description: "Optimizing Core Web Vitals, SEO, and Lighthouse scores for better user experience.",
    Icon: Zap,
    className: "md:col-span-1",
  },
  {
    title: "Full Stack Solutions",
    description: "End-to-end application development from design to deployment with modern best practices.",
    Icon: Globe,
    className: "md:col-span-1",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-28 max-w-7xl mx-auto px-6">
      <Reveal>
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Specialized in modern web technologies with a focus on performance and user experience
          </p>
        </div>
        
        <BentoGrid>
          {skills.map((skill, i) => (
            <BentoCard
              key={i}
              title={skill.title}
              description={skill.description}
              Icon={skill.Icon}
              className={skill.className}
            />
          ))}
        </BentoGrid>
      </Reveal>
    </section>
  );
}
