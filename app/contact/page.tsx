import type { Metadata } from 'next'
import ScrollReveal from '../components/ScrollReveal'
import ConsultationForm from '../components/ConsultationForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with HANGWARE. Book a free consultation, send a project inquiry, or reach us via WhatsApp, email, or phone.',
}

const contactInfo = [
  { icon: '📧', label: 'Email', value: 'hello@hangware.in', href: 'mailto:hello@hangware.in' },
  { icon: '📞', label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
  { icon: '💬', label: 'WhatsApp', value: 'Chat Instantly', href: 'https://wa.me/919876543210?text=Hi%20HANGWARE!%20I%27d%20like%20to%20discuss%20a%20project.' },
  { icon: '📍', label: 'Location', value: 'India', href: '#' },
]

const quickLinks = [
  { label: 'View Our Services', href: '/services' },
  { label: 'See Our Portfolio', href: '/portfolio' },
  { label: 'Read Case Studies', href: '/case-studies' },
  { label: 'Explore Solutions', href: '/solutions' },
]

export default function ContactPage() {
  return (
    <>
      <section className="section">
        <div className="container-custom text-center">
          <ScrollReveal>
            <span className="badge mb-4 inline-flex">Contact Us</span>
            <h1 className="mb-5">Let&apos;s Build Something <span className="gradient-text">Amazing</span></h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Have a project idea? Need a technology partner? Book a free 30-minute consultation 
              and let&apos;s discuss how we can help.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-sm aurora-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <ScrollReveal>
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Get in <span className="gradient-text">Touch</span></h2>
                  <div className="space-y-5">
                    {contactInfo.map(c => (
                      <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 glass-card transition-transform group-hover:scale-110">
                          {c.icon}
                        </div>
                        <div>
                          <div className="text-xs font-medium" style={{ color: 'var(--text-tertiary)' }}>{c.label}</div>
                          <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{c.value}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                  <div className="space-y-2">
                    {quickLinks.map(l => (
                      <a key={l.label} href={l.href} className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[var(--accent-primary)]" style={{ color: 'var(--text-secondary)' }}>
                        <span style={{ color: 'var(--accent-primary)' }}>→</span> {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="glass-card p-6">
                  <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
                  <div className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <div className="flex justify-between">
                      <span>Monday – Friday</span>
                      <span className="font-medium" style={{ color: 'var(--text-primary)' }}>10:00 AM – 7:00 PM IST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium" style={{ color: 'var(--text-primary)' }}>10:00 AM – 4:00 PM IST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium" style={{ color: 'var(--text-tertiary)' }}>Closed</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={100}>
                <div className="glass-card p-8">
                  <h2 className="text-2xl font-semibold mb-2">Book Free <span className="gradient-text">Consultation</span></h2>
                  <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
                    Fill in the details below and we&apos;ll get back to you within 24 hours.
                  </p>
                  <ConsultationForm />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder / CTA */}
      <section className="section">
        <div className="container-custom text-center">
          <ScrollReveal>
            <div className="glass-card p-10">
              <h2 className="text-2xl font-semibold mb-3">Prefer a Quick <span className="gradient-text">Chat?</span></h2>
              <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
                Click below to start a WhatsApp conversation. We typically respond within 5 minutes during business hours.
              </p>
              <a
                href="https://wa.me/919876543210?text=Hi%20HANGWARE!%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ background: '#25D366' }}
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
