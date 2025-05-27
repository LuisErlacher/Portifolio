import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaQuoteLeft } from "react-icons/fa";
import { Section } from "./ui/section";
import { useTheme } from "./context/ThemeContext";
export function Testimonials() {
    const { theme } = useTheme();
    return (_jsx(Section, { id: "testimonials", title: "Depoimentos de Clientes", bgVariant: "default", className: "py-16", children: _jsxs("figure", { children: [_jsx(FaQuoteLeft, { className: "h-8 w-8 text-muted-foreground" }), _jsx("blockquote", { className: "mb-6", children: _jsx("p", { className: "text-2xl text-text-heading", children: "Precisei de uma autera\u00E7\u00E3o visual em meu site e o Luis resolveu muito rapido e me entregou o projeto no prazo e executando corretamente conforme combinado no nosso contrato. Recomendo o trabalho dele para todos que desejam um trabalho s\u00E9rio." }) }), _jsxs("figcaption", { className: "flex items-center justify-center gap-2", children: [_jsx("img", { className: "h-6 w-6 rounded-full", src: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhciUyMHBob3RvfGVufDB8fDB8fHww&auto=format&fit=crop&w=50&q=60", alt: "Carlos Henrique" }), _jsxs("div", { className: "flex items-center divide-x-2 divide-border", children: [_jsx("div", { className: "pr-3 font-medium text-text-heading", children: "Carlos Henrique" }), _jsx("div", { className: "pl-3 text-sm font-light text-muted-foreground", children: "rvrtelecon.com.br" })] })] })] }) }));
}
