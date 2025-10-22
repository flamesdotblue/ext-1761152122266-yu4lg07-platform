import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Interactive Dashboard',
    description: 'Analytics platform with real-time charts, role-based access, and offline sync.',
    stack: ['React', 'Tailwind', 'Supabase'],
    link: '#',
    colorFrom: 'from-indigo-500',
    colorTo: 'to-fuchsia-500',
  },
  {
    title: '3D Product Showcase',
    description: 'Immersive 3D experience integrating Spline and WebGL effects for e-commerce.',
    stack: ['React', 'Spline', 'Framer Motion'],
    link: '#',
    colorFrom: 'from-emerald-500',
    colorTo: 'to-cyan-500',
  },
  {
    title: 'AI Writing Studio',
    description: 'Collaborative editor with prompt tooling, versioning, and export pipelines.',
    stack: ['Next.js', 'tRPC', 'Postgres'],
    link: '#',
    colorFrom: 'from-amber-500',
    colorTo: 'to-rose-500',
  },
];

function Card({ project, index }) {
  return (
    <motion.a
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      href={project.link}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20"
    >
      <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${project.colorFrom} ${project.colorTo} opacity-20 blur-2xl`} />
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">
          {project.stack.join(' • ')}
        </div>
        <h3 className="mt-4 text-xl font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-2 text-sm text-white/70">{project.description}</p>
        <div className="mt-5 text-sm font-medium text-white/90 underline-offset-4 group-hover:underline">View case study →</div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Featured Projects</h2>
          <p className="mt-2 max-w-2xl text-white/70">A selection of work blending craft, engineering, and motion for impactful experiences.</p>
        </div>
        <a href="#contact" className="hidden rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur hover:bg-white/20 transition md:inline-block">Start a project</a>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Card key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
