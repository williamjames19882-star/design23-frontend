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
      className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-warm-white"
      aria-label="Hero"
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-sm mx-auto"
        >
          <motion.div
            variants={item}
            className="flex justify-center mb-8"
          >
            <img src="/title.png" alt="Design23 Interiors" className="max-w-full h-auto max-h-96" />
          </motion.div>
          <motion.p
            variants={item}
            className="text-accent-burgundy font-body text-fluid-lg uppercase tracking-widest mb-6"
          >
            Transform your space with thoughtful design
          </motion.p>
          <motion.p
            variants={item}
            className="text-warm-charcoal text-fluid-lg max-w-2xl mx-auto mb-10"
          >
            Residential and commercial interiors, tailored to you.
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
