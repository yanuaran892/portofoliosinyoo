import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../data/profile'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const Hero = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="top" className="relative overflow-hidden pt-24" aria-label="Bagian pembuka">
      <div className="pointer-events-none absolute inset-0 opacity-25" aria-hidden="true">
        <div className="absolute inset-0 grain-overlay" />
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-80 vignette" aria-hidden="true" />

      <motion.div
        className="pointer-events-none absolute -top-32 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary-500/25 via-purple-500/10 to-transparent blur-3xl"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, 18, -10, 0],
                scale: [1, 1.06, 0.98, 1],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 12,
                repeat: Infinity,
                ease: 'easeInOut',
              }
        }
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute -bottom-36 left-16 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-amber-400/15 via-orange-400/10 to-transparent blur-3xl"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, 30, -25, 0],
                y: [0, -20, 10, 0],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : {
                duration: 16,
                repeat: Infinity,
                ease: 'easeInOut',
              }
        }
        aria-hidden="true"
      />

      <div className="mx-auto min-h-[calc(100vh-6rem)] max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid items-end gap-12 md:grid-cols-12"
        >
          <div className="md:col-span-7">
            <motion.p
              variants={itemVariants}
              className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-300"
            >
              <span className="h-px w-10 bg-white/25" aria-hidden="true" />
              {profile.semester}
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="mt-5 font-display text-5xl leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg"
            >
              {profile.tagline}
            </motion.p>

            <motion.div variants={itemVariants} className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/60"
              >
                Email saya
              </a>
              <a
                href={profile.cvUrl}
                download
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/25 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/60"
              >
                Unduh CV
              </a>
            </motion.div>
          </div>

          <motion.aside
            variants={itemVariants}
            className="md:col-span-5 md:border-l md:border-white/10 md:pl-10"
            aria-label="Ringkasan cepat"
          >
            <dl className="space-y-6">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Peran</dt>
                <dd className="mt-2 text-base font-semibold text-white">{profile.shortTitle}</dd>
              </div>

              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Fokus</dt>
                <dd className="mt-2 text-base text-slate-200">
                  React + TypeScript, UI engineering, eksplorasi Unreal Engine
                </dd>
              </div>

              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Lokasi</dt>
                <dd className="mt-2 text-base text-slate-200">{profile.location}</dd>
              </div>

              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Kontak</dt>
                <dd className="mt-2">
                  <a
                    className="text-base font-semibold text-white underline decoration-white/20 underline-offset-4 transition-colors hover:decoration-white/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/60"
                    href={`mailto:${profile.email}`}
                  >
                    {profile.email}
                  </a>
                </dd>
              </div>
            </dl>
          </motion.aside>
        </motion.div>

        <motion.a
          href="#projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-14 inline-flex items-center gap-3 text-sm font-semibold text-slate-300 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/60"
          aria-label="Scroll ke bagian karya"
        >
          <span className="h-px w-10 bg-white/25" aria-hidden="true" />
          Lihat karya
        </motion.a>
      </div>
    </section>
  )
}

export default Hero
