import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-warm-cream" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <h2 id="contact-heading" className="font-heading text-fluid-3xl text-warm-ink mb-4">
            Get in touch
          </h2>
          <p className="text-warm-charcoal text-fluid-lg">
            Have a project in mind? We would love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-heading text-xl text-warm-ink mb-4">Contact details</h3>
            <ul className="space-y-4 text-warm-charcoal text-fluid-lg">
              <li>
                <a href="mailto:hello@design23interiors.com" className="hover:text-accent-gold transition-colors duration-300">
                  hello@design23interiors.com
                </a>
              </li>
              <li>
                <a href="tel:+441234567890" className="hover:text-accent-gold transition-colors duration-300">
                  +44 123 456 7890
                </a>
              </li>
              <li>
                <span>Studio by appointment</span>
              </li>
            </ul>
          </motion.div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
