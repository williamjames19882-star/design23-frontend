import { motion } from 'framer-motion'

const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-warm-charcoal text-warm-cream">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24"
      >
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <a href="#hero" className="font-heading text-2xl font-semibold text-warm-white hover:text-accent-gold-light transition-colors duration-300">
              Design23Interiors
            </a>
            <p className="mt-4 text-warm-sand max-w-md text-fluid-lg">
              Transforming spaces with thoughtful design. Residential and commercial interior design and renovation.
            </p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-warm-white">Quick links</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-warm-sand hover:text-accent-gold-light transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-warm-stone/30 text-warm-stone text-sm text-center">
          &copy; {new Date().getFullYear()} Design23Interiors. All rights reserved.
        </div>
      </motion.div>
    </footer>
  )
}
