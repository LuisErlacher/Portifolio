import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";
export function Section({ id, title, subtitle, children, className, titleVariant = "default", bgVariant = "default", shape = "none", ...props }) {
    const ref = useRef(null);
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
        dark: "bg-background",
        light: "bg-background"
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
        default: "text-body",
        light: "text-body",
        dark: "text-body",
    };
    return (_jsx("section", { ref: ref, id: id, className: cn("py-16", bgClasses[bgVariant], shapeClasses[shape], className), ...props, children: _jsxs("div", { className: "container mx-auto max-w-5xl p-4", children: [(title || subtitle) && (_jsxs(motion.div, { className: "relative p-4 text-center mb-12", initial: { opacity: 0, y: -20 }, animate: controlsTitle, children: [title && (_jsxs("h2", { className: cn("relative z-10", titleClasses[titleVariant]), children: [_jsx("span", { className: "mr-2 font-headline text-3xl", children: title.split(" ")[0] }), title.split(" ").length > 1 && (_jsx("span", { className: "font-handwriting text-4xl", children: title.split(" ").slice(1).join(" ") }))] })), subtitle && (_jsx("p", { className: "relative text-sm text-muted-foreground mt-2", children: subtitle })), _jsx("div", { className: "absolute left-1/2 top-3 z-0 h-10 w-10 -translate-x-1/2 rounded-lg bg-brand-blue/10" })] })), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: controlsContent, children: children })] }) }));
}
