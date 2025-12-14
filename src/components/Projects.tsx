import { useMemo, useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type Category = 'All' | 'Game' | 'Cinematic'

interface Project {
  id: number
  title: string
  role: string
  tech: string[]
  description: string
  category: Exclude<Category, 'All'>
  links?: {
    demo?: string
    repo?: string
    video?: string
  }
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Cosmic Voyager',
    role: 'Lead Developer',
    tech: ['Unity', 'C#', 'HLSL'],
    description:
      'A space exploration game featuring procedural planet generation and realistic physics-based flight mechanics.',
    category: 'Game',
    links: {
      demo: '#',
      repo: '#',
    },
  },
  {
    id: 2,
    title: 'The Last Horizon',
    role: 'Technical Artist',
    tech: ['Unreal Engine 5', 'Blueprints', 'Niagara'],
    description:
      'Cinematic short film showcasing real-time lighting capabilities and photorealistic environments.',
    category: 'Cinematic',
    links: {
      video: '#',
    },
  },
  {
    id: 3,
    title: 'Neon Cyberpunk RPG',
    role: 'Gameplay Programmer',
    tech: ['Godot', 'GDScript', 'GLSL'],
    description: 'Top-down action RPG with dynamic lighting system and branching dialogue trees.',
    category: 'Game',
    links: {
      demo: '#',
      repo: '#',
    },
  },
  {
    id: 4,
    title: 'Ancient Ruins',
    role: 'Level Designer',
    tech: ['Blender', 'Substance Painter', 'Marmoset'],
    description:
      'Environmental storytelling project focusing on texture detail and atmospheric composition.',
    category: 'Cinematic',
    links: {
      video: '#',
    },
  },
]

const FilterButton = ({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: ReactNode
}) => (
  <motion.button
    type="button"
    onClick={onClick}
    className={`relative overflow-hidden rounded-full px-5 py-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/60 ${
      active
        ? 'text-black'
        : 'border border-white/15 bg-white/5 text-slate-200 hover:border-white/25 hover:bg-white/10'
    }`}
  >
    {active && (
      <motion.span
        layoutId="activeProjectFilter"
        className="absolute inset-0 rounded-full bg-white"
        transition={{ duration: 0.25 }}
        aria-hidden="true"
      />
    )}
    <span className="relative">{children}</span>
  </motion.button>
)

const linkClassName =
  'inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-white/25 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/60'

export default function Projects() {
  const [filter, setFilter] = useState<Category>('All')

  const filteredProjects = useMemo(
    () => projects.filter((project) => filter === 'All' || project.category === filter),
    [filter],
  )

  return (
    <section id="projects" className="relative border-t border-white/10 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-25" aria-hidden="true">
        <div className="absolute inset-0 grain-overlay" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Karya</p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-white sm:text-5xl">
              Proyek pilihan
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Potongan karya dan eksperimen — mulai dari game, cinematic real-time, sampai tooling.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {(['All', 'Game', 'Cinematic'] as const).map((category) => (
              <FilterButton
                key={category}
                active={filter === category}
                onClick={() => setFilter(category)}
              >
                {category === 'All' ? 'Semua' : category === 'Cinematic' ? 'Sinema' : 'Game'}
              </FilterButton>
            ))}
          </div>
        </div>

        <motion.ul
          layout
          className="mt-12 divide-y divide-white/10 rounded-3xl border border-white/10 bg-black/20"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.li
                layout
                key={project.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 14 }}
                transition={{ duration: 0.25 }}
                className="group"
              >
                <article className="grid gap-8 p-7 sm:p-10 md:grid-cols-12">
                  <div className="md:col-span-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                      {project.category === 'Cinematic' ? 'Sinema' : 'Game'}
                    </p>
                    <h3 className="mt-3 font-display text-2xl tracking-tight text-white sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-5 md:border-l md:border-white/10 md:pl-10">
                    <dl className="space-y-6">
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                          Peran
                        </dt>
                        <dd className="mt-2 text-base font-semibold text-white">{project.role}</dd>
                      </div>

                      {project.links && (
                        <div>
                          <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                            Tautan
                          </dt>
                          <dd className="mt-3 flex flex-wrap gap-3">
                            {project.links.demo && (
                              <a
                                href={project.links.demo}
                                className={linkClassName}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Demo
                              </a>
                            )}
                            {project.links.repo && (
                              <a
                                href={project.links.repo}
                                className={linkClassName}
                                target="_blank"
                                rel="noreferrer"
                              >
                                GitHub
                              </a>
                            )}
                            {project.links.video && (
                              <a
                                href={project.links.video}
                                className={linkClassName}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Video
                              </a>
                            )}
                          </dd>
                        </div>
                      )}
                    </dl>
                  </div>
                </article>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  )
}
