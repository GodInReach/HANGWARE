import type { Metadata } from 'next'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'
import AnimatedCounter from '../components/AnimatedCounter'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about HANGWARE — a digital product engineering company helping startups and businesses transform ideas into scalable digital solutions.',
}

const team = [
  { name: 'Dinesh Kumar', role: 'Founder & CEO', bio: 'Visionary leader with 8+ years in software engineering and product development.' },
  { name: 'Arun Prakash', role: 'CTO', bio: 'Full-stack architect specializing in scalable cloud-native applications.' },
  { name: 'Kavitha Nair', role: 'Head of Design', bio: 'Award-winning UI/UX designer focused on creating delightful user experiences.' },
  { name: 'Vikram Singh', role: 'Lead Developer', bio: 'Expert in React, Node.js, and microservices architecture.' },
  { name: 'Meera Joshi', role: 'AI/ML Engineer', bio: 'Building intelligent systems with deep learning and natural language processing.' },
  { name: 'Rahul Verma', role: 'DevOps Engineer', bio: 'Cloud infrastructure specialist ensuring 99.9% uptime and seamless deployments.' },
]

const values = [
  { icon: '🎯', title: 'Excellence', desc: 'We never settle for "good enough." Every line of code, every design pixel is crafted with care.' },
  { icon: '🤝', title: 'Transparency', desc: 'Open communication, honest timelines, and no hidden costs. We build trust through clarity.' },
  { icon: '💡', title: 'Innovation', desc: 'We stay ahead of technology trends to deliver solutions that give our clients competitive advantage.' },
  { icon: '🏆', title: 'Quality', desc: 'Rigorous testing, code reviews, and best practices ensure every product meets enterprise standards.' },
  { icon: '🚀', title: 'Speed', desc: 'Agile methodology, parallel workstreams, and rapid iteration to get your product to market faster.' },
  { icon: '❤️', title: 'Client Focus', desc: 'Your success is our success. We align technology decisions with your business goals.' },
]

const milestones = [
  { year: '2020', event: 'HANGWARE founded with a vision to democratize technology for startups' },
  { year: '2021', event: 'Completed 25+ projects and expanded team to 10 members' },
  { year: '2022', event: 'Launched AI & automation division, partnered with 3 enterprise clients' },
  { year: '2023', event: 'Crossed 100+ projects milestone, opened cloud solutions practice' },
  { year: '2024', event: 'Expanded to 25+ team members, introduced legal services wing' },
  { year: '2025', event: 'Serving 50+ active clients across 9 industries' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <span className="badge mb-4 inline-flex">About Us</span>
              <h1 className="mb-5">The Team Behind <span className="gradient-text">HANGWARE</span></h1>
              <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                We&apos;re a team of engineers, designers, and strategists passionate about building technology 
                that makes a real difference for businesses.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section aurora-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <span className="badge mb-4 inline-flex">Our Story</span>
                <h2 className="mb-5">From a <span className="gradient-text">Small Idea</span> to a Full-Service Tech Company</h2>
                <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                  HANGWARE started in 2020 with a simple belief: every startup and business deserves access to 
                  world-class technology. Too many great ideas were dying because founders couldn&apos;t find reliable, 
                  affordable technology partners.
                </p>
                <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                  We set out to change that. Starting with web development, we quickly expanded into mobile apps, 
                  AI solutions, cloud infrastructure, and SaaS platforms. Today, we&apos;re a full-service digital 
                  product engineering company serving clients across India and beyond.
                </p>
                <p style={{ color: 'var(--text-secondary)' }}>
                  What hasn&apos;t changed is our core commitment: treat every client&apos;s project as if it were our own, 
                  deliver exceptional quality, and always be transparent about timelines and costs.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="glass-card p-8">
                <h3 className="text-lg font-semibold mb-6 gradient-text">Company Milestones</h3>
                <div className="space-y-5">
                  {milestones.map((m, i) => (
                    <div key={m.year} className="flex gap-4 items-start">
                      <div className="shrink-0 w-16 text-sm font-bold gradient-text">{m.year}</div>
                      <div className="flex-1">
                        <div className="w-2 h-2 rounded-full mb-2" style={{ background: 'var(--accent-primary)' }} />
                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{m.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="container-custom">
          <div className="glass-card p-10 md:p-14">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <AnimatedCounter end={150} suffix="+" label="Projects Delivered" />
              <AnimatedCounter end={50} suffix="+" label="Happy Clients" />
              <AnimatedCounter end={5} suffix="+" label="Years of Excellence" />
              <AnimatedCounter end={25} suffix="+" label="Team Members" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section aurora-bg">
        <div className="container-custom">
          <SectionHeading
            badge="Our Values"
            title='What <span class="gradient-text">Drives</span> Us'
            subtitle="The principles that guide every decision we make and every product we build."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 80}>
                <div className="glass-card p-7 h-full text-center group">
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            badge="Our Team"
            title='Meet the <span class="gradient-text">People</span> Behind HANGWARE'
            subtitle="A diverse team of talented professionals united by a passion for technology and innovation."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 80}>
                <div className="glass-card p-7 text-center group">
                  <div
                    className="w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white transition-transform duration-300 group-hover:scale-110"
                    style={{ background: 'var(--accent-gradient)' }}
                  >
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <div className="text-sm font-medium gradient-text mb-2">{member.role}</div>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{member.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section aurora-bg">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="mb-5">Want to Join Our <span className="gradient-text">Team?</span></h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              We&apos;re always looking for talented individuals who share our passion for building great products.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a href="/careers" className="btn-primary">View Open Positions</a>
              <a href="/contact" className="btn-secondary">Contact Us</a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
