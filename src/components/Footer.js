import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "./context/ThemeContext";
export function Footer() {
    const { theme } = useTheme();
    const currentYear = new Date().getFullYear();
    return (_jsx("footer", { className: "border-t border-border bg-muted py-6", children: _jsxs("div", { className: "container mx-auto flex flex-col items-center justify-center gap-4 px-4 md:flex-row md:justify-between", children: [_jsx("div", { children: _jsxs("p", { className: "text-center text-sm text-muted-foreground", children: ["\u00A9 ", currentYear, " Luis Paulo. Todos os direitos reservados."] }) }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("a", { href: "https://github.com/LuisErlacher", target: "_blank", rel: "noopener noreferrer", className: "text-muted-foreground hover:text-brand-blue transition-colors", "aria-label": "GitHub", children: _jsx(FaGithub, { className: "h-5 w-5" }) }), _jsx("a", { href: "https://linkedin.com/in/luis-paulo-perlacher", target: "_blank", rel: "noopener noreferrer", className: "text-muted-foreground hover:text-brand-blue transition-colors", "aria-label": "LinkedIn", children: _jsx(FaLinkedin, { className: "h-5 w-5" }) })] })] }) }));
}
