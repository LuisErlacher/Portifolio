import { motion } from "framer-motion";
import { Section } from "./ui/section";
import imagem from '../img/WhatsApp_Image_2023-06-23_at_11.54.23-removebg-preview.png';
import { UserCircle, Smartphone, Mail, MapPin, CheckCircle } from 'lucide-react';
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
    return (
        <Section
            id="about"
            title="Sobre Mim"
            subtitle="Mais de 3 anos de experiência transformando ideias em realidade digital."
            className="pb-24 pt-12 bg-secondary/50"
            titleVariant={theme === "dark" ? "light" : "default"}
        >
            <div className="relative mx-auto mt-12 max-w-4xl bg-background border border-border shadow-xl rounded-xl">
                {/* Efeito pulsante azul atrás */}
                <div className="absolute -inset-0.5 z-0 rounded-xl bg-gradient-to-r from-brand-blue-dark to-brand-blue blur opacity-20 animate-pulse pointer-events-none" />
                {/* Conteúdo principal do About */}
                <div className="relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-0 ">
                        {/* Photo Column */}
                        <motion.div 
                            className="relative md:col-span-2 h-80 md:h-auto bg-gradient-to-br from-brand-blue/20 to-brand-blue-dark/20"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            <div className="absolute inset-0 bg-brand-blue/10 backdrop-blur-sm"></div>
                            <motion.div 
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: `url(${imagem})` }}
                                initial={{ scale: 1.2, filter: "blur(8px)" }}
                                whileInView={{ scale: 1, filter: "blur(0px)" }}
                                transition={{ duration: 0.9, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.3 }}
                            ></motion.div>
                            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent"></div>
                        </motion.div>

                        {/* Content Column */}
                        <motion.div 
                            className="md:col-span-3 p-6 md:p-10 flex flex-col bg-card"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        >
                            <div className="mb-8">
                                <p className="font-handwriting text-2xl font-bold text-brand-blue mb-1">
                                    Olá,
                                </p>
                                <p className="mb-1 text-lg text-foreground">
                                    <span className="mr-1">Meu nome é</span>
                                    <span className="font-headline font-bold uppercase text-brand-blue">
                                        Luis Paulo
                                    </span>
                                </p>
                                <motion.div 
                                    className="h-1.5 w-24 bg-gradient-to-r from-brand-blue to-brand-blue-dark rounded-full mb-6"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "6rem" }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                                ></motion.div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 text-sm font-sans">
                                {[{
                                    icon: <UserCircle className="h-5 w-5 text-brand-blue" />,
                                    label: "Idade:",
                                    value: age + " anos"
                                }, {
                                    icon: <FaWhatsapp className="h-5 w-5 text-brand-blue" />,
                                    label: "Celular:",
                                    value: "(11) 94522-4112",
                                    href: "https://wa.me/+5511945224112",
                                    target: "_blank"
                                }, {
                                    icon: <Mail className="h-5 w-5 text-brand-blue" />,
                                    label: "Email:",
                                    value: "lperlacher2@gmail.com",
                                    href: "mailto:lperlacher2@gmail.com"
                                }, {
                                    icon: <MapPin className="h-5 w-5 text-brand-blue" />,
                                    label: "Endereço:",
                                    value: "Santa Isabel - SP",
                                    href: "https://goo.gl/maps/baw34LozChPnLrFg9",
                                    target: "_blank"
                                }, {
                                    icon: <CheckCircle className="h-5 w-5 text-green-500" />,
                                    label: "Disponível:",
                                    value: <span className="flex items-center">Freelancer <span className="relative flex h-2 w-2 ml-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span></span></span>,
                                    noLink: true
                                }].map((item, index) => (
                                    <motion.div 
                                        key={item.label}
                                        className="flex items-center gap-2"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                                    >
                                        {item.icon}
                                        <span className="text-muted-foreground font-medium">{item.label}</span>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                target={item.target || "_self"}
                                                className="text-foreground hover:text-brand-blue transition-colors whitespace-nowrap"
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <span className={`text-foreground ${item.noLink ? '' : 'break-all  whitespace-nowrap'}`}>{item.value}</span>
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-auto pt-8">
                                <motion.p 
                                    className="text-muted-foreground text-base leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
                                >
                                    Desenvolvedor Front-End apaixonado por criar interfaces elegantes e funcionais. 
                                    Especializado em React, TypeScript e Tailwind CSS para entregar experiências digitais de alta qualidade e performance.
                                </motion.p>
                            </div>
                        </motion.div>                
                    </div>
                </div>
            </div>
        </Section>
    );
}