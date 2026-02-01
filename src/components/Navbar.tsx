import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h2 className="font-bold text-lg text-yellow-400">
         Krishna.dev
        </h2>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#about" className="hover:text-yellow-400 transition">
            About
          </a>
          <a href="#timeline" className="hover:text-yellow-400 transition">
            Experience
          </a>
          <a href="#projects" className="hover:text-yellow-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </nav>
  );
}
