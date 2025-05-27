import { HiAcademicCap, HiCodeBracketSquare } from "react-icons/hi2"
import { Section } from "./ui/section"
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
  ]

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
  ]

  return (
    <Section
      id="skills"
      title="Educação & Skills"
      subtitle="Front-end Developer | React.js | React Native | Node.js | TypeScript | JavaScript"
      bgVariant="light"
      className="py-16"
      shape="rounded-br"
    >
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="basis-1/2">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-text-heading">
            <HiAcademicCap className="h-8 w-8 text-brand-blue" />
            Educação
          </h3>

          {educations.map((education, index) => (
            <div
              key={`education-${index}`}
              className="mb-2 rounded-lg bg-card p-4 text-sm font-semibold text-card-foreground shadow-sm"
            >
              {education.name}
            </div>
          ))}
        </div>
        <div className="basis-1/2">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-text-heading">
            <HiCodeBracketSquare className="h-8 w-8 text-brand-blue" />
            Skills
          </h3>

          <div className="grid grid-cols-1 gap-4 font-semibold md:grid-cols-2">
            {skills.map((skill, index) => (
              <div
                key={`skill-${index}`}
                className="flex flex-row items-center gap-2 md:flex-col md:items-start"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-card p-2 shadow-sm">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="h-10 w-10 rounded"
                  />
                </div>
                <div className="w-full flex-grow">
                  <h4 className="font-headline text-text-heading">{skill.name}</h4>
                  <div className="h-2.5 w-full rounded-full bg-muted">
                    <div
                      className="h-2.5 rounded-full bg-brand-blue"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}