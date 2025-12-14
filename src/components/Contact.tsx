import { motion } from 'framer-motion'
import { type FormEvent, useMemo, useState } from 'react'

type FormValues = {
  name: string
  email: string
  message: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const CONTACT_EMAIL = 'yanuar.alfian@example.com'
const WHATSAPP_NUMBER_E164 = '6281234567890'
const DISPLAY_PHONE = '+62 812 3456 7890'

const isValidEmail = (value: string) => {
  // Keep validation intentionally simple; HTML5 validation also applies.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

const Contact = () => {
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    message: '',
  })
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>(
    {},
  )
  const [submitState, setSubmitState] = useState<'idle' | 'success'>('idle')

  const errors = useMemo<FormErrors>(() => {
    const next: FormErrors = {}

    if (values.name.trim().length < 2) {
      next.name = 'Please enter your name (at least 2 characters).'
    }

    if (!isValidEmail(values.email.trim())) {
      next.email = 'Please enter a valid email address.'
    }

    if (values.message.trim().length < 10) {
      next.message = 'Please write a message (at least 10 characters).'
    }

    return next
  }, [values.email, values.message, values.name])

  const isFormValid = Object.keys(errors).length === 0

  const openMailto = (payload: FormValues) => {
    const subject = encodeURIComponent(`Portfolio contact from ${payload.name}`)
    const body = encodeURIComponent(
      `Name: ${payload.name}\nEmail: ${payload.email}\n\nMessage:\n${payload.message}\n`,
    )

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setTouched({ name: true, email: true, message: true })

    if (!isFormValid) return

    setSubmitState('success')
    openMailto(values)
  }

  const handleBlur = (field: keyof FormValues) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative scroll-mt-10 bg-gradient-to-b from-slate-900 to-slate-950 text-white"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.35) 0%, transparent 45%),
                            radial-gradient(circle at 90% 70%, rgba(147, 51, 234, 0.35) 0%, transparent 45%)`,
        }}
        aria-hidden="true"
      />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div variants={itemVariants} className="max-w-3xl">
          <h2
            id="contact-title"
            className="text-3xl sm:text-4xl font-bold tracking-tight"
          >
            Let’s build something together
          </h2>
          <p className="mt-4 text-gray-300 text-base sm:text-lg">
            Reach out directly or send a message using the form. I’ll get back to you
            as soon as possible.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10"
        >
          <div className="lg:col-span-5">
            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-xl bg-blue-500/10 border border-blue-400/20 p-3">
                    <svg
                      className="w-6 h-6 text-blue-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="mt-1 inline-flex items-center gap-2 font-semibold text-white hover:text-blue-300 transition-colors"
                    >
                      {CONTACT_EMAIL}
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8L11 17"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-xl bg-emerald-500/10 border border-emerald-400/20 p-3">
                    <svg
                      className="w-6 h-6 text-emerald-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Phone / WhatsApp</div>
                    <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-2">
                      <a
                        href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`}
                        className="font-semibold text-white hover:text-emerald-300 transition-colors"
                      >
                        {DISPLAY_PHONE}
                      </a>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER_E164}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/10 border border-emerald-400/20 px-3 py-1.5 text-sm font-semibold text-emerald-200 hover:bg-emerald-500/20 transition-colors"
                        aria-label="Chat on WhatsApp"
                      >
                        WhatsApp
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7h8m0 0v8m0-8L11 17"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-xl bg-purple-500/10 border border-purple-400/20 p-3">
                    <svg
                      className="w-6 h-6 text-purple-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Location</div>
                    <div className="mt-1 font-semibold">Indonesia</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
              <div className="text-sm text-gray-400">Social</div>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                  aria-label="GitHub"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.646 2 12.377c0 4.585 2.865 8.47 6.839 9.843.5.096.682-.227.682-.502 0-.247-.009-.901-.014-1.77-2.782.619-3.369-1.399-3.369-1.399-.454-1.2-1.11-1.52-1.11-1.52-.908-.641.069-.628.069-.628 1.004.073 1.532 1.074 1.532 1.074.892 1.585 2.341 1.127 2.91.862.09-.67.349-1.127.635-1.386-2.22-.262-4.555-1.158-4.555-5.153 0-1.138.39-2.068 1.03-2.796-.103-.262-.447-1.316.098-2.743 0 0 .84-.279 2.75 1.067A9.154 9.154 0 0112 6.844a9.14 9.14 0 012.504.351c1.909-1.346 2.748-1.067 2.748-1.067.546 1.427.202 2.481.1 2.743.64.728 1.028 1.658 1.028 2.796 0 4.005-2.339 4.888-4.566 5.145.359.321.678.953.678 1.921 0 1.386-.013 2.504-.013 2.845 0 .278.18.603.688.501C19.138 20.843 22 16.96 22 12.377 22 6.646 17.523 2 12 2z"
                    />
                  </svg>
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.603 0 4.267 2.37 4.267 5.456v6.285zM5.337 7.433a2.062 2.062 0 01-2.062-2.065 2.062 2.062 0 112.062 2.065zM6.992 20.452H3.68V9h3.312v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      autoComplete="name"
                      value={values.name}
                      onChange={(e) =>
                        setValues((prev) => ({ ...prev, name: e.target.value }))
                      }
                      onBlur={() => handleBlur('name')}
                      required
                      className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/30"
                      placeholder="Your name"
                      aria-invalid={Boolean(touched.name && errors.name)}
                      aria-describedby={
                        touched.name && errors.name ? 'contact-name-error' : undefined
                      }
                    />
                    {touched.name && errors.name ? (
                      <p
                        id="contact-name-error"
                        className="mt-2 text-sm text-red-300"
                        role="alert"
                      >
                        {errors.name}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={(e) =>
                        setValues((prev) => ({ ...prev, email: e.target.value }))
                      }
                      onBlur={() => handleBlur('email')}
                      required
                      className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/30"
                      placeholder="you@example.com"
                      aria-invalid={Boolean(touched.email && errors.email)}
                      aria-describedby={
                        touched.email && errors.email ? 'contact-email-error' : undefined
                      }
                    />
                    {touched.email && errors.email ? (
                      <p
                        id="contact-email-error"
                        className="mt-2 text-sm text-red-300"
                        role="alert"
                      >
                        {errors.email}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    value={values.message}
                    onChange={(e) =>
                      setValues((prev) => ({ ...prev, message: e.target.value }))
                    }
                    onBlur={() => handleBlur('message')}
                    required
                    className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-blue-400/60 focus:ring-2 focus:ring-blue-500/30"
                    placeholder="Tell me about your idea…"
                    aria-invalid={Boolean(touched.message && errors.message)}
                    aria-describedby={
                      touched.message && errors.message
                        ? 'contact-message-error'
                        : undefined
                    }
                  />
                  {touched.message && errors.message ? (
                    <p
                      id="contact-message-error"
                      className="mt-2 text-sm text-red-300"
                      role="alert"
                    >
                      {errors.message}
                    </p>
                  ) : null}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <button
                    type="submit"
                    className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950"
                  >
                    Send Message
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>

                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-slate-950"
                  >
                    Or email directly
                  </a>
                </div>

                {submitState === 'success' ? (
                  <p className="text-sm text-emerald-200" role="status">
                    Thanks! Your email app should open with your message pre-filled.
                  </p>
                ) : null}

                <p className="text-xs text-gray-400">
                  This form opens your default email client. No data is stored on this site.
                </p>
              </form>
            </div>
          </div>
        </motion.div>

        <motion.footer
          variants={itemVariants}
          className="mt-12 border-t border-white/10 pt-8 flex flex-col sm:flex-row gap-3 items-center justify-between text-sm text-gray-400"
        >
          <p>© {new Date().getFullYear()} Yanuar Nur Alfian. All rights reserved.</p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            Back to top
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </a>
        </motion.footer>
      </motion.div>
    </section>
  )
}

export default Contact
