import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { FaSpinner, FaWhatsapp } from "react-icons/fa";
import { HiCheckCircle, HiOutlineEnvelope, HiOutlineMapPin, } from "react-icons/hi2";
import { Section } from "./ui/section";
import { Button } from "./ui/button";
import { useTheme } from "./context/ThemeContext";
export function Contact() {
    const { theme } = useTheme();
    const form = useRef(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const sendEmail = (event) => {
        event.preventDefault();
        if (!form.current)
            return;
        setLoading(true);
        emailjs
            .sendForm("service_y8vmf2b", "template_mgiwzfq", form.current, "duLFvgQ7kx8DXtquZ")
            .then(() => {
            setSuccess(true);
            setLoading(false);
        }, (error) => {
            setError(true);
            setLoading(false);
            console.error(error);
        });
    };
    const contacts = [
        {
            name: "WhatsApp",
            description: _jsx("span", { className: "text-body", children: "+55 11 94522-4112" }),
            link: "https://wa.me/5511945224112?text=Olá...",
            icon: _jsx(FaWhatsapp, { className: "h-10 w-10" }),
        },
        {
            name: "Email",
            description: "lperlacher2@gmail.com",
            link: "mailto:lperlacher2@gmail.com?subject=Olá...",
            icon: _jsx(HiOutlineEnvelope, { className: "h-10 w-10" }),
        },
        {
            name: "Santa Isabel",
            description: "Chacara Boa Vista",
            link: "https://goo.gl/maps/baw34LozChPnLrFg9",
            icon: _jsx(HiOutlineMapPin, { className: "h-10 w-10" }),
        },
    ];
    return (_jsx(Section, { id: "contact", title: "Fale Comigo", subtitle: "Entre em contato por formul\u00E1rio ou WhatsApp, com certeza irei poder te ajudar.", className: "py-16", children: _jsxs("div", { className: "flex flex-col gap-6 md:flex-row", children: [_jsxs("div", { className: "basis-2/3 relative", children: [_jsx("div", { className: "absolute -inset-1.5 z-0 rounded-xl bg-gradient-primary blur opacity-20 animate-pulse pointer-events-none" }), _jsxs("form", { ref: form, onSubmit: sendEmail, className: "relative z-10 bg-background/30 backdrop-blur-sm p-6 rounded-xl", children: [_jsxs("div", { className: "mb-4", children: [_jsx("label", { htmlFor: "message", className: "mb-2 block ps-4 font-headline font-semibold", children: "Mensagem:" }), _jsx("textarea", { id: "message", name: "message", className: "h-36 w-full rounded-lg border border-white/30 bg-white/10 p-2 outline-none focus:ring-2 focus:ring-white/50", required: true })] }), _jsxs("div", { className: "mb-6 flex flex-col gap-4 md:flex-row", children: [_jsxs("div", { className: "flex-grow", children: [_jsx("label", { htmlFor: "fullName", className: "mb-2 block ps-4 font-headline font-semibold", children: "Seu nome:" }), _jsx("input", { className: "w-full rounded-lg border border-white/30 bg-white/10 p-2 outline-none focus:ring-2 focus:ring-white/50", type: "text", name: "fullName", id: "fullName", required: true })] }), _jsxs("div", { className: "flex-grow", children: [_jsx("label", { htmlFor: "email", className: "mb-2 block ps-4 font-headline font-semibold", children: "Seu email:" }), _jsx("input", { className: "w-full rounded-lg border border-white/30 bg-white/10 p-2 outline-none focus:ring-2 focus:ring-white/50", type: "email", name: "email", id: "email", required: true })] })] }), _jsxs("div", { children: [_jsxs(Button, { type: "submit", variant: "gradient", className: "shadow-lg shadow-blue-600/20", disabled: loading, children: [loading && _jsx(FaSpinner, { className: "h-4 w-4 animate-spin" }), success && _jsx(HiCheckCircle, { className: "h-4 w-4" }), "Enviar mensagem"] }), error && (_jsx("p", { className: "mt-2", children: "Ocorreu um erro ao enviar a mensagem, tente novamente mais tarde." }))] })] })] }), _jsx("div", { className: "basis-1/3", children: contacts.map((contact, index) => (_jsxs("div", { className: "mb-4 flex items-center gap-4 rounded-lg border border-dashed border-white/30 p-4 relative bg-background/30 backdrop-blur-sm", children: [_jsx("div", { className: "absolute -inset-1.5 z-0 rounded-lg bg-gradient-primary blur opacity-20 animate-pulse pointer-events-none" }), _jsxs("div", { className: "relative z-10 flex items-center gap-4 w-full", children: [contact.icon, _jsxs("div", { children: [_jsx("p", { className: "font-headline font-semibold", children: contact.name }), _jsx("a", { href: contact.link, target: "_blank", className: "text-body underline underline-offset-2 hover:text-brand-blue", children: contact.description })] })] })] }, `contact-${index}`))) })] }) }));
}
