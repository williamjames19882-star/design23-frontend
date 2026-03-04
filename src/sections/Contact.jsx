import { motion } from 'framer-motion'
// import ContactForm from '../components/ContactForm' // Send message form – commented for now

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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto text-center rounded-2xl bg-warm-sand/20 border border-warm-sand/40 p-8 md:p-10"
        >
          <h3 className="font-heading text-xl text-warm-ink mb-6">Contact details</h3>
          <ul className="space-y-5 text-warm-charcoal text-fluid-lg">
            <li>
              <a href="mailto:narsingarabati@gmail.com" className="hover:text-accent-gold transition-colors duration-300 inline-block">
                narsingarabati@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+919542323301" className="hover:text-accent-gold transition-colors duration-300 inline-block">
                +91 954 232 3301
              </a>
            </li>
            <li>
              <span>Studio by appointment</span>
            </li>
          </ul>
        </motion.div>

        {/* Send message form – commented for now
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          ...
          <div>
            <ContactForm />
          </div>
        </div>
        */}
      </div>
    </section>
  )
}
