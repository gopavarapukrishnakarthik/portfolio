import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface OrbitingLinesProps {
  imageSrc: string;
  imageAlt?: string;
  className?: string;
  numberOfOrbits?: number;
}

export default function OrbitingLines({
  imageSrc,
  imageAlt = "Profile",
  className,
  numberOfOrbits = 3,
}: OrbitingLinesProps) {
  const orbits = Array.from({ length: numberOfOrbits }, (_, i) => ({
    size: 280 + i * 80,
    duration: 20 + i * 10,
    delay: i * 2,
  }));

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      {/* Orbiting Lines */}
      {orbits.map((orbit, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full border-2 border-yellow-400/30"
          style={{
            width: orbit.size,
            height: orbit.size,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: orbit.duration,
            repeat: Infinity,
            ease: "linear",
            delay: orbit.delay,
          }}
        >
          {/* Orbiting dots */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/50"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}

      {/* Center Image */}
      <div className="relative z-10 rounded-full overflow-hidden border-4 border-yellow-400/50 shadow-2xl shadow-yellow-400/20 w-64 h-64 bg-black">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-yellow-400/5 blur-3xl -z-10" />
    </div>
  );
}
