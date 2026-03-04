import { motion } from 'framer-motion'

const variants = {
  primary: 'bg-accent-gold text-warm-white hover:bg-accent-gold-light border-transparent',
  secondary: 'bg-transparent text-warm-ink border-2 border-warm-charcoal hover:border-accent-gold hover:text-accent-gold',
  ghost: 'bg-transparent text-warm-charcoal hover:bg-warm-sand/50',
}

export default function Button({ children, variant = 'primary', href, className = '', ...props }) {
  const base = 'inline-flex items-center justify-center font-body font-medium rounded-lg transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 min-h-[44px] px-6 py-3 text-fluid-lg'
  const combined = `${base} ${variants[variant] || variants.primary} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        className={combined}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={props.type || 'button'}
      className={combined}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
