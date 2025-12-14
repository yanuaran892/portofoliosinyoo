import { useCallback, type PointerEvent } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion'
import { profile } from '../data/profile'

const timeline = [
  {
    title: 'Fokus sekarang',
    time: 'Saat ini',
    description:
      'Membangun UI yang rapi dan cepat dengan React + TypeScript, sambil menjaga aksesibilitas dan detail micro-interaction.',
  },
  {
    title: 'Eksplorasi real-time',
    time: '2024 →',
    description:
      'Eksperimen workflow Unreal Engine untuk prototyping, visual real-time, dan tooling sederhana untuk mempercepat iterasi.',
  },
  {
    title: 'Fondasi sistem',
    time: 'Awal',
    description:
      'Belajar membangun sistem yang bersih: struktur data, API, dan arsitektur komponen yang mudah dipelihara.',
  },
] as const

const orbitBadges = ['UI', 'Motion', 'Systems'] as const

const constellationPoints = [
  { x: 66, y: 300 },
  { x: 140, y: 210 },
  { x: 220, y: 240 },
  { x: 300, y: 140 },
  { x: 344, y: 180 },
] as const

const Constellation = () => (
  <svg
    className="absolute -right-10 top-10 h-72 w-72 opacity-40 sm:h-96 sm:w-96"
    viewBox="0 0 400 400"
    fill="none"
    aria-hidden="true"
  >
    <motion.path
      d="M66 300L140 210L220 240L300 140L344 180"
      stroke="rgba(255,255,255,0.22)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeDasharray="7 12"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    />

    {constellationPoints.map((point, index) => (
      <motion.g
        key={`${point.x}-${point.y}`}
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ delay: 0.15 + index * 0.08, duration: 0.6 }}
      >
        <circle cx={point.x} cy={point.y} r={7} fill="rgba(255,255,255,0.10)" />
        <circle cx={point.x} cy={point.y} r={3} fill="rgba(186,230,253,0.9)" />
      </motion.g>
    ))}
  </svg>
)

export default function About() {
  const shouldReduceMotion = useReducedMotion()

  const tiltX = useMotionValue(0)
  const tiltY = useMotionValue(0)

  const pointerX = useMotionValue(0.5)
  const pointerY = useMotionValue(0.5)

  const tiltXSpring = useSpring(tiltX, { stiffness: 180, damping: 22 })
  const tiltYSpring = useSpring(tiltY, { stiffness: 180, damping: 22 })

  const rotateX = useTransform(tiltYSpring, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(tiltXSpring, [-0.5, 0.5], [-12, 12])

  const glareX = useTransform(pointerX, [0, 1], ['0%', '100%'])
  const glareY = useTransform(pointerY, [0, 1], ['0%', '100%'])

  const glareBackground = useMotionTemplate`radial-gradient(240px circle at ${glareX} ${glareY}, rgba(255, 255, 255, 0.18), transparent 60%)`

  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (shouldReduceMotion) return

      const rect = event.currentTarget.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width
      const y = (event.clientY - rect.top) / rect.height

      pointerX.set(x)
      pointerY.set(y)

      tiltX.set(x - 0.5)
      tiltY.set(y - 0.5)
    },
    [pointerX, pointerY, shouldReduceMotion, tiltX, tiltY],
  )

  const handlePointerLeave = useCallback(() => {
    pointerX.set(0.5)
    pointerY.set(0.5)
    tiltX.set(0)
    tiltY.set(0)
  }, [pointerX, pointerY, tiltX, tiltY])

  return (
    <section id="about" className="relative border-t border-white/10 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-25" aria-hidden="true">
        <div className="absolute inset-0 grain-overlay" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:px-8 md:grid-cols-12">
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            Tentang saya
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-white sm:text-5xl">
            Merancang detail,
            <span className="text-primary-200"> membangun sistem</span>.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Saya {profile.name}, {profile.semester}. Saya suka mengubah ide menjadi produk yang terasa
            halus: ritme layout, responsif, aksesibilitas, hingga performa.
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="relative md:col-span-7"
        >
          <Constellation />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent p-[1px]">
              <motion.div
                onPointerMove={handlePointerMove}
                onPointerLeave={handlePointerLeave}
                style={
                  shouldReduceMotion
                    ? undefined
                    : {
                        rotateX,
                        rotateY,
                        transformStyle: 'preserve-3d',
                      }
                }
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 p-7 backdrop-blur-xl"
              >
                <motion.div
                  className="pointer-events-none absolute inset-0"
                  style={shouldReduceMotion ? undefined : { background: glareBackground }}
                />

                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <div className="inline-flex items-center gap-3">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-white">
                        {profile.name
                          .split(' ')
                          .slice(0, 2)
                          .map((part) => part[0])
                          .join('')}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{profile.shortTitle}</p>
                        <p className="text-xs text-slate-300">{profile.location}</p>
                      </div>
                    </div>

                    <span className="inline-flex items-center rounded-full border border-primary-400/25 bg-primary-500/10 px-3 py-1 text-[11px] font-semibold text-primary-100">
                      Siap kolaborasi
                    </span>
                  </div>

                  <div className="relative mt-7 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-purple-500/10" />
                    <div className="relative">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                        Fokus
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {['React', 'TypeScript', 'UI Systems', 'Unreal Engine'].map((item) => (
                          <motion.span
                            key={item}
                            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-100"
                          >
                            {item}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {[
                      { label: 'Kerja tim', value: 'Adaptif' },
                      { label: 'Detail', value: 'Tinggi' },
                      { label: 'Iterasi', value: 'Cepat' },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                          {stat.label}
                        </p>
                        <p className="mt-2 text-sm font-semibold text-white">{stat.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="#projects"
                      className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/60"
                    >
                      Lihat karya
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/25 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/60"
                    >
                      Ngobrol sekarang
                    </a>
                  </div>
                </div>

                <motion.div
                  className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2"
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          rotate: 360,
                        }
                  }
                  transition={
                    shouldReduceMotion
                      ? undefined
                      : {
                          duration: 28,
                          repeat: Infinity,
                          ease: 'linear',
                        }
                  }
                  aria-hidden="true"
                >
                  {orbitBadges.map((badge, index) => {
                    const positionStyles = [
                      'left-1/2 top-0 -translate-x-1/2',
                      'left-0 top-1/2 -translate-y-1/2',
                      'right-0 top-1/2 -translate-y-1/2',
                    ]

                    return (
                      <div
                        key={badge}
                        className={`absolute ${positionStyles[index]} rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] font-semibold tracking-wide text-slate-100 backdrop-blur`}
                      >
                        {badge}
                      </div>
                    )
                  })}
                </motion.div>
              </motion.div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/25 p-7 backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                Cara saya bekerja
              </p>

              <p className="mt-4 text-sm leading-relaxed text-slate-200">
                Saya suka proses yang jelas: mulai dari breakdown kebutuhan, desain sistem komponen,
                sampai polishing interaction. Buat saya, UI yang bagus itu terasa "ringan" — mudah
                dipahami dan konsisten.
              </p>

              <ol className="mt-7 space-y-5">
                {timeline.map((step) => (
                  <li key={step.title} className="relative pl-6">
                    <span
                      className="absolute left-0 top-2 h-2.5 w-2.5 rounded-full bg-primary-300"
                      aria-hidden="true"
                    />
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-start justify-between gap-4">
                        <p className="text-sm font-semibold text-white">{step.title}</p>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                          {step.time}
                        </p>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">Kriteria kualitas</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['Aksesibel', 'Responsif', 'Rapi', 'Performant'].map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-semibold text-slate-200"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
