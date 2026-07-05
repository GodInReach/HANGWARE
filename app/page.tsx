import SectionHeading from './components/SectionHeading'
import AnimatedCounter from './components/AnimatedCounter'
import FAQAccordion from './components/FAQAccordion'
import ConsultationForm from './components/ConsultationForm'
import ScrollReveal from './components/ScrollReveal'

/* ─── Services Data ─── */
const services = [
  { icon: '⚡', title: 'Full Stack Web Development', desc: 'Modern, scalable, and high-performance web applications built with React, Next.js, Node.js, and cloud-native architecture.', primary: true },
  { icon: '📱', title: 'Mobile App Development', desc: 'Native and cross-platform mobile applications for Android, iOS, and the web using Flutter, React Native, and Swift.', primary: true },
  { icon: '☁️', title: 'SaaS Development', desc: 'End-to-end development of subscription-based software platforms with multi-tenancy, billing, and analytics.', primary: true },
  { icon: '🧠', title: 'AI & Automation Solutions', desc: 'AI-powered assistants, workflow automation, intelligent search, and machine learning integrations for smarter business.', primary: true },
  { icon: '🎨', title: 'UI/UX Design', desc: 'User-centric interfaces that improve engagement, conversions, and brand perception through research-driven design.', primary: true },
  { icon: '💻', title: 'Custom Software Development', desc: 'Tailored software solutions engineered to match your unique business requirements and operational workflows.', primary: true },

  { icon: '🔌', title: 'Hardware & IoT Solutions', desc: 'Custom IoT integrations, embedded systems, and smart device development for selected projects.', primary: true },
]

/* ─── Why Choose Data ─── */
const whyChoose = [
  { icon: '🎯', title: 'End-to-End Development', desc: 'From idea validation to deployment and maintenance - complete product lifecycle under one roof.' },
  { icon: '🏃', title: 'Startup-Friendly', desc: 'MVP development, rapid prototyping, and lean methodology designed for fast-moving startups.' },
  { icon: '🔧', title: 'Modern Tech Stack', desc: 'Built using industry-leading frameworks - React, Next.js, Flutter, Python, Node.js, AWS, and more.' },
  { icon: '📈', title: 'Scalable Architecture', desc: 'Solutions designed for future growth with microservices, cloud-native, and event-driven architecture.' },
  { icon: '🛡️', title: 'Dedicated Support', desc: 'Long-term maintenance, monitoring, updates, and a dedicated technical team for your project.' },
  { icon: '💡', title: 'Business-First Approach', desc: 'Technology aligned with real business outcomes, ROI-focused development, and growth-oriented strategy.' },
]

/* ─── Industries Data ─── */
const industries = [
  { icon: '🏥', name: 'Healthcare' },
  { icon: '🎓', name: 'Education' },
  { icon: '🛒', name: 'E-Commerce' },
  { icon: '🚛', name: 'Logistics' },
  { icon: '🏪', name: 'Retail' },
  { icon: '🏭', name: 'Manufacturing' },
  { icon: '🚀', name: 'Startups' },
  { icon: '💰', name: 'Finance' },
  { icon: '🏠', name: 'Real Estate' },
]

/* ─── Process Steps ─── */
const processSteps = [
  { step: '01', title: 'Discovery', desc: 'Understanding your business, goals, and requirements through in-depth consultation.' },
  { step: '02', title: 'Strategy', desc: 'Architecture planning, technology selection, and detailed project roadmap creation.' },
  { step: '03', title: 'Design', desc: 'UI/UX design with wireframes, prototypes, and user experience validation.' },
  { step: '04', title: 'Development', desc: 'Agile development with iterative sprints, code reviews, and continuous integration.' },
  { step: '05', title: 'Testing', desc: 'Comprehensive QA - unit testing, integration testing, performance, and security audits.' },
  { step: '06', title: 'Launch & Support', desc: 'Deployment, monitoring, maintenance, and ongoing technical support.' },
]


