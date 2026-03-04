import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from './Button'

const initialForm = { name: '', email: '', message: '' }
const initialErrors = { name: '', email: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState(initialErrors)
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const next = { ...initialErrors }
    if (!form.name.trim()) next.name = 'Name is required'
    if (!form.email.trim()) next.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email'
    if (!form.message.trim()) next.message = 'Message is required'
    setErrors(next)
    return !Object.values(next).some(Boolean)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    // Placeholder: in production you would POST to an endpoint or use mailto
    setSubmitted(true)
    setForm(initialForm)
    setErrors(initialErrors)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl bg-warm-sand/30 border border-warm-sand/60 p-8 text-center"
      >
        <p className="font-heading text-xl text-warm-ink mb-2">Thank you for your message.</p>
        <p className="text-warm-charcoal">We will get back to you shortly.</p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-4 text-accent-gold hover:text-accent-gold-light font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold rounded"
        >
          Send another message
        </button>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label htmlFor="contact-name" className="block font-medium text-warm-ink mb-2">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-warm-sand bg-warm-white px-4 py-3 text-warm-ink placeholder-warm-stone focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 focus:outline-none transition duration-300 min-h-[44px]"
          placeholder="Your name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.name}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="contact-email" className="block font-medium text-warm-ink mb-2">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-warm-sand bg-warm-white px-4 py-3 text-warm-ink placeholder-warm-stone focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 focus:outline-none transition duration-300 min-h-[44px]"
          placeholder="you@example.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.email}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="contact-message" className="block font-medium text-warm-ink mb-2">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="w-full rounded-lg border border-warm-sand bg-warm-white px-4 py-3 text-warm-ink placeholder-warm-stone focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 focus:outline-none transition duration-300 resize-y min-h-[120px]"
          placeholder="Tell us about your project..."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.message}
          </p>
        )}
      </div>
      <Button type="submit" variant="primary">
        Send message
      </Button>
    </motion.form>
  )
}
