import { motion } from 'framer-motion'
import Button from '../components/Button'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-warm-cream via-warm-white to-warm-sand"
      aria-label="Hero"
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a1a1a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto"
        >
          <motion.p
            variants={item}
            className="text-accent-sage font-body text-fluid-lg uppercase tracking-widest mb-4"
          >
            Interior Design Studio
          </motion.p>
          <motion.h1
            variants={item}
            className="font-heading text-fluid-5xl font-bold text-warm-ink mb-6 text-balance"
          >
            Design23
            <span className="block text-fluid-4xl font-semibold text-warm-charcoal mt-2">Interiors</span>
          </motion.h1>
          <motion.p
            variants={item}
            className="text-warm-charcoal text-fluid-xl max-w-2xl mx-auto mb-10"
          >
            Transform your space with thoughtful design. Residential and commercial interiors, tailored to you.
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap gap-4 justify-center">
            <Button href="#portfolio">View our work</Button>
            <Button href="#contact" variant="secondary">Book a consultation</Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-warm-white to-transparent pointer-events-none" />
    </section>
  )
}
