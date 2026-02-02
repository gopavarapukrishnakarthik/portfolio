import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParticlesProps {
  className?: string;
  quantity?: number;
  color?: string;
}

export default function Particles({ 
  className, 
  quantity = 25,
  color = "#fbbf24"
}: ParticlesProps) {
  return (
    <div className={cn("absolute inset-0 -z-20 overflow-hidden", className)}>
      {[...Array(quantity)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{ backgroundColor: color }}
          initial={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
            opacity: 0.2,
          }}
          animate={{
            y: ["0%", "100%"],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
