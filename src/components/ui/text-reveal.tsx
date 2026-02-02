import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
}

export default function TextReveal({ text, className = "" }: TextRevealProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <div ref={targetRef} className={`min-h-screen flex items-center justify-center ${className}`}>
      <motion.h2
        style={{ opacity, scale }}
        className="text-5xl md:text-7xl font-bold text-center leading-tight"
      >
        {text}
      </motion.h2>
    </div>
  );
}