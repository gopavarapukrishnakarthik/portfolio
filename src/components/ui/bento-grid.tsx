import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

interface BentoCardProps {
  title: string;
  description: string;
  Icon?: any;
  className?: string;
  background?: React.ReactNode;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-6",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  title,
  description,
  Icon,
  className,
  background,
}: BentoCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-2xl",
        "bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-yellow-400/50",
        "transition-all duration-300 p-8 shadow-lg hover:shadow-2xl hover:shadow-yellow-400/10",
        className
      )}
    >
      {background && (
        <div className="absolute inset-0 -z-10 opacity-30">
          {background}
        </div>
      )}
      
      <div className="flex-1">
        {Icon && (
          <div className="mb-6 w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-7 h-7 text-yellow-400" />
          </div>
        )}
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
      
      <div className="mt-6 flex items-center text-yellow-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Learn more →
      </div>
    </motion.div>
  );
}
