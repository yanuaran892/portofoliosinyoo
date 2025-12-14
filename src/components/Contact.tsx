import { motion } from 'framer-motion'
import { profile } from '../data/profile'

const Contact = () => {
  return (
    <section id="contact" className="border-t border-white/10 bg-[#0b0b0b] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Contact</p>
          <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-white sm:text-5xl">
            Let's build something
            <span className="text-primary-200"> thoughtful</span>.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            If you have a project, internship opportunity, or collaboration in mind, send a quick
            message — I'm happy to chat.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/60"
            >
              Email {profile.name.split(' ')[0]}
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-transparent px-6 py-3 text-sm font-semibold text-white underline decoration-white/20 underline-offset-4 transition-colors hover:border-white/25 hover:decoration-white/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/60"
            >
              {profile.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
