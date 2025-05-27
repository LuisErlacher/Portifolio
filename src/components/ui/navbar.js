import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";
export function Navbar({ className, items, ...props }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const toggleMenu = () => setIsOpen(!isOpen);
    return (_jsxs("nav", { className: cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans", isScrolled ? "bg-background/80 backdrop-blur-md shadow-lg" : "bg-transparent", className), ...props, children: [_jsxs("div", { className: "container mx-auto flex h-20 items-center justify-between px-4 md:px-6", children: [_jsxs(motion.a, { href: "#home", className: "font-headline text-3xl font-bold text-text-heading hover:text-brand-blue transition-colors", whileHover: { scale: 1.05 }, children: ["Luis", _jsx("span", { className: "text-brand-blue", children: "Paulo" })] }), _jsx("ul", { className: "hidden items-center space-x-2 md:flex", children: items.map((item) => (_jsx("li", { children: _jsx(motion.a, { href: item.href, className: "px-3 py-2 text-sm font-medium text-text-body hover:text-text-link transition-colors rounded-md hover:bg-accent/50", whileHover: { y: -2 }, children: item.title }) }, item.title))) }), _jsx("div", { className: "md:hidden", children: _jsx(Button, { variant: "ghost", size: "icon", onClick: toggleMenu, className: "text-text-heading hover:text-text-link hover:bg-accent/50 rounded-md", "aria-label": "Abrir menu", children: isOpen ? _jsx(X, { className: "h-6 w-6" }) : _jsx(Menu, { className: "h-6 w-6" }) }) })] }), _jsx(AnimatePresence, { children: isOpen && (_jsx(motion.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, exit: { opacity: 0, height: 0 }, transition: { duration: 0.3, ease: "easeInOut" }, className: "md:hidden bg-background/95 backdrop-blur-md shadow-lg overflow-hidden", children: _jsx("ul", { className: "flex flex-col items-center space-y-2 px-4 py-6", children: items.map((item) => (_jsx("li", { className: "w-full", children: _jsx("a", { href: item.href, onClick: () => setIsOpen(false), className: "block w-full rounded-md px-4 py-3 text-center text-base font-medium text-text-body hover:bg-accent hover:text-text-link transition-colors", children: item.title }) }, item.title))) }) })) })] }));
}
const Button = React.forwardRef(({ className, variant, size, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
    const variantClasses = {
        ghost: "hover:bg-accent hover:text-accent-foreground",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        gradient: "bg-gradient-to-r from-brand-blue-light to-brand-blue text-primary-foreground hover:opacity-90"
    };
    const sizeClasses = {
        icon: "h-10 w-10",
        sm: "h-9 rounded-md px-3",
        md: "h-10 px-4 py-2",
        lg: "h-11 rounded-md px-8"
    };
    return (_jsx("button", { className: cn(baseClasses, variant && variantClasses[variant] ? variantClasses[variant] : "", size && sizeClasses[size] ? sizeClasses[size] : "", className), ref: ref, ...props }));
});
Button.displayName = "Button";
