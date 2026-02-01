import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 text-center border-t border-white/10">
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://github.com/" target="_blank">
          <Github className="hover:text-yellow-400 transition" />
        </a>
        <a href="https://linkedin.com/" target="_blank">
          <Linkedin className="hover:text-yellow-400 transition" />
        </a>
        <a href="mailto:test@email.com">
          <Mail className="hover:text-yellow-400 transition" />
        </a>
      </div>

      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Krishna Karthik Portfolio
      </p>
    </footer>
  );
}
