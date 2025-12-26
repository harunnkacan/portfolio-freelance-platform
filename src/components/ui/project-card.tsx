import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/lib/content';
import { ArrowUpRight } from 'lucide-react';
interface ProjectCardProps {
  project: Project;
}
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative block overflow-hidden"
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
          <ArrowUpRight className="text-white w-12 h-12" />
        </div>
      </div>
      <div className="mt-4 flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
          <p className="text-sm text-muted-foreground">{project.category}</p>
        </div>
        <span className="text-xs font-mono text-muted-foreground/60">{project.year}</span>
      </div>
    </motion.div>
  );
}