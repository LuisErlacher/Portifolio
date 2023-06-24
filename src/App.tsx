import { About } from './components/About'
import { Hero } from './components/Hero'
import { Service } from './components/Services'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Testimonials } from './components/Testimonials'
import './App.css'
import { Contacts } from './components/Contact'

function App() {
   return (
    <main>
      <Hero />
      <About />
      <Service />
      <Projects />
      <Skills />
      <Testimonials />
      <Contacts />
    </main>
   
  )
}

export default App
