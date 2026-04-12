import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
      <div className="flex items-center justify-between px-6 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg shadow-black/20">
        {/* Logo */}
        <h2 className="font-bold text-xl tracking-wide text-yellow-300">KK</h2>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300 font-medium">
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>
          <a href="#timeline" className="hover:text-white transition">
            Experience
          </a>
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>

        {/* Right side icon
        <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition">
          <Moon size={18} className="text-gray-300" />
        </div> */}

        {/* Mobile Menu */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
