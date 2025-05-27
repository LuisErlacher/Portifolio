import { FaQuoteLeft } from "react-icons/fa"
import { Section } from "./ui/section"
import { useTheme } from "./context/ThemeContext";

export function Testimonials() {
  const { theme } = useTheme();
  return (
    <Section
      id="testimonials"
      title="Depoimentos de Clientes"
      bgVariant="default"
      className="py-16"
    >
      <figure>
        <FaQuoteLeft className="h-8 w-8 text-muted-foreground" />
        <blockquote className="mb-6">
          <p className="text-2xl text-text-heading">
            Precisei de uma auteração visual em meu site e o Luis resolveu muito 
            rapido e me entregou o projeto no prazo e executando corretamente
            conforme combinado no nosso contrato. Recomendo o trabalho dele para
            todos que desejam um trabalho sério.
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center gap-2">
          <img
            className="h-6 w-6 rounded-full"
            src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhciUyMHBob3RvfGVufDB8fDB8fHww&auto=format&fit=crop&w=50&q=60"
            alt="Carlos Henrique"
          />
          <div className="flex items-center divide-x-2 divide-border">
            <div className="pr-3 font-medium text-text-heading">Carlos Henrique</div>
            <div className="pl-3 text-sm font-light text-muted-foreground">
              rvrtelecon.com.br
            </div>
          </div>
        </figcaption>
      </figure>
    </Section>
  )
}