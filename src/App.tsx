import About from './components/About'
import AmbientBackground from './components/AmbientBackground'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Projects from './components/Projects'
import SiteHeader from './components/SiteHeader'
import SkillsSection from './components/SkillsSection'

function App() {
  return (
    <div className="relative min-h-screen">
      <AmbientBackground />
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
