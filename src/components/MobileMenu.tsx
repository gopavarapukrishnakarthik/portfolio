import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Button */}
      <button onClick={() => setOpen(!open)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-black border-t border-white/10 p-6 flex flex-col gap-4 text-gray-300">
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>
          <a href="#timeline" onClick={() => setOpen(false)}>
            Experience
          </a>
          <a href="#projects" onClick={() => setOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </div>
  );
}
