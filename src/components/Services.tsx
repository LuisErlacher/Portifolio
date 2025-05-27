import { useTheme } from "./context/ThemeContext";
import { Section } from "./ui/section";
import {    HiCommandLine,    HiComputerDesktop,    HiDevicePhoneMobile,  } from "react-icons/hi2"

export function Services() {
    const currentTheme = useTheme()
    const { theme } = currentTheme;
    const services = [
        {
          title: <span className="service-card-title">Web</span>,
          description: <span className="service-card-description">Desenvolvimento de sites e sistemas web estáticos e dinâmicos com React.js, Next.js, Vite, HTML5 e CSS3.</span>,
          icon: <HiComputerDesktop className="h-12 w-12 service-card-icon" />,
        },
        {
          title: <span className="service-card-title">Sistemas</span>,
          description: <span className="service-card-description">Desenvolvimento de sistemas e APIs REST com Node.js.</span>,
          icon: <HiCommandLine className="h-12 w-12 service-card-icon" />,
        },
        {
          title: <span className="service-card-title">Mobile</span>,
          description: <span className="service-card-description">Desenvolvimento de aplicativos Android e iOS.</span>,
          icon: <HiDevicePhoneMobile className="h-12 w-12 service-card-icon" />,
        },
      ]

    return (
      <Section id="services">
        <div className="service-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
          {services.map((service, index) => (
            <div
              className="service-card"
              key={`service-${index}`}
            >
              <div className="mb-2">{service.icon}</div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">{service.description}</p>
            </div>
          ))}
        </div>
      </Section>
    )
}