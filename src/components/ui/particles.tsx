import { motion } from "framer-motion";

export default function Particles() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      {[...Array(25)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-2 h-2 bg-yellow-400/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
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
          }}
        />
      ))}
    </div>
  );
}
