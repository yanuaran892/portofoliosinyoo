export type SkillGroupIcon = 'code' | 'cube' | 'film'

export type SkillGroupAccent = 'blue' | 'purple' | 'amber'

export interface SkillItem {
  name: string
  description: string
  level: number
  strengthLabel: string
  badges?: string[]
}

export interface SkillGroup {
  id: string
  title: string
  tagline: string
  description: string
  icon: SkillGroupIcon
  accent: SkillGroupAccent
  skills: SkillItem[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'programming',
    title: 'Programming Languages & Frameworks',
    tagline: 'Full‑stack foundations',
    description:
      'A curated toolkit spanning frontend, backend, and systems programming — focused on building reliable products, fast iterations, and clean architecture.',
    icon: 'code',
    accent: 'blue',
    skills: [
      {
        name: 'TypeScript / JavaScript',
        description: 'Typed UI + modern web patterns for maintainable apps.',
        level: 90,
        strengthLabel: 'Advanced',
        badges: ['React', 'Vite', 'Node.js'],
      },
      {
        name: 'React',
        description: 'Component design, hooks, state patterns, and accessibility.',
        level: 88,
        strengthLabel: 'Advanced',
        badges: ['Tailwind CSS', 'Framer Motion'],
      },
      {
        name: 'Python',
        description: 'Scripting, automation, data handling, and quick prototypes.',
        level: 80,
        strengthLabel: 'Strong',
      },
      {
        name: 'C++',
        description: 'Performance-minded code for game dev and core systems.',
        level: 75,
        strengthLabel: 'Strong',
      },
      {
        name: 'SQL',
        description: 'Relational thinking, query building, and data modeling basics.',
        level: 72,
        strengthLabel: 'Strong',
        badges: ['PostgreSQL', 'MySQL'],
      },
    ],
  },
  {
    id: 'unreal',
    title: 'Unreal Engine Game Development',
    tagline: 'Gameplay to performance',
    description:
      'Hands-on Unreal workflows from prototyping to polish — building gameplay systems, UI, and optimizing for smooth real‑time experiences.',
    icon: 'cube',
    accent: 'purple',
    skills: [
      {
        name: 'Gameplay Systems',
        description: 'Player controls, interactions, state machines, and events.',
        level: 82,
        strengthLabel: 'Strong',
        badges: ['C++', 'Blueprints'],
      },
      {
        name: 'Blueprint Prototyping',
        description: 'Fast iteration with clean graphs and reusable components.',
        level: 85,
        strengthLabel: 'Strong',
      },
      {
        name: 'UI / UMG',
        description: 'HUDs, menus, and responsive UI flow with clear hierarchy.',
        level: 78,
        strengthLabel: 'Strong',
      },
      {
        name: 'Optimization & Profiling',
        description: 'CPU/GPU awareness, debugging bottlenecks, and scalability.',
        level: 70,
        strengthLabel: 'Good',
        badges: ['Stat', 'Unreal Insights'],
      },
      {
        name: 'AI Basics',
        description: 'Behavior Trees, NavMesh navigation, and simple perception.',
        level: 68,
        strengthLabel: 'Good',
      },
    ],
  },
  {
    id: 'cinematic',
    title: 'Cinematic Creation',
    tagline: 'Story-driven visuals',
    description:
      'Cinematic pipelines that blend composition, lighting, and motion — from planning shots to finishing with color and post processing.',
    icon: 'film',
    accent: 'amber',
    skills: [
      {
        name: 'Sequencer',
        description: 'Shot building, keyframing, timelines, and camera cuts.',
        level: 86,
        strengthLabel: 'Strong',
        badges: ['Unreal Engine'],
      },
      {
        name: 'Cameras & Composition',
        description: 'Blocking, focal length choices, and cinematic staging.',
        level: 78,
        strengthLabel: 'Strong',
      },
      {
        name: 'Lighting & Look Dev',
        description: 'Mood, contrast, and guiding attention through lighting.',
        level: 80,
        strengthLabel: 'Strong',
        badges: ['Lumen', 'HDRI'],
      },
      {
        name: 'Post Processing',
        description: 'Color grading, filmic tone mapping, and subtle effects.',
        level: 74,
        strengthLabel: 'Good',
      },
      {
        name: 'Editing Workflow',
        description: 'Cut rhythm, audio sync, and exporting for final delivery.',
        level: 70,
        strengthLabel: 'Good',
        badges: ['DaVinci Resolve'],
      },
    ],
  },
]
