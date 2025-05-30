import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Section } from "./ui/section";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { useTheme } from "./context/ThemeContext";
export function Projects() {
    const { theme } = useTheme();
    const projects = [
        {
            title: "Site Institucional Automatizase",
            description: "criação do site institucional da empresa Automatizase em React, Vite, TailwindCSS com foco em performance, e coleta de dados com pixel tracking",
            image: "https://ugkfofluhhpdgfyehema.supabase.co/storage/v1/object/public/imagens//AUTOMATIZASE%20(1).svg",
            link: "https://automatizase.com.br",
            tags: ["React", "TailwindCSS"],
            colSpan: "col-span-1",
        },
        {
            title: "Criação SaaS Automatizase",
            description: "Adaptação de projeto open source legado de multiatendimento e gestao de IA's em Vue.js Vite, Tailwindcss, Ruby on Rails, PostgreSQL, Docker, e integração com API's de IA's. Utilize a conta de demosntração: email: teste@teste.com senha: Senhateste123.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYnNpdGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            link: "https://chat.automatizase.cloud",
            tags: ["TypeScript", "Vue.js", "Ruby on Rails", "PostgreSQL", "Docker"],
            colSpan: "col-span-1 md:col-span-2",
        },
        {
            title: "Sistema de Gestão de Clínicas",
            description: "Sistema de gestão de clínicas com integração com API's de IA's, e integração com API's de pagamentos, e integração com API's de agendamento",
            image: "https://media.istockphoto.com/id/1305995602/photo/responsive-floating-responsive-design.jpg?b=1&s=170667a&w=0&k=20&c=uFqBz27v_B0UxcslnvZxd9c0D9eJAef7veRZf6b-v-A=",
            link: "#",
            tags: ["React", "Vite", "TailwindCSS", "Shadcn", "supabase", "postgreSQL", "API REST", "Trigger"],
            colSpan: "col-span-1",
        },
    ];
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.2 });
    return (_jsxs(Section, { id: "projects", title: "Projetos & Portf\u00F3lio", subtitle: "Alguns dos projetos pessoais e que j\u00E1 realizei ao longo da minha trajet\u00F3ria como programador front-end.", bgVariant: "dark", titleVariant: "light", shape: "rounded-tl", children: [_jsx("div", { ref: containerRef, className: "grid grid-cols-1 gap-6 md:grid-cols-3 mt-12", children: projects.map((project, index) => (_jsx(motion.div, { className: `${project.colSpan} h-auto`, initial: { opacity: 0, y: 20 }, animate: isInView ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.5, delay: index * 0.1 }, children: _jsx(Card, { className: "h-auto overflow-hidden bg-card border-border hover:shadow-xl hover:shadow-brand-blue/10 transition-all duration-300 group rounded-lg", children: _jsxs(CardContent, { className: "p-0 h-auto flex flex-col", children: [_jsx("div", { className: "aspect-video h-auto  w-full bg-contain bg-background bg-center bg-no-repeat transition-all duration-700 group-hover:scale-105", style: { backgroundImage: `url('${project.image}')` } }), _jsxs("div", { className: "p-5 flex flex-col flex-grow", children: [_jsx("h3", { className: "text-xl font-semibold text-gray-50 mb-2", children: project.title }), _jsx("p", { className: "text-sm text-white/80 mb-3", children: project.description }), _jsx("div", { className: "flex flex-wrap gap-2 mt-1 mb-4", children: project.tags.map((tag, tagIndex) => (_jsx("span", { className: "px-2 py-1 text-xs rounded-full bg-brand-blue-dark/30 text-white/80", children: tag }, tagIndex))) }), _jsx("div", { className: "mt-auto pt-4", children: _jsx(Button, { variant: "gradient", className: "w-full text-sm border-gray-600 text-gray-200 hover:bg-white/10 hover:text-white hover:border-white/80 gap-2 flex items-center justify-center transition-colors", asChild: true, children: _jsxs("a", { href: project.link, target: "_blank", rel: "noopener noreferrer", children: ["Ver projeto ", _jsx(ExternalLink, { className: "h-4 w-4" })] }) }) })] })] }) }) }, index))) }), _jsx(motion.div, { className: "flex justify-center mt-12", initial: { opacity: 0, y: 20 }, animate: isInView ? { opacity: 1, y: 0 } : {}, transition: { duration: 0.5, delay: projects.length * 0.1 + 0.1 }, children: _jsx(Button, { variant: "gradient", className: "px-8 py-3 text-base", children: "Ver todos os projetos" }) })] }));
}
