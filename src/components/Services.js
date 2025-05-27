import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTheme } from "./context/ThemeContext";
import { Section } from "./ui/section";
import { HiCommandLine, HiComputerDesktop, HiDevicePhoneMobile, } from "react-icons/hi2";
export function Services() {
    const currentTheme = useTheme();
    const { theme } = currentTheme;
    const services = [
        {
            title: _jsx("span", { className: "service-card-title", children: "Web" }),
            description: _jsx("span", { className: "service-card-description", children: "Desenvolvimento de sites e sistemas web est\u00E1ticos e din\u00E2micos com React.js, Next.js, Vite, HTML5 e CSS3." }),
            icon: _jsx(HiComputerDesktop, { className: "h-12 w-12 service-card-icon" }),
        },
        {
            title: _jsx("span", { className: "service-card-title", children: "Sistemas" }),
            description: _jsx("span", { className: "service-card-description", children: "Desenvolvimento de sistemas e APIs REST com Node.js." }),
            icon: _jsx(HiCommandLine, { className: "h-12 w-12 service-card-icon" }),
        },
        {
            title: _jsx("span", { className: "service-card-title", children: "Mobile" }),
            description: _jsx("span", { className: "service-card-description", children: "Desenvolvimento de aplicativos Android e iOS." }),
            icon: _jsx(HiDevicePhoneMobile, { className: "h-12 w-12 service-card-icon" }),
        },
    ];
    return (_jsx(Section, { id: "services", children: _jsx("div", { className: "service-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ", children: services.map((service, index) => (_jsxs("div", { className: "service-card", children: [_jsx("div", { className: "mb-2", children: service.icon }), _jsx("h3", { className: "service-card-title", children: service.title }), _jsx("p", { className: "service-card-description", children: service.description })] }, `service-${index}`))) }) }));
}
