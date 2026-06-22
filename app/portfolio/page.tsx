import type { Metadata } from 'next'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Explore HANGWARE\'s portfolio of successfully delivered projects across web, mobile, AI, and SaaS domains.',
}

const categories = ['All', 'Web Apps', 'Mobile', 'AI/ML', 'SaaS', 'E-Commerce']

const projects = [
  { title: 'EduLearn Platform', category: 'SaaS', industry: 'Education', desc: 'Comprehensive LMS with live classes, AI assessments, and analytics for 50K+ students.', tags: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'], metric: '50K+ Users' },
  { title: 'LogiTrack AI', category: 'AI/ML', industry: 'Logistics', desc: 'AI-powered fleet management and route optimization reducing delivery costs by 23%.', tags: ['Python', 'TensorFlow', 'React', 'GCP'], metric: '23% Savings' },
  { title: 'HealthBridge Portal', category: 'Web Apps', industry: 'Healthcare', desc: 'HIPAA-compliant patient management with telemedicine and health monitoring.', tags: ['React', 'Node.js', 'MongoDB', 'AWS'], metric: '40% Satisfaction ↑' },
  { title: 'RetailPulse', category: 'E-Commerce', industry: 'Retail', desc: 'Multi-vendor marketplace with AI recommendations and inventory management.', tags: ['Next.js', 'GraphQL', 'Redis', 'Stripe'], metric: '₹2Cr+ GMV' },
  { title: 'FinTrack Pro', category: 'SaaS', industry: 'Finance', desc: 'Financial analytics SaaS with real-time dashboards, reporting, and compliance tools.', tags: ['React', 'Python', 'PostgreSQL', 'AWS'], metric: '200+ Companies' },
  { title: 'PropView', category: 'Mobile', industry: 'Real Estate', desc: 'Cross-platform real estate app with AR property tours and smart matching.', tags: ['Flutter', 'Firebase', 'ARCore', 'Node.js'], metric: '15K Downloads' },
  { title: 'MediBot AI', category: 'AI/ML', industry: 'Healthcare', desc: 'AI chatbot for symptom checking and appointment booking with NLP engine.', tags: ['Python', 'LangChain', 'React', 'MongoDB'], metric: '95% Accuracy' },
  { title: 'ShopEase', category: 'E-Commerce', industry: 'Retail', desc: 'D2C e-commerce platform with subscription boxes and loyalty program.', tags: ['Next.js', 'Razorpay', 'PostgreSQL', 'Vercel'], metric: '₹80L Revenue' },
  { title: 'TaskFlow', category: 'Web Apps', industry: 'Startups', desc: 'Project management tool with kanban boards, time tracking, and team collaboration.', tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'], metric: '5K+ Teams' },
  { title: 'CampusConnect', category: 'Mobile', industry: 'Education', desc: 'University social platform with event management, forums, and career portal.', tags: ['React Native', 'Firebase', 'Node.js', 'Redis'], metric: '20K Students' },
]

export default function PortfolioPage() {
  return (
    <>
      <section className="section">
        <div className="container-custom text-center">
          <ScrollReveal>
            <span className="badge mb-4 inline-flex">Portfolio</span>
            <h1 className="mb-5">Our <span className="gradient-text">Work</span></h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              A showcase of digital products we&apos;ve built — each one solving real problems for real businesses.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Filters */}
      <section className="section-sm">
        <div className="container-custom">
          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer"
                  style={{
                    background: cat === 'All' ? 'var(--accent-primary)' : 'var(--glass-bg)',
                    color: cat === 'All' ? '#ffffff' : 'var(--text-secondary)',
                    border: `1px solid ${cat === 'All' ? 'var(--accent-primary)' : 'var(--glass-border)'}`,
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 60}>
                <div className="glass-card p-6 h-full group cursor-pointer relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-500" style={{ background: 'var(--accent-primary)' }} />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <span className="badge text-xs">{p.category}</span>
                      <span className="text-xs font-bold gradient-text">{p.metric}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
                    <div className="text-xs font-medium mb-3" style={{ color: 'var(--text-tertiary)' }}>{p.industry}</div>
                    <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-md" style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'var(--text-tertiary)' }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section aurora-bg">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="mb-5">Have a Similar <span className="gradient-text">Project?</span></h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Let&apos;s discuss how we can build something amazing for your business.
            </p>
            <a href="/contact" className="btn-primary">Start a Conversation</a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
