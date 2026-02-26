import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'

// Placeholder images (Unsplash interiors, responsive-friendly)
const projects = [
  { id: 1, title: 'Modern Living Room', category: 'Residential', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80' },
  { id: 2, title: 'Minimal Kitchen', category: 'Residential', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80' },
  { id: 3, title: 'Cozy Bedroom', category: 'Residential', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80' },
  { id: 4, title: 'Office Suite', category: 'Commercial', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80' },
  { id: 5, title: 'Bathroom Renovation', category: 'Renovation', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80' },
  { id: 6, title: 'Restaurant Interior', category: 'Commercial', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80' },
]

export default function Portfolio() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-warm-cream" aria-labelledby="portfolio-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <h2 id="portfolio-heading" className="font-heading text-fluid-3xl text-warm-ink mb-4">
            Our Work
          </h2>
          <p className="text-warm-charcoal text-fluid-lg">
            A selection of recent residential and commercial projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, staggerChildren: 0.08 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <ProjectCard
                title={project.title}
                category={project.category}
                image={project.image}
                onClick={() => setLightbox(project)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-warm-ink/90 p-4"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Project image"
          >
            <button
              type="button"
              className="absolute top-4 right-4 p-2 text-warm-white hover:text-accent-gold-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded min-h-[44px] min-w-[44px] flex items-center justify-center"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.image}
                alt={lightbox.title}
                className="w-full rounded-lg shadow-2xl object-contain max-h-[85vh]"
              />
              <p className="mt-4 text-center text-warm-white font-heading text-xl">
                {lightbox.title} <span className="text-accent-gold-light">— {lightbox.category}</span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
