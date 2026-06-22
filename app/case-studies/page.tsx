import type { Metadata } from 'next'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Deep dive into HANGWARE\'s success stories — detailed case studies showcasing challenges, solutions, and measurable results.',
}

const caseStudies = [
  {
    title: 'EduLearn — Scaling an Ed-Tech Platform to 50K Users',
    client: 'EduLearn Pvt Ltd', industry: 'Education', duration: '4 Months',
    challenge: 'EduLearn had a basic WordPress-based course platform that couldn\'t handle growing user load. Live classes crashed frequently, student progress tracking was manual, and the mobile experience was poor. They needed a complete platform rebuild that could scale to 100K+ users.',
    solution: 'We rebuilt the entire platform using Next.js and Node.js with a microservices architecture on AWS. Key implementations included real-time live class infrastructure (WebRTC), AI-powered assessment engine, automated progress tracking, mobile-responsive PWA, and an admin analytics dashboard.',
    results: [
      { metric: '50,000+', label: 'Active Users' },
      { metric: '99.9%', label: 'Uptime' },
      { metric: '3x', label: 'Revenue Growth' },
      { metric: '45%', label: 'Cost Reduction' },
    ],
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'WebRTC'],
  },
  {
    title: 'LogiTrack — AI Route Optimization for Logistics',
    client: 'LogiTrack Solutions', industry: 'Logistics', duration: '6 Months',
    challenge: 'LogiTrack managed a fleet of 500+ delivery vehicles with manual route planning. Fuel costs were rising, delivery times were unpredictable, and driver utilization was below 60%. They needed an intelligent system to optimize routes and predict demand.',
    solution: 'We developed an AI-powered fleet management system using Python and TensorFlow. The system ingests real-time traffic data, weather conditions, and historical delivery patterns to optimize routes dynamically. A React dashboard provides live fleet tracking, predictive analytics, and automated dispatch.',
    results: [
      { metric: '23%', label: 'Cost Reduction' },
      { metric: '35%', label: 'Faster Deliveries' },
      { metric: '85%', label: 'Driver Utilization' },
      { metric: '₹2.5Cr', label: 'Annual Savings' },
    ],
    tags: ['Python', 'TensorFlow', 'React', 'GCP', 'PostgreSQL'],
  },
  {
    title: 'HealthBridge — HIPAA-Compliant Healthcare Portal',
    client: 'HealthBridge Medical', industry: 'Healthcare', duration: '5 Months',
    challenge: 'HealthBridge operated 12 clinics with paper-based records, phone-based appointment booking, and no digital patient engagement. Patient wait times averaged 45 minutes, and record retrieval was slow and error-prone. They needed a complete digital transformation.',
    solution: 'We built a comprehensive patient management portal with telemedicine (video consultations), digital health records, automated appointment scheduling, prescription management, and a patient mobile app. The system is fully HIPAA-compliant with end-to-end encryption and audit logging.',
    results: [
      { metric: '40%', label: 'Satisfaction ↑' },
      { metric: '60%', label: 'Wait Time ↓' },
      { metric: '10K+', label: 'Digital Records' },
      { metric: '30%', label: 'Revenue Growth' },
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'Twilio'],
  },
  {
    title: 'RetailPulse — Multi-Vendor Marketplace Platform',
    client: 'RetailPulse Inc', industry: 'E-Commerce', duration: '5 Months',
    challenge: 'RetailPulse wanted to build an online marketplace connecting local retailers with consumers. They needed a platform that could handle multiple vendors, real-time inventory, AI recommendations, secure payments, and logistics integration — all with a consumer-grade UX.',
    solution: 'We built a full-stack marketplace using Next.js, GraphQL, and Redis for caching. Key features include vendor onboarding portal, AI product recommendations (collaborative filtering), real-time inventory sync, Razorpay payment integration, automated order routing, and a delivery tracking system.',
    results: [
      { metric: '₹2Cr+', label: 'GMV in Year 1' },
      { metric: '500+', label: 'Active Vendors' },
      { metric: '25K+', label: 'Monthly Users' },
      { metric: '4.6★', label: 'App Rating' },
    ],
    tags: ['Next.js', 'GraphQL', 'Redis', 'Razorpay', 'AWS'],
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <section className="section">
        <div className="container-custom text-center">
          <ScrollReveal>
            <span className="badge mb-4 inline-flex">Case Studies</span>
            <h1 className="mb-5">Success <span className="gradient-text">Stories</span></h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Deep dives into real projects — the challenges, our solutions, and the measurable impact we delivered.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-sm">
        <div className="container-custom space-y-10">
          {caseStudies.map((cs, i) => (
            <ScrollReveal key={cs.title} delay={i * 100}>
              <div className="glass-card overflow-hidden">
                {/* Header */}
                <div className="p-7 pb-0">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="badge">{cs.industry}</span>
                    <span className="text-xs font-medium" style={{ color: 'var(--text-tertiary)' }}>• {cs.duration}</span>
                    <span className="text-xs font-medium" style={{ color: 'var(--text-tertiary)' }}>• {cs.client}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-semibold mb-6">{cs.title}</h2>
                </div>

                {/* Content */}
                <div className="p-7 pt-0 grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--error)' }}>Challenge</h4>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{cs.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-3 gradient-text">Solution</h4>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{cs.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--success)' }}>Results</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {cs.results.map(r => (
                        <div key={r.label} className="text-center p-3 rounded-xl" style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}>
                          <div className="text-lg font-bold gradient-text">{r.metric}</div>
                          <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{r.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="px-7 pb-6">
                  <div className="flex flex-wrap gap-2">
                    {cs.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-md" style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'var(--text-tertiary)' }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section aurora-bg">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="mb-5">Want Results Like <span className="gradient-text">These?</span></h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Every case study started with a conversation. Let&apos;s start yours.
            </p>
            <a href="/contact" className="btn-primary">Discuss Your Project</a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
