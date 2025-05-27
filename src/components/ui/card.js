import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { useTheme } from "@/components/context/ThemeContext";
import { cn } from "@/lib/utils";
const Card = React.forwardRef(({ className, ...props }, ref) => {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    return (_jsx("div", { ref: ref, className: cn("service-card", className), ...props }));
});
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    return (_jsx("div", { ref: ref, className: cn("service-card-header", className), ...props }));
});
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    return (_jsx("h3", { ref: ref, className: cn("service-card-title", className), ...props }));
});
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    return (_jsx("p", { ref: ref, className: cn("service-card", className), ...props }));
});
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    return (_jsx("div", { ref: ref, className: cn("service-card-content", className), ...props }));
});
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    return (_jsx("div", { ref: ref, className: cn("service-card-footer", className), ...props }));
});
CardFooter.displayName = "CardFooter";
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
