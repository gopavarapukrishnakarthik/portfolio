import { useEffect, useState } from "react";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
}

export default function TypingAnimation({
  text,
  duration = 40,
  className = "",
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, duration);

      return () => clearTimeout(timeout);
    }
  }, [index, text, duration]);

  return (
    <span className={className}>
      {displayedText}
      {index < text.length && (
        <span className="animate-pulse text-yellow-400">|</span>
      )}
    </span>
  );
}
