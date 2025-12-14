import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Category = 'All' | 'Game' | 'Cinematic';

interface Project {
  id: number;
  title: string;
  role: string;
  tech: string[];
  description: string;
  color: string; // Placeholder for thumbnail
  category: 'Game' | 'Cinematic';
  links?: {
    demo?: string;
    repo?: string;
    video?: string;
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: "Cosmic Voyager",
    role: "Lead Developer",
    tech: ["Unity", "C#", "HLSL"],
    description: "A space exploration game featuring procedural planet generation and realistic physics-based flight mechanics.",
    color: "from-blue-500 to-purple-600",
    category: "Game",
    links: {
      demo: "#",
      repo: "#"
    }
  },
  {
    id: 2,
    title: "The Last Horizon",
    role: "Technical Artist",
    tech: ["Unreal Engine 5", "Blueprints", "Niagara"],
    description: "Cinematic short film showcasing real-time lighting capabilities and photorealistic environments.",
    color: "from-orange-500 to-red-600",
    category: "Cinematic",
    links: {
      video: "#"
    }
  },
  {
    id: 3,
    title: "Neon Cyberpunk RPG",
    role: "Gameplay Programmer",
    tech: ["Godot", "GDScript", "GLSL"],
    description: "Top-down action RPG with dynamic lighting system and branching dialogue trees.",
    color: "from-cyan-400 to-blue-600",
    category: "Game",
    links: {
      demo: "#",
      repo: "#"
    }
  },
  {
    id: 4,
    title: "Ancient Ruins",
    role: "Level Designer",
    tech: ["Blender", "Substance Painter", "Marmoset"],
    description: "Environmental storytelling project focusing on texture detail and atmospheric composition.",
    color: "from-emerald-500 to-teal-700",
    category: "Cinematic",
    links: {
      video: "#"
    }
  }
];

const FilterButton = ({ 
  active, 
  onClick, 
  children 
}: { 
  active: boolean; 
  onClick: () => void; 
  children: React.ReactNode 
}) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
      active 
        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
        : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
    }`}
  >
    {children}
  </button>
);

export default function Projects() {
  const [filter, setFilter] = useState<Category>('All');

  const filteredProjects = projects.filter(
    (project) => filter === 'All' || project.category === filter
  );

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
            >
              Selected Projects
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-2 text-slate-400 max-w-xl"
            >
              A collection of games and cinematic experiences I've crafted, focusing on immersive gameplay and visual storytelling.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-3"
          >
            {(['All', 'Game', 'Cinematic'] as Category[]).map((category) => (
              <FilterButton
                key={category}
                active={filter === category}
                onClick={() => setFilter(category)}
              >
                {category === 'All' ? 'All Projects' : `${category}s`}
              </FilterButton>
            ))}
          </motion.div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-colors"
              >
                {/* Thumbnail Area */}
                <div className={`h-64 w-full bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity duration-500 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
                      project.category === 'Game' 
                        ? 'bg-blue-500/20 text-blue-200 border border-blue-500/30' 
                        : 'bg-orange-500/20 text-orange-200 border border-orange-500/30'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-400 font-medium">{project.role}</p>
                    </div>
                  </div>

                  <p className="text-slate-400 mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-slate-800">
                    {project.links?.demo && (
                      <a href={project.links.demo} className="flex items-center text-sm font-medium text-white hover:text-blue-400 transition-colors">
                        <span className="mr-2">Live Demo</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    {project.links?.repo && (
                      <a href={project.links.repo} className="flex items-center text-sm font-medium text-white hover:text-blue-400 transition-colors">
                        <span className="mr-2">GitHub</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                    )}
                    {project.links?.video && (
                      <a href={project.links.video} className="flex items-center text-sm font-medium text-white hover:text-blue-400 transition-colors">
                        <span className="mr-2">Watch Video</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
