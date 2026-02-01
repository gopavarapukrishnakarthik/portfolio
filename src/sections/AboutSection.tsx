import Reveal from "@/components/ui/reveal";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 max-w-5xl mx-auto px-6">
      <Reveal>
        <h2 className="text-4xl font-bold mb-6">About Me</h2>

        <p className="text-gray-400 text-lg leading-relaxed">
          I’m a passionate Full Stack Developer skilled in React, Node.js,
          MongoDB and modern UI frameworks. I enjoy building scalable,
          user-friendly products with clean design systems.
        </p>
      </Reveal>
    </section>
  );
}
