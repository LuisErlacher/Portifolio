import React from 'react';
import { About } from './components/About'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Navbar } from './components/ui/navbar'
import { ThemeToggle } from './components/ui/theme-toggle'
import { useEffect } from 'react'
import './App.css'

function App() {
  // Define nav items
  const navItems = [
    { title: "Home", href: "#home" },
    { title: "Sobre", href: "#about" },
    { title: "Serviços", href: "#services" },
    { title: "Projetos", href: "#projects" },
    { title: "Skills", href: "#skills" },
    { title: "Depoimentos", href: "#testimonials" },
    { title: "Contato", href: "#contact" },
  ];

  // Add IDs to body for theme persistence
  useEffect(() => {
    // Add IDs to sections for navigation
    const sections = document.querySelectorAll('section');
    const sectionIds = ["home", "about", "services", "projects", "skills", "testimonials", "contact"];
    
    sections.forEach((section, index) => {
      if (index < sectionIds.length) {
        section.id = sectionIds[index];
      }
    });
  }, []);

  return (
    <main className="bg-background text-foreground font-sans">
      <Navbar items={navItems} />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <ThemeToggle />
    </main>
  )
}

export default App
