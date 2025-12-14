import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Projects from './components/Projects'
import SiteHeader from './components/SiteHeader'
import SkillsSection from './components/SkillsSection'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0b]">
      <SiteHeader />
      <main id="content">
        <Hero />
        <About />
        <Projects />
        <SkillsSection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
