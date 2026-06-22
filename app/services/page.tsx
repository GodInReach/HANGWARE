import type { Metadata } from 'next'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore HANGWARE\'s comprehensive digital services — Full Stack Development, Mobile Apps, AI Solutions, SaaS Platforms, Cloud, UI/UX Design, and more.',
}

const services = [
  {
    icon: '💻', title: 'Custom Software Development', category: 'Core',
    desc: 'Tailored software solutions engineered to match your unique business requirements and operational workflows.',
    features: ['Enterprise Applications', 'CRM & ERP Systems', 'Workflow Automation', 'API Development & Integration', 'Legacy System Modernization'],
  },
  {
    icon: '⚡', title: 'Full Stack Web Development', category: 'Core',
    desc: 'Modern, scalable, and high-performance web applications built with the latest frameworks and best practices.',
    features: ['React & Next.js Applications', 'Node.js & Python Backends', 'Progressive Web Apps', 'E-Commerce Platforms', 'Admin Dashboards & Portals'],
  },
  {
    icon: '📱', title: 'Mobile App Development', category: 'Core',
    desc: 'Native and cross-platform mobile applications delivering exceptional user experiences across all devices.',
    features: ['Android & iOS Development', 'Flutter & React Native', 'App Store Optimization', 'Push Notifications & Analytics', 'Offline-First Architecture'],
  },
  {
    icon: '🧠', title: 'AI & Automation Solutions', category: 'Core',
    desc: 'Leverage artificial intelligence to automate processes, gain insights, and create intelligent product experiences.',
    features: ['AI Chatbots & Assistants', 'Workflow Automation', 'Machine Learning Models', 'Natural Language Processing', 'Computer Vision Solutions'],
  },
  {
    icon: '☁️', title: 'SaaS Product Development', category: 'Core',
    desc: 'End-to-end development of subscription-based software platforms with robust architecture and monetization.',
    features: ['Multi-Tenant Architecture', 'Subscription & Billing', 'Analytics Dashboards', 'User Management & RBAC', 'API & Webhook Systems'],
  },
  {
    icon: '🎨', title: 'UI/UX Design', category: 'Core',
    desc: 'Research-driven design that creates intuitive, engaging interfaces that convert visitors into loyal users.',
    features: ['User Research & Personas', 'Wireframing & Prototyping', 'Visual Design Systems', 'Usability Testing', 'Responsive & Accessible Design'],
  },
  {
    icon: '🌐', title: 'Cloud Solutions', category: 'Core',
    desc: 'Complete cloud strategy, migration, optimization, and infrastructure management for modern applications.',
    features: ['AWS, GCP & Azure', 'CI/CD Pipelines', 'Container Orchestration', 'Serverless Architecture', 'Cost Optimization'],
  },
  {
    icon: '🔧', title: 'Maintenance & Support', category: 'Core',
    desc: 'Continuous updates, monitoring, and technical assistance to keep your products running at peak performance.',
    features: ['24/7 Monitoring', 'Bug Fixes & Patches', 'Performance Optimization', 'Security Updates', 'Feature Enhancements'],
  },
  {
    icon: '⚙️', title: 'Business Automation', category: 'Core',
    desc: 'Streamline your operations with custom automation solutions that reduce costs and improve efficiency.',
    features: ['Process Automation', 'Custom CRM Solutions', 'Inventory Management', 'Report Generation', 'Email & Marketing Automation'],
  },
  {
    icon: '🚀', title: 'Startup Consulting', category: 'Core',
    desc: 'Strategic technology guidance for startups — from idea validation to market-ready products.',
    features: ['MVP Development', 'Technical Architecture', 'Pitch Deck Support', 'Go-to-Market Strategy', 'Investor-Ready Products'],
  },
  {
    icon: '📋', title: 'Legal Business Services', category: 'Business',
    desc: 'Essential legal and compliance services for startups and growing businesses through trusted professional partners.',
    features: ['Company Registration', 'GST & Compliance', 'Trademark Registration', 'NDA & Agreements', 'Privacy Policy & Terms'],
  },
]

const hardwareService = {
  icon: '🔌', title: 'Hardware & IoT Solutions', category: 'Optional',
  desc: 'Custom IoT integrations, embedded systems, and smart device development available for selected projects requiring hardware components.',
  features: ['IoT Device Integration', 'Embedded Systems', 'Sensor Networks', 'Smart Device Firmware'],
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section">
        <div className="container-custom text-center">
          <ScrollReveal>
            <span className="badge mb-4 inline-flex">Our Services</span>
            <h1 className="mb-5">Comprehensive <span className="gradient-text">Digital Solutions</span></h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              From concept to deployment, we offer end-to-end technology services covering every aspect 
              of modern digital product engineering.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section aurora-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 60}>
                <div className="glass-card p-7 h-full group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl shrink-0 transition-transform duration-300 group-hover:scale-110">{service.icon}</div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold">{service.title}</h3>
                        <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: 'var(--badge-bg)', color: 'var(--badge-text)' }}>{service.category}</span>
                      </div>
                      <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>{service.desc}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-14">
                    {service.features.map(f => (
                      <div key={f} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <span className="text-xs" style={{ color: 'var(--accent-primary)' }}>✦</span>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Hardware & IoT — Secondary/small */}
          <ScrollReveal delay={100}>
            <div className="mt-8 max-w-2xl mx-auto">
              <div className="glass-card p-6 opacity-70 hover:opacity-100 transition-opacity">
                <div className="flex items-start gap-4">
                  <div className="text-2xl shrink-0">{hardwareService.icon}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-base font-semibold">{hardwareService.title}</h4>
                      <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: 'rgba(255,165,0,0.1)', color: '#f59e0b' }}>Optional</span>
                    </div>
                    <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>{hardwareService.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {hardwareService.features.map(f => (
                        <span key={f} className="text-xs px-2 py-1 rounded-md" style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'var(--text-tertiary)' }}>{f}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="mb-5">Need a Custom <span className="gradient-text">Solution?</span></h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Every business is unique. Let&apos;s discuss your specific needs and build the perfect solution together.
            </p>
            <a href="/contact" className="btn-primary">Get Free Consultation</a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
