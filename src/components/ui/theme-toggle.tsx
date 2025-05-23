import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiSun, HiMoon } from "react-icons/hi";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // On mount, read the preferred theme from localStorage or browser preference
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme as "light" | "dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  // Update theme class on document root and save to localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  return (
    <motion.button
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-brand-blue-light to-brand-blue text-primary-foreground shadow-lg hover:shadow-xl"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: theme === "light" ? 0 : 180 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        {theme === "light" ? <HiMoon className="h-5 w-5" /> : <HiSun className="h-5 w-5" />}
      </motion.div>
    </motion.button>
  );
} 