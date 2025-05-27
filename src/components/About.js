import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Section } from "./ui/section";
import imagem from '../img/WhatsApp_Image_2023-06-23_at_11.54.23-removebg-preview.png';
import { UserCircle, Mail, MapPin, CheckCircle } from 'lucide-react';
import { useTheme } from "./context/ThemeContext";
import { FaWhatsapp } from "react-icons/fa";
export function About() {
    const { theme } = useTheme();
    const birthDate = new Date(1991, 4, 3); // Mês começa do zero: 0=jan, 4=maio
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return (_jsx(Section, { id: "about", title: "Sobre Mim", subtitle: "Mais de 3 anos de experi\u00EAncia transformando ideias em realidade digital.", className: "pb-24 pt-12 bg-secondary/50", titleVariant: theme === "dark" ? "light" : "default", children: _jsxs("div", { className: "relative mx-auto mt-12 max-w-4xl bg-background border border-border shadow-xl rounded-xl", children: [_jsx("div", { className: "absolute -inset-0.5 z-0 rounded-xl bg-gradient-to-r from-brand-blue-dark to-brand-blue blur opacity-20 animate-pulse pointer-events-none" }), _jsx("div", { className: "relative z-10", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-5 gap-0 ", children: [_jsxs(motion.div, { className: "relative md:col-span-2 h-80 md:h-auto bg-gradient-to-br from-brand-blue/20 to-brand-blue-dark/20", initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true, amount: 0.3 }, transition: { duration: 0.7, ease: "easeOut" }, children: [_jsx("div", { className: "absolute inset-0 bg-brand-blue/10 backdrop-blur-sm" }), _jsx(motion.div, { className: "absolute inset-0 bg-cover bg-center bg-no-repeat", style: { backgroundImage: `url(${imagem})` }, initial: { scale: 1.2, filter: "blur(8px)" }, whileInView: { scale: 1, filter: "blur(0px)" }, transition: { duration: 0.9, ease: "easeOut" }, viewport: { once: true, amount: 0.3 } }), _jsx("div", { className: "absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent" })] }), _jsxs(motion.div, { className: "md:col-span-3 p-6 md:p-10 flex flex-col bg-card", initial: { opacity: 0, x: 50 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true, amount: 0.3 }, transition: { duration: 0.7, ease: "easeOut", delay: 0.2 }, children: [_jsxs("div", { className: "mb-8", children: [_jsx("p", { className: "font-handwriting text-2xl font-bold text-brand-blue mb-1", children: "Ol\u00E1," }), _jsxs("p", { className: "mb-1 text-lg text-foreground", children: [_jsx("span", { className: "mr-1", children: "Meu nome \u00E9" }), _jsx("span", { className: "font-headline font-bold uppercase text-brand-blue", children: "Luis Paulo" })] }), _jsx(motion.div, { className: "h-1.5 w-24 bg-gradient-to-r from-brand-blue to-brand-blue-dark rounded-full mb-6", initial: { width: 0 }, whileInView: { width: "6rem" }, viewport: { once: true, amount: 0.5 }, transition: { duration: 0.7, delay: 0.4, ease: "easeOut" } })] }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 text-sm font-sans", children: [{
                                                icon: _jsx(UserCircle, { className: "h-5 w-5 text-brand-blue" }),
                                                label: "Idade:",
                                                value: age + " anos"
                                            }, {
                                                icon: _jsx(FaWhatsapp, { className: "h-5 w-5 text-brand-blue" }),
                                                label: "Celular:",
                                                value: "(11) 94522-4112",
                                                href: "https://wa.me/+5511945224112",
                                                target: "_blank"
                                            }, {
                                                icon: _jsx(Mail, { className: "h-5 w-5 text-brand-blue" }),
                                                label: "Email:",
                                                value: "lperlacher2@gmail.com",
                                                href: "mailto:lperlacher2@gmail.com"
                                            }, {
                                                icon: _jsx(MapPin, { className: "h-5 w-5 text-brand-blue" }),
                                                label: "Endereço:",
                                                value: "Santa Isabel - SP",
                                                href: "https://goo.gl/maps/baw34LozChPnLrFg9",
                                                target: "_blank"
                                            }, {
                                                icon: _jsx(CheckCircle, { className: "h-5 w-5 text-green-500" }),
                                                label: "Disponível:",
                                                value: _jsxs("span", { className: "flex items-center", children: ["Freelancer ", _jsxs("span", { className: "relative flex h-2 w-2 ml-2", children: [_jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" }), _jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-green-500" })] })] }),
                                                noLink: true
                                            }].map((item, index) => (_jsxs(motion.div, { className: "flex items-center gap-2", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.5 }, transition: { duration: 0.5, delay: 0.5 + index * 0.1, ease: "easeOut" }, children: [item.icon, _jsx("span", { className: "text-muted-foreground font-medium", children: item.label }), item.href ? (_jsx("a", { href: item.href, target: item.target || "_self", className: "text-foreground hover:text-brand-blue transition-colors whitespace-nowrap", children: item.value })) : (_jsx("span", { className: `text-foreground ${item.noLink ? '' : 'break-all  whitespace-nowrap'}`, children: item.value }))] }, item.label))) }), _jsx("div", { className: "mt-auto pt-8", children: _jsx(motion.p, { className: "text-muted-foreground text-base leading-relaxed", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.5 }, transition: { duration: 0.5, delay: 1, ease: "easeOut" }, children: "Desenvolvedor Front-End apaixonado por criar interfaces elegantes e funcionais. Especializado em React, TypeScript e Tailwind CSS para entregar experi\u00EAncias digitais de alta qualidade e performance." }) })] })] }) })] }) }));
}
