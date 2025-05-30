import emailjs from "@emailjs/browser"
import { FormEvent, useRef, useState } from "react"
import { FaSpinner, FaWhatsapp } from "react-icons/fa"
import {
  HiCheckCircle,
  HiOutlineEnvelope,
  HiOutlineMapPin,
} from "react-icons/hi2"
import { Section } from "./ui/section"
import { Button } from "./ui/button"
import { useTheme } from "./context/ThemeContext"

export function Contact() {
  const { theme } = useTheme();
  const form = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!form.current) return

    setLoading(true)

    emailjs
      .sendForm(
        "service_y8vmf2b",
        "template_mgiwzfq",
        form.current,
        "duLFvgQ7kx8DXtquZ"
      )
      .then(
        () => {
          setSuccess(true)
          setLoading(false)
        },
        (error) => {
          setError(true)
          setLoading(false)
          console.error(error)
        }
      )
  }

  const contacts = [
    {
      name: "WhatsApp",
      description: <span className="text-body">+55 11 94522-4112</span>,
      link: "https://wa.me/5511945224112?text=Olá...",
      icon: <FaWhatsapp className="h-10 w-10" />,
    },
    {
      name: "Email",
      description: "lperlacher2@gmail.com",
      link: "mailto:lperlacher2@gmail.com?subject=Olá...",
      icon: <HiOutlineEnvelope className="h-10 w-10" />,
    },
    {
      name: "Santa Isabel",
      description: "Chacara Boa Vista",
      link: "https://goo.gl/maps/baw34LozChPnLrFg9",
      icon: <HiOutlineMapPin className="h-10 w-10" />,
    },
  ]

  return (
    <Section
      id="contact"
      title="Fale Comigo"
      subtitle="Entre em contato por formulário ou WhatsApp, com certeza irei poder te ajudar."
      className="py-16"
    >
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="basis-2/3 relative">
          <div className="absolute -inset-1.5 z-0 rounded-xl bg-gradient-primary blur opacity-20 animate-pulse pointer-events-none" />
          <form ref={form} onSubmit={sendEmail} className="relative z-10 bg-background/30 backdrop-blur-sm p-6 rounded-xl">
            <div className="mb-4">
              <label
                htmlFor="message"
                className="mb-2 block ps-4 font-headline font-semibold"
              >
                Mensagem:
              </label>
              <textarea
                id="message"
                name="message"
                className="h-36 w-full rounded-lg border border-white/30 bg-white/10 p-2 outline-none focus:ring-2 focus:ring-white/50"
                required
              />
            </div>
            <div className="mb-6 flex flex-col gap-4 md:flex-row">
              <div className="flex-grow">
                <label
                  htmlFor="fullName"
                  className="mb-2 block ps-4 font-headline font-semibold"
                >
                  Seu nome:
                </label>
                <input
                  className="w-full rounded-lg border border-white/30 bg-white/10 p-2 outline-none focus:ring-2 focus:ring-white/50"
                  type="text"
                  name="fullName"
                  id="fullName"
                  required
                />
              </div>
              <div className="flex-grow">
                <label
                  htmlFor="email"
                  className="mb-2 block ps-4 font-headline font-semibold"
                >
                  Seu email:
                </label>
                <input
                  className="w-full rounded-lg border border-white/30 bg-white/10 p-2 outline-none focus:ring-2 focus:ring-white/50"
                  type="email"
                  name="email"
                  id="email"
                  required
                />
              </div>
            </div>

            <div>
              <Button
                type="submit"
                variant="gradient"
                className="shadow-lg shadow-blue-600/20"
                disabled={loading}
              >
                {loading && <FaSpinner className="h-4 w-4 animate-spin" />}
                {success && <HiCheckCircle className="h-4 w-4" />}
                Enviar mensagem
              </Button>

              {error && (
                <p className="mt-2">
                  Ocorreu um erro ao enviar a mensagem, tente novamente mais
                  tarde.
                </p>
              )}
            </div>
          </form>
        </div>
        <div className="basis-1/3">
          {contacts.map((contact, index) => (
            <div
              key={`contact-${index}`}
              className="mb-4 flex items-center gap-4 rounded-lg border border-dashed border-white/30 p-4 relative bg-background/30 backdrop-blur-sm"
            >
              <div className="absolute -inset-1.5 z-0 rounded-lg bg-gradient-primary blur opacity-20 animate-pulse pointer-events-none" />
              <div className="relative z-10 flex items-center gap-4 w-full">
                {contact.icon}
                <div>
                  <p className="font-headline font-semibold">{contact.name}</p>
                  <a
                    href={contact.link}
                    target="_blank"
                    className="text-body underline underline-offset-2 hover:text-brand-blue"
                  >
                    {contact.description}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}