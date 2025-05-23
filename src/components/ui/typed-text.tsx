import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypedTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
  typingSpeed?: number;
  showCursor?: boolean;
  delay?: number;
  className?: string;
}

export function TypedText({
  text,
  typingSpeed = 50,
  showCursor = true,
  delay = 0,
  className,
  ...props
}: TypedTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const cursorControls = useAnimation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (isTyping && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [text, currentIndex, typingSpeed, isTyping]);

  useEffect(() => {
    if (showCursor) {
      cursorControls.start({
        opacity: [1, 0],
        transition: {
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        },
      });
    }
  }, [showCursor, cursorControls]);

  return (
    <span className={cn("relative inline-block", className)} {...props}>
      {displayedText}
      {showCursor && (
        <motion.span
          className="inline-block w-[2px] h-[1.2em] bg-blue-600 dark:bg-blue-400 ml-[2px]"
          animate={cursorControls}
        />
      )}
    </span>
  );
} 