/* ─── Testimonials ─── */
const testimonials = [
  { name: 'Rajesh Sharma', role: 'CEO, TechVista Solutions', quote: 'HANGWARE delivered our SaaS platform 3 weeks ahead of schedule. Their technical expertise and communication were exceptional. The product scaled to 10,000 users without a hiccup.', rating: 5 },
  { name: 'Priya Mehta', role: 'Founder, EduLearn', quote: 'From concept to a fully functional ed-tech platform in 4 months. HANGWARE understood our vision perfectly and built exactly what we needed. Highly recommend for startups.', rating: 5 },
  { name: 'Anil Kapoor', role: 'CTO, LogiTrack', quote: 'The AI-powered route optimization system HANGWARE built reduced our delivery costs by 23%. Their automation solutions are genuinely transformative for operations.', rating: 5 },
  { name: 'Sneha Reddy', role: 'Director, HealthBridge', quote: 'Building a HIPAA-compliant healthcare platform was complex, but HANGWARE handled security, compliance, and UX brilliantly. Our patient satisfaction scores improved by 40%.', rating: 5 },
]

/* ─── FAQ Data ─── */
const faqItems = [
  { question: 'What types of projects does HANGWARE handle?', answer: 'We handle everything from MVPs and startup products to enterprise-grade applications. Our expertise spans web applications, mobile apps, SaaS platforms, AI solutions, cloud infrastructure, and business automation. Projects typically range from ₹50,000 to ₹50 Lakhs depending on complexity and scope.' },
  { question: 'How long does a typical project take?', answer: 'Project timelines vary based on complexity. A basic website takes 2-4 weeks, an MVP takes 6-10 weeks, and a full SaaS platform can take 3-6 months. We provide detailed timelines during our free consultation and use agile methodology for predictable delivery.' },
  { question: 'Do you work with startups and early-stage companies?', answer: 'Absolutely! We specialize in helping startups build their first products. We offer MVP development, rapid prototyping, and can help with technical architecture decisions. We understand startup constraints and offer flexible engagement models.' },
  { question: 'What technologies do you use?', answer: 'We use modern, industry-leading technologies including React, Next.js, Node.js, Python, Flutter, React Native, AWS, Google Cloud, PostgreSQL, MongoDB, and AI frameworks like TensorFlow and LangChain. We select the best stack for each project\'s specific needs.' },
  { question: 'Do you provide ongoing support after project delivery?', answer: 'Yes, we offer comprehensive maintenance and support packages including bug fixes, feature updates, performance monitoring, security patches, and 24/7 uptime monitoring. We believe in long-term partnerships, not just one-time projects.' },
  { question: 'How do you handle project communication?', answer: 'We use a combination of Slack, weekly video calls, project management tools (Jira/Linear), and detailed progress reports. You\'ll have a dedicated project manager and direct access to the development team throughout the project.' },
  { question: 'Can you help with legal and business setup for startups?', answer: 'Yes, through our trusted professional partners, we assist with company registration, GST registration, trademark guidance, privacy policy creation, NDA preparation, and other legal compliance requirements for startups.' },
  { question: 'What is your pricing model?', answer: 'We offer flexible pricing - fixed-price for well-defined projects, time & materials for evolving requirements, and dedicated team models for long-term engagements. We provide transparent estimates during our free consultation with no hidden costs.' },
]

