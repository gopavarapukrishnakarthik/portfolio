import Reveal from "@/components/ui/reveal";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 max-w-4xl mx-auto px-6">
      <Reveal>
        <h2 className="text-4xl font-bold mb-8">Contact</h2>

        <form className="space-y-4">
          <input
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10"
            placeholder="Your Name"
          />

          <input
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10"
            placeholder="Your Email"
          />

          <textarea
            rows={4}
            className="w-full p-3 rounded-xl bg-white/5 border border-white/10"
            placeholder="Message..."
          />

          <button className="w-full py-3 rounded-xl bg-yellow-500 hover:bg-yellow-600 text-black font-medium transition">
            Send Message
          </button>
        </form>
      </Reveal>
    </section>
  );
}
