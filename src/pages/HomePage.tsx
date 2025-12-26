import React from 'react';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { motion } from 'framer-motion';
import { projects, services, profile } from '@/lib/content';
import { ProjectCard } from '@/components/ui/project-card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export function HomePage() {
  const featuredWork = projects.slice(0, 3);
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32 lg:py-48">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] aspect-square bg-primary/5 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-8">
              LESS NOISE. <br />
              <span className="text-muted-foreground">MORE IMPACT.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12">
              {profile.tagline}. Based in minimalist principles, driven by functional excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-none px-8">
                <Link to="/work">View All Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-none px-8">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Featured Work */}
      <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl uppercase">Selected Projects</h2>
              <p className="text-muted-foreground mt-2">A curated selection of my latest work.</p>
            </div>
            <Link to="/work" className="hidden sm:flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all">
              All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {featuredWork.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      {/* Services Brief */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl uppercase mb-16 text-center">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service) => (
              <div key={service.id} className="space-y-4">
                <h3 className="text-xl font-bold tracking-tight uppercase border-b border-border pb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                <p className="text-xs font-mono font-bold text-primary/60">{service.priceRange}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}