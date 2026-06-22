'use client'

import { useState } from 'react'

interface ConsultationFormProps {
  compact?: boolean
}

const serviceOptions = [
  'Full Stack Web Development',
  'Mobile App Development',
  'SaaS Development',
  'Custom Software Development',
  'AI & Automation Solutions',
  'UI/UX Design',
  'Cloud Solutions',
  'Business Automation',
  'Startup Consulting',
  'Legal Business Services',
  'Hardware & IoT Solutions',
]

const budgetRanges = [
  '₹50,000 – ₹2 Lakhs',
  '₹2 Lakhs – ₹5 Lakhs',
  '₹5 Lakhs – ₹15 Lakhs',
  '₹15 Lakhs – ₹50 Lakhs',
  'Above ₹50 Lakhs',
]

export default function ConsultationForm({ compact = false }: ConsultationFormProps) {
  const [formState, setFormState] = useState({
    name: '', email: '', phone: '', company: '', service: '', budget: '', message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })
      if (res.ok) {
        setStatus('success')
        setFormState({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }

    setTimeout(() => setStatus('idle'), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" id="consultation-form">
      <div className={`grid ${compact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-4`}>
        <input
          type="text"
          name="name"
          placeholder="Full Name *"
          required
          className="input-field"
          value={formState.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address *"
          required
          className="input-field"
          value={formState.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="input-field"
          value={formState.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          className="input-field"
          value={formState.company}
          onChange={handleChange}
        />
      </div>

      <div className={`grid ${compact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-4`}>
        <select
          name="service"
          className="input-field"
          value={formState.service}
          onChange={handleChange}
          style={{ color: formState.service ? 'var(--text-primary)' : 'var(--text-tertiary)' }}
        >
          <option value="">Select Service *</option>
          {serviceOptions.map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <select
          name="budget"
          className="input-field"
          value={formState.budget}
          onChange={handleChange}
          style={{ color: formState.budget ? 'var(--text-primary)' : 'var(--text-tertiary)' }}
        >
          <option value="">Estimated Budget</option>
          {budgetRanges.map(b => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>

      <textarea
        name="message"
        placeholder="Tell us about your project..."
        className="input-field"
        rows={4}
        value={formState.message}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="btn-primary w-full"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending...' : status === 'success' ? '✓ Sent Successfully!' : 'Book Free Consultation'}
      </button>

      {status === 'error' && (
        <p className="text-sm text-center" style={{ color: 'var(--error)' }}>
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  )
}
