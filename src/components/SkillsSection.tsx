import { motion, useReducedMotion } from 'framer-motion'
import { skillGroups, type SkillGroupIcon, type SkillGroupAccent } from '../data/skills'

type AccentStyles = {
  cardBorder: string
  badge: string
  iconWrapper: string
  icon: string
  barGradient: string
}

const accentStyles: Record<SkillGroupAccent, AccentStyles> = {
  blue: {
    cardBorder: 'border-blue-400/15 hover:border-blue-400/30 focus-visible:border-blue-400/30',
    badge: 'bg-blue-500/10 text-blue-200 border-blue-400/20',
    iconWrapper: 'bg-blue-500/10 border-blue-400/20',
    icon: 'text-blue-200',
    barGradient: 'from-blue-500 to-cyan-500',
  },
  purple: {
    cardBorder:
      'border-purple-400/15 hover:border-purple-400/30 focus-visible:border-purple-400/30',
    badge: 'bg-purple-500/10 text-purple-200 border-purple-400/20',
    iconWrapper: 'bg-purple-500/10 border-purple-400/20',
    icon: 'text-purple-200',
    barGradient: 'from-purple-500 to-fuchsia-500',
  },
  amber: {
    cardBorder: 'border-amber-400/15 hover:border-amber-400/30 focus-visible:border-amber-400/30',
    badge: 'bg-amber-500/10 text-amber-200 border-amber-400/20',
    iconWrapper: 'bg-amber-500/10 border-amber-400/20',
    icon: 'text-amber-200',
    barGradient: 'from-amber-500 to-orange-500',
  },
}

const GroupIcon = ({ name, className }: { name: SkillGroupIcon; className?: string }) => {
  if (name === 'cube') {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path d="M3.3 7l8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>
    )
  }

  if (name === 'film') {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M7 4v16" />
        <path d="M17 4v16" />
        <path d="M2 8h5" />
        <path d="M2 16h5" />
        <path d="M17 8h5" />
        <path d="M17 16h5" />
      </svg>
    )
  }

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 18l6-6-6-6" />
      <path d="M8 6l-6 6 6 6" />
    </svg>
  )
}

const SkillsSection = () => {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.section
      id="skills"
      className="relative overflow-hidden bg-slate-950 py-16 sm:py-20"
      aria-label="Skills section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 15% 40%, rgba(59, 130, 246, 0.25) 0%, transparent 50%),
                            radial-gradient(circle at 85% 60%, rgba(168, 85, 247, 0.22) 0%, transparent 50%)`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.header variants={cardVariants} className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & Capabilities
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 text-balance">
            A focused overview of the tools I use most — grouped to show breadth across software
            engineering, Unreal Engine development, and cinematic creation.
          </p>
        </motion.header>

        <motion.div
          variants={containerVariants}
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {skillGroups.map((group) => {
            const accent = accentStyles[group.accent]

            return (
              <motion.article
                key={group.id}
                variants={cardVariants}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -6,
                        transition: { duration: 0.2 },
                      }
                }
                whileFocus={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -6,
                        transition: { duration: 0.2 },
                      }
                }
                tabIndex={0}
                aria-labelledby={`${group.id}-title`}
                className={`group relative rounded-2xl border bg-white/5 p-6 backdrop-blur-sm outline-none transition-colors duration-300 ${accent.cardBorder} focus-visible:ring-2 focus-visible:ring-white/20`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border ${accent.iconWrapper}`}
                  >
                    <GroupIcon name={group.icon} className={`h-6 w-6 ${accent.icon}`} />
                  </div>

                  <span
                    className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${accent.badge}`}
                  >
                    {group.tagline}
                  </span>
                </div>

                <h3
                  id={`${group.id}-title`}
                  className="mt-5 text-xl font-semibold text-white tracking-tight"
                >
                  {group.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">{group.description}</p>

                <ul className="mt-6 space-y-4">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="rounded-xl border border-white/10 bg-white/5 p-4 transition-colors duration-300 group-hover:bg-white/10"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                            <span className="text-sm font-semibold text-white">{skill.name}</span>
                            {skill.badges?.map((badge) => (
                              <span
                                key={badge}
                                className="rounded-full bg-white/5 px-2 py-0.5 text-[11px] text-slate-200 border border-white/10"
                              >
                                {badge}
                              </span>
                            ))}
                          </div>
                          <p className="mt-2 text-sm text-slate-300">{skill.description}</p>
                        </div>

                        <div className="text-right">
                          <div className="text-sm font-semibold text-white">{skill.level}%</div>
                          <div className="text-xs text-slate-300">{skill.strengthLabel}</div>
                        </div>
                      </div>

                      <div
                        className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10"
                        role="progressbar"
                        aria-label={`${skill.name} strength`}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={skill.level}
                      >
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${accent.barGradient}`}
                          initial={shouldReduceMotion ? false : { width: 0 }}
                          whileInView={shouldReduceMotion ? undefined : { width: `${skill.level}%` }}
                          viewport={{ once: true, amount: 0.6 }}
                          style={shouldReduceMotion ? { width: `${skill.level}%` } : undefined}
                          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default SkillsSection
