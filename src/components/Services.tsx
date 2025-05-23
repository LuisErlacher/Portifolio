import { Section } from "./ui/section";
import {
    HiCommandLine,
    HiComputerDesktop,
    HiDevicePhoneMobile,
  } from "react-icons/hi2"

export function Services() {
    
    const services = [
        {
          title: "Web",
          description:
            "Desenvolvimento de sites e sistemas web estáticos e dinâmicos com React.js, Next.js, Vite, HTML5 e CSS3.",
          icon: <HiComputerDesktop className="h-12 w-12" />,
        },
        {
          title: "Sistemas",
          description: "Desenvolvimento de sistemas e APIs REST com Node.js.",
          icon: <HiCommandLine className="h-12 w-12" />,
        },
        {
          title: "Mobile",
          description: "Desenvolvimento de aplicativos Android e iOS.",
          icon: <HiDevicePhoneMobile className="h-12 w-12" />,
        },
      ]

    return (
      <Section
        id="services"
        title="Meus Serviços"
        subtitle="Posso atender uma gama completa de serviços, do front-end ao back-end com banco de dados e sistemas."
        bgVariant="light"
        className="py-16"
      >
        <div className="mt-6 flex flex-col gap-2 md:flex-row">
          {services.map((service, index) => (
            <div
              className="basis-1/3 rounded-lg bg-primary text-primary-foreground p-4 shadow-md"
              key={`service-${index}`}
            >
              <div className="mb-2">{service.icon}</div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </Section>
    )
}