import { motion } from 'framer-motion'

export default function ServiceCard({ title, description, icon }) {
  return (
    <motion.article
      className="group relative rounded-2xl bg-warm-white border border-warm-sand/60 p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-accent-gold/5 rounded-bl-full transition-transform duration-300 group-hover:scale-110" />
      <div className="relative">
        {icon && (
          <div className="mb-4 text-accent-gold" aria-hidden="true">
            {icon}
          </div>
        )}
        <h3 className="font-heading text-fluid-xl font-semibold text-warm-ink mb-2">{title}</h3>
        <p className="text-warm-charcoal text-fluid-lg">{description}</p>
      </div>
    </motion.article>
  )
}
