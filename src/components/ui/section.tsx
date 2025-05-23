import { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  titleVariant?: "default" | "gradient" | "light";
  bgVariant?: "default" | "dark" | "light" | "gradient";
  shape?: "none" | "rounded-tl" | "rounded-br" | "rounded-tr" | "rounded-bl";
}

export function Section({
  id,
  title,
  subtitle,
  children,
  className,
  titleVariant = "default",
  bgVariant = "default",
  shape = "none",
  ...props
}: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const controlsTitle = useAnimation();
  const controlsContent = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controlsTitle.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.2 }
      });
      controlsContent.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.4 }
      });
      setHasAnimated(true);
    }
  }, [isInView, controlsTitle, controlsContent, hasAnimated]);

  // Determine background classes based on variant
  const bgClasses = {
    default: "bg-background",
    dark: "bg-gradient-to-tr from-gray-950 to-gray-900 text-white",
    light: "bg-secondary/50",
    gradient: "bg-gradient-to-r from-brand-blue to-brand-blue-dark text-white"
  };

  // Determine shape classes
  const shapeClasses = {
    none: "",
    "rounded-tl": "rounded-tl-[80px] md:rounded-tl-[180px]",
    "rounded-br": "rounded-br-[80px] md:rounded-br-[180px]",
    "rounded-tr": "rounded-tr-[80px] md:rounded-tr-[180px]",
    "rounded-bl": "rounded-bl-[80px] md:rounded-bl-[180px]",
  };

  // Determine title classes
  const titleClasses = {
    default: "text-text-heading font-bold",
    gradient: "bg-gradient-to-r from-brand-blue to-brand-blue-dark bg-clip-text text-transparent font-bold",
    light: "text-white font-bold"
  };

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "py-16",
        bgClasses[bgVariant],
        shapeClasses[shape],
        className
      )}
      {...props}
    >
      <div className="container mx-auto max-w-5xl p-4">
        {(title || subtitle) && (
          <motion.div
            className="relative p-4 text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={controlsTitle}
          >
            {title && (
              <h2 className={cn("relative z-10", titleClasses[titleVariant])}>
                <span className="mr-2 font-headline text-3xl">{title.split(" ")[0]}</span>
                {title.split(" ").length > 1 && (
                  <span className="font-handwriting text-4xl">
                    {title.split(" ").slice(1).join(" ")}
                  </span>
                )}
              </h2>
            )}
            {subtitle && (
              <p className="relative text-sm text-muted-foreground mt-2">
                {subtitle}
              </p>
            )}
            <div className="absolute left-1/2 top-3 z-0 h-10 w-10 -translate-x-1/2 rounded-lg bg-brand-blue/10" />
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controlsContent}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
} 