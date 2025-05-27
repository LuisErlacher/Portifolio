import { motion } from "framer-motion";
import { Section } from "./ui/section";
import { TypedText } from "./ui/typed-text";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "./context/ThemeContext";

export function Hero() {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Calculate the movement for parallax effect
  const calcParallax = (factor: number) => {
    return {
      x: (mousePosition.x - window.innerWidth / 2) / factor,
      y: (mousePosition.y - window.innerHeight / 2) / factor,
    };
  };

  return (
    <Section 
      id="home"
      bgVariant="dark"
      shape="rounded-br"
      className="pt-32 pb-12 md:pt-40 md:pb-24 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              className="absolute opacity-10 rounded-full bg-brand-blue"
              style={{
                width: Math.random() * 200 + 50,
                height: Math.random() * 200 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: calcParallax(i * 10 + 20).x,
                y: calcParallax(i * 10 + 20).y,
              }}
              transition={{ type: "spring", stiffness: 10, damping: 20 }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="basis-1/2 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-6 text-center md:text-left">
              <motion.span
                className="font-handwriting block text-3xl text-center md:text-left text-brand-blue-light"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Olá, me chamo
              </motion.span>
              <motion.span
                className="font-headline text-5xl lg:text-6xl font-semibold inline-block text-text-heading"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Luis{" "}
              </motion.span>
              <motion.span
                className="font-headline text-5xl lg:text-6xl font-light text-brand-blue inline-block"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Paulo
              </motion.span>
            </h1>

            <motion.h2
              className="font-headline font-medium text-lg md:text-xl flex items-center gap-2 text-center md:text-left mb-6 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="h-1 w-12 rounded-full bg-brand-blue dark:bg-brand-blue-light"></div>
              <TypedText
                text="Desenvolvedor React.js Front-End"
                typingSpeed={40}
                delay={1000}
              />
            </motion.h2>

            <motion.p
              className="text-text-body text-center md:text-left mb-8 max-w-lg mx-auto md:mx-0 text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Sou um desenvolvedor front-end que ama criar coisas para a web. 
              Atualmente trabalho como freelancer e transformo ideias em sites e aplicações web modernas e responsivas.
            </motion.p>

            <motion.div
              className="flex items-center gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Button 
                variant="gradient" 
                className="shadow-lg shadow-blue-600/20"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Fale Comigo
              </Button>
              <Button 
                variant="outline" 
                className="text-foreground bg-background/10 hover:text-brand-blue dark:hover:text-brand-blue-light border-border hover:border-brand-blue dark:hover:border-brand-blue-light hover:bg-accent/50 gap-2 items-center group"
                onClick={() => {
                  window.open("https://ugkfofluhhpdgfyehema.supabase.co/storage/v1/object/sign/curriculo/Luis%20Paulo%20Erlacher%20Full-Stack%20(1).pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzBkNjNjZjgxLWY1ODAtNDg5Yi1hODQxLWM5YTU4Y2EzM2RkYyJ9.eyJ1cmwiOiJjdXJyaWN1bG8vTHVpcyBQYXVsbyBFcmxhY2hlciBGdWxsLVN0YWNrICgxKS5wZGYiLCJpYXQiOjE3NDgzNjMyNTEsImV4cCI6MTc3OTg5OTI1MX0.sfUV34nVmBqbrd7ItkqGv7R9jshemJiNsE2b8sF7o_M", "_blank");
                }}
              >
                <Download className="w-5 h-5 text-muted-foreground group-hover:text-brand-blue dark:group-hover:text-brand-blue-light transition-colors" />
                <span className="font-medium">Baixe meu CV</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Image/Visual Element */}
        <motion.div 
          className="basis-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-blue-dark to-brand-blue rounded-lg blur opacity-20 animate-pulse"></div>
            <div className="relative bg-card rounded-lg p-8 h-full">
              <div className="aspect-square rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                <svg
                  className="w-full h-full text-muted-foreground"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 14.25c-1.242 0-2.25-1.008-2.25-2.25s1.008-2.25 2.25-2.25 2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25zM12 19.875c-3.309 0-6.675-2.532-8.242-4.125-0.75-0.75-0.75-2.25 0-3-1.566-1.591-4.932-4.125-8.242-4.125 0-1.875 3.309-7.875 8.242-7.875 3.891 0 7.134 2.063 8.742 3.563 1.608-1.5 4.851-3.563 8.742-3.563 4.933 0 8.242 6 8.242 7.875-3.309 0-6.675 2.533-8.242 4.125 0.75 0.75 0.75 2.25 0 3-1.566 1.592-4.932 4.125-8.242 4.125z"></path>
                </svg>
              </div>
              
              <div className="mt-4 flex justify-between">
                <div>
                  <div className="h-2 bg-muted rounded w-20"></div>
                  <div className="h-2 bg-muted rounded w-12 mt-2"></div>
                </div>
                <div className="h-6 w-6 bg-brand-blue rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}