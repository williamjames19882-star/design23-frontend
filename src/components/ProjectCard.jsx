import { motion } from 'framer-motion'

export default function ProjectCard({ title, category, image, onClick }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className="group relative block w-full text-left rounded-2xl overflow-hidden bg-warm-sand/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={`${title}, ${category} project`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-ink/80 via-warm-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-warm-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-accent-gold-light text-sm font-medium uppercase tracking-wider">{category}</span>
        <h3 className="font-heading text-fluid-xl font-semibold mt-1">{title}</h3>
      </div>
    </motion.button>
  )
}
