import type { Metadata } from 'next'
import SectionHeading from '../components/SectionHeading'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join the HANGWARE team — explore open positions in development, design, AI, and more. Build the future of digital products with us.',
}

const benefits = [
  { icon: '🏠', title: 'Remote-First', desc: 'Work from anywhere. We believe in results, not office hours.' },
  { icon: '📚', title: 'Learning Budget', desc: '₹30,000/year for courses, conferences, and certifications.' },
  { icon: '⏰', title: 'Flexible Hours', desc: 'Set your own schedule. Core hours: 11 AM – 4 PM IST.' },
  { icon: '🏖️', title: 'Unlimited PTO', desc: 'Take the time you need. We trust our team to manage their rest.' },
  { icon: '💰', title: 'Competitive Pay', desc: 'Market-rate salaries with annual reviews and equity options.' },
  { icon: '🚀', title: 'Growth Path', desc: 'Clear career ladders and mentorship from senior engineers.' },
]

const openings = [
  { title: 'Senior Full Stack Developer', type: 'Full-time', location: 'Remote (India)', exp: '4+ years', desc: 'Build scalable web applications using React, Next.js, and Node.js. Lead technical decisions and mentor junior developers.' },
  { title: 'React Native Developer', type: 'Full-time', location: 'Remote (India)', exp: '2+ years', desc: 'Develop cross-platform mobile applications for our clients. Experience with Expo, navigation, and state management.' },
  { title: 'AI/ML Engineer', type: 'Full-time', location: 'Remote (India)', exp: '3+ years', desc: 'Build intelligent features using Python, TensorFlow, and LangChain. Work on NLP, computer vision, and automation projects.' },
  { title: 'UI/UX Designer', type: 'Full-time', location: 'Remote (India)', exp: '2+ years', desc: 'Create beautiful, user-centric designs for web and mobile. Proficiency in Figma, user research, and design systems.' },
  { title: 'DevOps Engineer', type: 'Full-time', location: 'Remote (India)', exp: '3+ years', desc: 'Manage cloud infrastructure, CI/CD pipelines, and monitoring. Experience with AWS, Docker, and Kubernetes.' },
  { title: 'Business Development Executive', type: 'Full-time', location: 'Hybrid', exp: '1+ years', desc: 'Generate leads, manage client relationships, and drive revenue growth. Strong communication and presentation skills.' },
]

export default function CareersPage() {
  return (
    <>
      <section className="section">
        <div className="container-custom text-center">
          <ScrollReveal>
            <span className="badge mb-4 inline-flex">Careers</span>
            <h1 className="mb-5">Build the Future <span className="gradient-text">With Us</span></h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Join a team of passionate builders creating technology that matters. 
              We&apos;re always looking for talented people who want to do their best work.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Culture */}
      <section className="section aurora-bg">
        <div className="container-custom">
          <SectionHeading
            badge="Why HANGWARE"
            title='Benefits & <span class="gradient-text">Perks</span>'
            subtitle="We take care of our team so they can take care of our clients."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 60}>
                <div className="glass-card p-6 text-center group">
                  <div className="text-3xl mb-3">{b.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            badge="Open Positions"
            title='Current <span class="gradient-text">Openings</span>'
            subtitle="Find your next role. We're hiring across engineering, design, and business."
          />
          <div className="space-y-4 max-w-3xl mx-auto">
            {openings.map((job, i) => (
              <ScrollReveal key={job.title} delay={i * 60}>
                <div className="glass-card p-6 group hover:border-[var(--card-hover-border)] transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="text-xs px-2 py-1 rounded-md" style={{ background: 'var(--badge-bg)', color: 'var(--badge-text)' }}>{job.type}</span>
                        <span className="text-xs px-2 py-1 rounded-md" style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'var(--text-tertiary)' }}>{job.location}</span>
                        <span className="text-xs px-2 py-1 rounded-md" style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'var(--text-tertiary)' }}>{job.exp}</span>
                      </div>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{job.desc}</p>
                    </div>
                    <a href={`mailto:careers@hangware.in?subject=Application: ${job.title}`} className="btn-primary shrink-0 text-sm !py-2.5">
                      Apply Now
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* General CTA */}
      <section className="section aurora-bg">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="mb-5">Don&apos;t See Your <span className="gradient-text">Role?</span></h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              We&apos;re always interested in meeting talented people. Send us your resume and tell us what excites you.
            </p>
            <a href="mailto:careers@hangware.in" className="btn-primary">Send Your Resume</a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
