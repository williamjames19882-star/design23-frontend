import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-warm-white" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3] max-h-[400px] lg:max-h-none bg-warm-sand/50"
          >
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
              alt="Design23Interiors studio or design process"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <h2 id="about-heading" className="font-heading text-fluid-3xl text-warm-ink mb-6">
              About Design23Interiors
            </h2>
            <p className="text-warm-charcoal text-fluid-lg mb-4">
              We are a full-service interior design studio focused on creating spaces that are both beautiful and functional. Whether you are refreshing a single room or reimagining an entire property, we work with you from concept through to the final details.
            </p>
            <p className="text-warm-charcoal text-fluid-lg mb-6">
              Our approach blends timeless materials and contemporary aesthetics with your personal style. We partner with trusted contractors and craftspeople to ensure every project is delivered to the highest standard.
            </p>
            <ul className="space-y-2 text-warm-charcoal text-fluid-lg">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-gold" aria-hidden="true" />
                Residential & commercial projects
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-gold" aria-hidden="true" />
                Bespoke furniture and joinery
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-gold" aria-hidden="true" />
                Sourcing and procurement
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
