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
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src="/BusinessCard2.jpg"
                alt="Design23 Business Card 2"
                className="w-full h-auto object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src="/BusinessCard1.jpg"
                alt="Design23 Business Card 1"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
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
