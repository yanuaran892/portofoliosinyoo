import { motion } from 'framer-motion'
import { profile } from '../data/profile'

const About = () => {
  return (
    <section id="about" className="border-t border-white/10 bg-[#0b0b0b] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:px-8 md:grid-cols-12">
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-4"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">About</p>
          <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-white sm:text-5xl">
            Curiosity, craft, and clean systems.
          </h2>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-8"
        >
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            I'm {profile.name}, a {profile.semester} student who enjoys turning ideas into clear, usable
            interfaces. I care about details: layout rhythm, responsive behavior, accessible markup, and
            performance.
          </p>

          <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
            Right now I'm building projects with React + TypeScript, and experimenting with real-time
            workflows in Unreal Engine.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">What I do</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                <li>UI engineering & component systems</li>
                <li>Full-stack foundations & APIs</li>
                <li>Real-time prototyping & tooling</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">What I value</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                <li>Clarity over complexity</li>
                <li>Accessible, resilient UX</li>
                <li>Fast feedback loops</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
