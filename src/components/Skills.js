import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HiAcademicCap, HiCodeBracketSquare } from "react-icons/hi2";
import { Section } from "./ui/section";
import { useTheme } from "./context/ThemeContext";
export function Skills() {
    const { theme } = useTheme();
    const educations = [
        {
            name: "Curso de Desenvolvimento Web Full Stack | Dev Samurai",
        },
        {
            name: "Curso de Desenvolvimento Mobile | Dev Samurai",
        },
    ];
    const skills = [
        {
            name: "HTML5/CSS3",
            icon: "images/html.svg",
            level: 95,
        },
        {
            name: "JavaScript",
            icon: "images/javascript.svg",
            level: 90,
        },
        {
            name: "React.js",
            icon: "images/react.svg",
            level: 85,
        },
        {
            name: "Node.js",
            icon: "images/nodejs.svg",
            level: 65,
        },
    ];
    return (_jsx(Section, { id: "skills", title: "Educa\u00E7\u00E3o & Skills", subtitle: "Front-end Developer | React.js | React Native | Node.js | TypeScript | JavaScript", bgVariant: "light", className: "py-16", shape: "rounded-br", children: _jsxs("div", { className: "flex flex-col gap-8 md:flex-row", children: [_jsxs("div", { className: "basis-1/2", children: [_jsxs("h3", { className: "mb-4 flex items-center gap-2 text-lg font-extrabold text-text-heading", children: [_jsx(HiAcademicCap, { className: "h-8 w-8 text-brand-blue" }), "Educa\u00E7\u00E3o"] }), educations.map((education, index) => (_jsx("div", { className: "mb-2 rounded-lg bg-card p-4 text-sm font-semibold text-card-foreground shadow-sm", children: education.name }, `education-${index}`)))] }), _jsxs("div", { className: "basis-1/2", children: [_jsxs("h3", { className: "mb-4 flex items-center gap-2 text-lg font-extrabold text-text-heading", children: [_jsx(HiCodeBracketSquare, { className: "h-8 w-8 text-brand-blue" }), "Skills"] }), _jsx("div", { className: "grid grid-cols-1 gap-4 font-semibold md:grid-cols-2", children: skills.map((skill, index) => (_jsxs("div", { className: "flex flex-row items-center gap-2 md:flex-col md:items-start", children: [_jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-lg bg-card p-2 shadow-sm", children: _jsx("img", { src: skill.icon, alt: skill.name, className: "h-10 w-10 rounded" }) }), _jsxs("div", { className: "w-full flex-grow", children: [_jsx("h4", { className: "font-headline text-text-heading", children: skill.name }), _jsx("div", { className: "h-2.5 w-full rounded-full bg-muted", children: _jsx("div", { className: "h-2.5 rounded-full bg-brand-blue", style: { width: `${skill.level}%` } }) })] })] }, `skill-${index}`))) })] })] }) }));
}
