import Reveal from "@/components/ui/reveal";
import ShineBorder from "@/components/ui/shine-border";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 max-w-5xl mx-auto px-6">
      <Reveal>
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I would love to hear from you. Let us create something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
            <div className="w-14 h-14 rounded-full bg-yellow-400/10 flex items-center justify-center mb-4">
              <Mail className="w-7 h-7 text-yellow-400" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <a href="mailto:your.email@example.com" className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">
              your.email@example.com
            </a>
          </div>
          
          <div className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
            <div className="w-14 h-14 rounded-full bg-yellow-400/10 flex items-center justify-center mb-4">
              <Phone className="w-7 h-7 text-yellow-400" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Phone</h3>
            <a href="tel:+1234567890" className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">
              +1 (234) 567-890
            </a>
          </div>
          
          <div className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105">
            <div className="w-14 h-14 rounded-full bg-yellow-400/10 flex items-center justify-center mb-4">
              <MapPin className="w-7 h-7 text-yellow-400" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Location</h3>
            <p className="text-sm text-gray-400">San Francisco, CA</p>
          </div>
        </div>

        <ShineBorder>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                  focus:border-yellow-400 focus:outline-none transition-colors text-white placeholder:text-gray-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Your Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                  focus:border-yellow-400 focus:outline-none transition-colors text-white placeholder:text-gray-500"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                focus:border-yellow-400 focus:outline-none transition-colors text-white placeholder:text-gray-500"
                placeholder="Project Inquiry"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
              <textarea
                rows={6}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                focus:border-yellow-400 focus:outline-none transition-colors resize-none text-white placeholder:text-gray-500"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-yellow-500 hover:bg-yellow-400 
              text-black font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-yellow-500/50
              flex items-center justify-center gap-2 text-lg"
            >
              Send Message
              <Send size={20} />
            </button>
          </form>
        </ShineBorder>
      </Reveal>
    </section>
  );
}
