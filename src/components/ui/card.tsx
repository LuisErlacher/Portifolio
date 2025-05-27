import * as React from "react"
import { useTheme } from "@/components/context/ThemeContext"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div
      ref={ref}
      className={cn(
      "service-card",
      className
    )}
    {...props}
  />
)
})
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
  <div
    ref={ref}
    className={cn("service-card-header", className)}
    {...props}
  />
)
})
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
  <h3
    ref={ref}
    className={cn(
      "service-card-title",
      className
    )}
    {...props}
  />
)
})
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
  <p
    ref={ref}
    className={cn("service-card", className)}
    {...props}
  />
)
})
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
  <div ref={ref} className={cn("service-card-content", className)}
   {...props}
 />
)
})
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
  <div
    ref={ref}
    className={cn("service-card-footer", className)}
    {...props}
  />
)
})
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } 