import { motion } from "framer-motion";

export default function AnimatedGrid() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Gradient Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br 
        from-yellow-500/30 via-purple-500/10 to-black"
        animate={{
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      {/* Soft Radial Light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff10,transparent_70%)]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:80px_80px]" />
    </div>
  );
}
