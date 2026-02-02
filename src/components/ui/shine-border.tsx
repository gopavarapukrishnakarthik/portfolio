import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ShineBorderProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  borderWidth?: number;
}

export default function ShineBorder({
  children,
  className,
  color = "#fbbf24",
  borderWidth = 1,
}: ShineBorderProps) {
  return (
    <div className={cn("relative rounded-2xl h-full", className)}>
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-75"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          backgroundSize: "200% 100%",
          padding: `${borderWidth}px`,
        }}
        animate={{
          backgroundPosition: ["0% 0%", "200% 0%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="relative z-10 rounded-2xl bg-black border border-white/10 p-8 h-full">
        {children}
      </div>
    </div>
  );
}
