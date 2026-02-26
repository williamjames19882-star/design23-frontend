import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function handleNavClick(href, closeMenu) {
  closeMenu()
  const id = href.replace('#', '')
  if (typeof window !== 'undefined') {
    window.history.replaceState(null, '', href)
  }
  // Scroll after menu close animation so layout is stable and UI reflects correctly
  const scrollToSection = () => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  setTimeout(scrollToSection, 350)
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-warm-white/95 backdrop-blur-sm border-b border-warm-sand/50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-20" aria-label="Main navigation">
        <a href="#hero" className="font-heading text-fluid-xl font-semibold text-warm-ink transition-colors hover:text-accent-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 rounded">
          Design23
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-warm-charcoal hover:text-accent-gold transition-colors duration-300 text-fluid-lg font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 rounded py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-warm-ink hover:bg-warm-sand/50 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu overlay - fixed so it sits on top of page content */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-warm-ink/40 md:hidden"
              aria-hidden="true"
              onClick={() => setMobileOpen(false)}
            />
            {/* Menu panel - below header, overlays main content */}
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed left-0 right-0 top-16 z-[45] md:hidden max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-warm-sand/50 bg-warm-white shadow-lg"
            >
              <ul className="px-4 py-4 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="block py-3 px-3 rounded-lg text-warm-charcoal hover:bg-warm-sand/50 hover:text-accent-gold transition-colors duration-300 text-lg font-medium"
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(link.href, () => setMobileOpen(false))
                      }}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