/* ─── Featured Projects ─── */
const featuredProjects = [
  { title: 'EduLearn Platform', category: 'Ed-Tech SaaS', desc: 'A comprehensive learning management system serving 50,000+ students with live classes, AI-powered assessments, and analytics dashboards.', tags: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'], metric: '50K+ Users' },
  { title: 'LogiTrack AI', category: 'Logistics Automation', desc: 'AI-powered fleet management and route optimization system that reduced delivery costs by 23% for a leading logistics company.', tags: ['Python', 'TensorFlow', 'React', 'GCP'], metric: '23% Cost Reduction' },
  { title: 'HealthBridge Portal', category: 'Healthcare', desc: 'HIPAA-compliant patient management portal with telemedicine, prescription tracking, and real-time health monitoring integration.', tags: ['React', 'Node.js', 'MongoDB', 'AWS'], metric: '40% Satisfaction ↑' },
  { title: 'RetailPulse', category: 'E-Commerce', desc: 'Multi-vendor marketplace platform with AI product recommendations, inventory management, and payment gateway integration.', tags: ['Next.js', 'GraphQL', 'Redis', 'Stripe'], metric: '₹2Cr+ GMV' },
]

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1: HERO BANNER
         ═══════════════════════════════════════════ */}
      <section id="hero" className="relative w-full h-screen flex items-center">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 blur-3xl animate-float" style={{ background: 'radial-gradient(circle, #0066ff, transparent)' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-15 blur-3xl animate-float" style={{ background: 'radial-gradient(circle, #00d4ff, transparent)', animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">

            <ScrollReveal delay={100}>
              <div className="flex justify-center items-center w-full">
                <h1
                  className="mb-6 leading-tight text-center"
                  style={{ fontSize: 'clamp(3.5rem, 15vw, 12rem)' }}
                >
                  <span className="gradient-text">HANGWARE</span>
                </h1>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                We help startups and businesses transform innovative ideas into scalable,
                high-performance digital products. From concept to deployment - your trusted technology partner.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <a href="/contact" className="btn-primary text-base px-8 py-4">
                  Start Your Project
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </a>
                <a href="/portfolio" className="btn-secondary text-base px-8 py-4">
                  View Our Work
                </a>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: COMPANY INTRODUCTION
         ═══════════════════════════════════════════ */}
      <section id="about-intro" className="section aurora-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <span className="badge mb-4 inline-flex">About HANGWARE</span>
                <h2 className="mb-5">
                  A Technology Partner You Can <span className="gradient-text">Trust</span>
                </h2>
                <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                  HANGWARE is a technology company specializing in software development, AI-powered solutions,
                  and digital transformation services. We help startups, businesses, and organizations turn
                  innovative ideas into scalable products through modern technology.
                </p>
                <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                  From concept validation to deployment and maintenance, we provide complete end-to-end
                  product development services under one roof. Our team brings expertise across web, mobile,
                  AI, cloud, and business automation domains.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {['Agile Development', 'ISO Compliant', 'NDA Protected', '24/7 Support'].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                      <span style={{ color: 'var(--accent-primary)' }}>✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="glass-card p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-20 blur-2xl" style={{ background: 'var(--accent-primary)' }} />
                <div className="relative space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0" style={{ background: 'var(--badge-bg)' }}>🎯</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Our Mission</h4>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>To empower businesses with technology solutions that drive measurable growth and competitive advantage.</p>
                    </div>
                  </div>
                  <div className="divider" />
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0" style={{ background: 'var(--badge-bg)' }}>🔭</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Our Vision</h4>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>To become India&apos;s most trusted digital product engineering partner for startups and growing businesses.</p>
                    </div>
                  </div>
                  <div className="divider" />
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0" style={{ background: 'var(--badge-bg)' }}>💎</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Our Values</h4>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Transparency, quality, innovation, and a deep commitment to our clients&apos; success.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: SERVICES OVERVIEW
         ═══════════════════════════════════════════ */}
      <section id="services" className="section">
        <div className="container-custom">
          <SectionHeading
            badge="Our Services"
            title='What We <span class="gradient-text">Build</span>'
            subtitle="Comprehensive digital product engineering services covering the full spectrum of modern technology."
          />

          {/* Primary Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.filter(s => s.primary).map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 60}>
                <div className="glass-card p-6 h-full group cursor-pointer">
                  <div className="text-3xl mb-4 transition-transform duration-300 group-hover:scale-110">{service.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{service.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>


        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4: WHY CHOOSE HANGWARE
         ═══════════════════════════════════════════ */}
      <section id="why-choose" className="section aurora-bg">
        <div className="container-custom">
          <SectionHeading
            badge="Why HANGWARE"
            title='Why <span class="gradient-text">Choose Us?</span>'
            subtitle="We combine technical excellence with business understanding to deliver solutions that matter."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="glass-card p-7 h-full text-center group">
                  <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:animate-float">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5: FEATURED PROJECTS  ##HIDDEN
         ═══════════════════════════════════════════ */}
      <section id="featured-projects" className="section" hidden>
        <div className="container-custom">
          <SectionHeading
            badge="Portfolio"
            title='Featured <span class="gradient-text">Projects</span>'
            subtitle="Real solutions we've built for real businesses. Each project reflects our commitment to quality and innovation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 100}>
                <div className="glass-card p-7 h-full group cursor-pointer relative overflow-hidden">
                  {/* Hover glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" style={{ background: 'var(--accent-primary)' }} />

                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <span className="badge">{project.category}</span>
                      <span className="text-sm font-bold gradient-text">{project.metric}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm mb-5" style={{ color: 'var(--text-secondary)' }}>{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full font-medium"
                          style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'var(--text-tertiary)' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={100}>
            <div className="text-center mt-10">
              <a href="/portfolio" className="btn-secondary">
                View All Projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          SECTION 7: DEVELOPMENT PROCESS
         ═══════════════════════════════════════════ */}
      <section id="process" className="section">
        <div className="container-custom">
          <SectionHeading
            badge="Our Process"
            title='How We <span class="gradient-text">Work</span>'
            subtitle="A proven, transparent development process that ensures quality delivery every time."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 100}>
                <div className="glass-card p-7 h-full relative group">
                  <div
                    className="text-5xl font-black mb-4 opacity-10 group-hover:opacity-25 transition-opacity"
                    style={{ color: 'var(--accent-primary)' }}
                  >
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>



      {/* ═══════════════════════════════════════════
          SECTION 9: TESTIMONIALS  ## HIDDEN
         ═══════════════════════════════════════════ */}
      <section id="testimonials" className="section" hidden>
        <div className="container-custom">
          <SectionHeading
            badge="Client Testimonials"
            title='What Our Clients <span class="gradient-text">Say</span>'
            subtitle="Real feedback from businesses we've helped grow through technology."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 100}>
                <div className="glass-card p-7 h-full relative">
                  {/* Quote mark */}
                  <div className="absolute top-4 right-6 text-5xl opacity-10 font-serif" style={{ color: 'var(--accent-primary)' }}>&ldquo;</div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span key={j} className="text-yellow-400 text-sm">★</span>
                    ))}
                  </div>

                  <p className="text-sm leading-relaxed mb-5 italic" style={{ color: 'var(--text-secondary)' }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white"
                      style={{ background: 'var(--accent-gradient)' }}
                    >
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{t.name}</div>
                      <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          SECTION 11: FAQ
         ═══════════════════════════════════════════ */}
      <section id="faq" className="section">
        <div className="container-custom">
          <SectionHeading
            badge="FAQ"
            title='Frequently Asked <span class="gradient-text">Questions</span>'
            subtitle="Got questions? We've got answers. Here are the most common things our clients ask us."
          />

          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 12: CONTACT CTA
         ═══════════════════════════════════════════ */}
      <section id="contact-cta" className="section aurora-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <div>
                <span className="badge mb-4 inline-flex">Get Started</span>
                <h2 className="mb-5">
                  Ready to Build Your{' '}
                  <span className="gradient-text">Next Product?</span>
                </h2>
                <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
                  Whether you&apos;re a startup with a game-changing idea or an enterprise looking to modernize -
                  we&apos;re here to help. Book a free consultation and let&apos;s discuss how we can bring your vision to life.
                </p>

                <div className="space-y-4">
                  {[
                    { icon: '📧', label: 'Email', value: 'thehangware@gmail.com' },

                    { icon: '📍', label: 'Location', value: 'India' },
                  ].map((contact) => (
                    <div key={contact.label} className="flex items-center gap-3">
                      <span className="text-xl">{contact.icon}</span>
                      <div>
                        <div className="text-xs font-medium" style={{ color: 'var(--text-tertiary)' }}>{contact.label}</div>
                        <div className="text-sm font-semibold">{contact.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="glass-card p-8">
                <h3 className="text-xl font-semibold mb-6">Book Free Consultation</h3>
                <ConsultationForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
