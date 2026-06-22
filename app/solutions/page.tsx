import type { Metadata } from 'next'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Explore HANGWARE\'s solution packages — MVP Development, Enterprise Solutions, Digital Transformation, and industry-specific technology solutions.',
}

const solutions = [
  {
    icon: '🚀', title: 'MVP Development', subtitle: 'For Startups & New Ideas',
    desc: 'Validate your concept quickly with a minimum viable product. We build lean, functional prototypes that help you test market fit, attract investors, and iterate based on real user feedback.',
    features: ['Concept Validation Workshop', 'Rapid Prototyping (4-6 weeks)', 'User Testing & Feedback', 'Investor-Ready Product', 'Scalable Foundation'],
    budget: 'Starting from ₹1.5 Lakhs',
  },
  {
    icon: '🏢', title: 'Enterprise Solutions', subtitle: 'For Growing Businesses',
    desc: 'Comprehensive enterprise-grade applications built for scale, security, and performance. From CRMs to ERPs, we build systems that streamline operations and drive growth.',
    features: ['Custom CRM/ERP Systems', 'Multi-User Role Management', 'Advanced Analytics', 'API Integrations', 'Enterprise Security'],
    budget: 'Starting from ₹5 Lakhs',
  },
  {
    icon: '🔄', title: 'Digital Transformation', subtitle: 'For Legacy Modernization',
    desc: 'Modernize your technology infrastructure, migrate legacy systems to the cloud, and automate manual processes to stay competitive in the digital age.',
    features: ['Legacy System Migration', 'Cloud Architecture', 'Process Automation', 'Data Pipeline Setup', 'Training & Handover'],
    budget: 'Starting from ₹3 Lakhs',
  },
  {
    icon: '🧠', title: 'AI Integration', subtitle: 'For Smart Automation',
    desc: 'Embed artificial intelligence into your existing products or build AI-first solutions that automate decision-making, enhance customer experience, and unlock data insights.',
    features: ['AI Chatbot Development', 'Predictive Analytics', 'Document Processing', 'Recommendation Engines', 'Custom ML Models'],
    budget: 'Starting from ₹2 Lakhs',
  },
  {
    icon: '☁️', title: 'SaaS Platform', subtitle: 'For Product Companies',
    desc: 'Build a complete SaaS product from scratch with multi-tenancy, subscription billing, analytics dashboards, and everything needed to launch a software business.',
    features: ['Multi-Tenant Architecture', 'Stripe/Razorpay Billing', 'Admin & User Portals', 'API & Webhooks', 'Usage Analytics'],
    budget: 'Starting from ₹8 Lakhs',
  },
  {
    icon: '📱', title: 'Mobile-First Solutions', subtitle: 'For Consumer Apps',
    desc: 'Build engaging mobile applications that users love. From social platforms to marketplace apps, we create mobile experiences that drive downloads and retention.',
    features: ['Cross-Platform (Flutter/RN)', 'Push Notifications', 'In-App Purchases', 'Social Features', 'Offline Capabilities'],
    budget: 'Starting from ₹3 Lakhs',
  },
]

export default function SolutionsPage() {
  return (
    <>
      <section className="section">
        <div className="container-custom text-center">
          <ScrollReveal>
            <span className="badge mb-4 inline-flex">Solutions</span>
            <h1 className="mb-5">Solution Packages for <span className="gradient-text">Every Stage</span></h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Whether you&apos;re validating an idea, scaling a product, or transforming operations — 
              we have the right solution package for your needs.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section aurora-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol, i) => (
              <ScrollReveal key={sol.title} delay={i * 80}>
                <div className="glass-card p-7 h-full flex flex-col group">
                  <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110">{sol.icon}</div>
                  <h3 className="text-xl font-semibold mb-1">{sol.title}</h3>
                  <div className="text-sm font-medium gradient-text mb-3">{sol.subtitle}</div>
                  <p className="text-sm mb-5 flex-1" style={{ color: 'var(--text-secondary)' }}>{sol.desc}</p>
                  <div className="space-y-2 mb-5">
                    {sol.features.map(f => (
                      <div key={f} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <span style={{ color: 'var(--accent-primary)' }}>✓</span> {f}
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto pt-4" style={{ borderTop: '1px solid var(--divider)' }}>
                    <div className="text-sm font-bold gradient-text mb-3">{sol.budget}</div>
                    <a href="/contact" className="btn-primary w-full text-sm">Get Started</a>
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
            <h2 className="mb-5">Not Sure Which Solution <span className="gradient-text">Fits?</span></h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Book a free 30-minute consultation and we&apos;ll help you identify the right approach for your project.
            </p>
            <a href="/contact" className="btn-primary">Book Free Consultation</a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
