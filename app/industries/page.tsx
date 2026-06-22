import type { Metadata } from 'next'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Industries',
  description: 'HANGWARE serves Healthcare, Education, E-Commerce, Logistics, Finance, Startups, Real Estate, Retail, and Manufacturing with tailored digital solutions.',
}

const industries = [
  {
    icon: '🏥', name: 'Healthcare', desc: 'HIPAA-compliant patient portals, telemedicine platforms, health monitoring systems, and medical record management.',
    solutions: ['Patient Management Systems', 'Telemedicine Platforms', 'Health Data Analytics', 'Medical IoT Integration'],
  },
  {
    icon: '🎓', name: 'Education', desc: 'Learning management systems, virtual classrooms, student analytics, and institutional management platforms.',
    solutions: ['LMS Platforms', 'Virtual Classrooms', 'Student Analytics', 'Admission Portals'],
  },
  {
    icon: '🛒', name: 'E-Commerce', desc: 'Multi-vendor marketplaces, D2C platforms, inventory management, and AI-powered recommendation engines.',
    solutions: ['Marketplace Platforms', 'D2C Websites', 'Inventory Systems', 'Payment Integration'],
  },
  {
    icon: '🚛', name: 'Logistics', desc: 'Fleet management, route optimization, warehouse automation, and supply chain visibility platforms.',
    solutions: ['Fleet Tracking', 'Route Optimization', 'Warehouse Management', 'Supply Chain Analytics'],
  },
  {
    icon: '🏪', name: 'Retail', desc: 'POS systems, omnichannel experiences, customer loyalty programs, and retail analytics dashboards.',
    solutions: ['POS Systems', 'Loyalty Programs', 'Omnichannel Platforms', 'Sales Analytics'],
  },
  {
    icon: '🏭', name: 'Manufacturing', desc: 'Production monitoring, quality control systems, inventory tracking, and industrial IoT solutions.',
    solutions: ['Production Monitoring', 'Quality Control', 'Inventory Tracking', 'Industrial Automation'],
  },
  {
    icon: '🚀', name: 'Startups', desc: 'MVP development, rapid prototyping, product-market fit validation, and scalable architecture design.',
    solutions: ['MVP Development', 'Rapid Prototyping', 'Growth Engineering', 'Technical Advisory'],
  },
  {
    icon: '💰', name: 'Finance', desc: 'Financial dashboards, compliance tools, payment processing, and wealth management platforms.',
    solutions: ['Financial Dashboards', 'Compliance Systems', 'Payment Gateways', 'Risk Analytics'],
  },
  {
    icon: '🏠', name: 'Real Estate', desc: 'Property listing platforms, virtual tours, CRM systems, and real estate analytics tools.',
    solutions: ['Property Portals', 'Virtual Tours (AR)', 'Real Estate CRM', 'Market Analytics'],
  },
]

export default function IndustriesPage() {
  return (
    <>
      <section className="section">
        <div className="container-custom text-center">
          <ScrollReveal>
            <span className="badge mb-4 inline-flex">Industries</span>
            <h1 className="mb-5">Industries We <span className="gradient-text">Serve</span></h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Deep domain expertise across key sectors. We don&apos;t just build software — 
              we understand your industry&apos;s unique challenges and regulations.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-sm aurora-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <ScrollReveal key={ind.name} delay={i * 60}>
                <div className="glass-card p-7 h-full group">
                  <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110">{ind.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{ind.name}</h3>
                  <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>{ind.desc}</p>
                  <div className="space-y-2">
                    {ind.solutions.map(s => (
                      <div key={s} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <span style={{ color: 'var(--accent-primary)' }}>✦</span> {s}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="mb-5">Don&apos;t See Your <span className="gradient-text">Industry?</span></h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              We&apos;re experienced in adapting to new domains. Tell us about your industry and we&apos;ll show you how we can help.
            </p>
            <a href="/contact" className="btn-primary">Talk to Us</a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
