import type { Metadata } from 'next'
import Link from 'next/link'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights, tutorials, and thought leadership from the HANGWARE team on software development, AI, SaaS, and digital transformation.',
}

const featuredPost = {
  slug: 'building-scalable-saas-2025',
  title: 'The Complete Guide to Building Scalable SaaS Products in 2025',
  excerpt: 'Everything you need to know about architecture, tech stack, pricing models, and go-to-market strategy for modern SaaS products.',
  category: 'SaaS',
  date: 'June 15, 2025',
  readTime: '12 min read',
}

const posts = [
  { slug: 'nextjs-vs-react', title: 'Next.js vs React: When to Use What in 2025', excerpt: 'A practical comparison of Next.js and vanilla React for different project types and scales.', category: 'Web Development', date: 'June 10, 2025', readTime: '8 min' },
  { slug: 'ai-business-automation', title: 'How AI is Transforming Business Automation', excerpt: 'Real-world examples of AI-powered automation saving businesses time and money.', category: 'AI & Automation', date: 'June 5, 2025', readTime: '10 min' },
  { slug: 'startup-mvp-guide', title: 'Building Your Startup MVP: A Technical Founder\'s Guide', excerpt: 'From idea validation to launch — the technical decisions that make or break your MVP.', category: 'Startups', date: 'May 28, 2025', readTime: '15 min' },
  { slug: 'flutter-vs-react-native', title: 'Flutter vs React Native: The 2025 Comparison', excerpt: 'An honest comparison of the two most popular cross-platform mobile frameworks.', category: 'Mobile Development', date: 'May 20, 2025', readTime: '9 min' },
  { slug: 'cloud-cost-optimization', title: '10 AWS Cost Optimization Strategies That Actually Work', excerpt: 'Practical tips to reduce your cloud bills without sacrificing performance or reliability.', category: 'Cloud', date: 'May 15, 2025', readTime: '7 min' },
  { slug: 'ui-ux-conversion', title: 'UI/UX Design Principles That Increase Conversions by 40%', excerpt: 'Data-backed design patterns and techniques that turn visitors into customers.', category: 'Design', date: 'May 10, 2025', readTime: '11 min' },
]

export default function BlogPage() {
  return (
    <>
      <section className="section">
        <div className="container-custom text-center">
          <ScrollReveal>
            <span className="badge mb-4 inline-flex">Blog</span>
            <h1 className="mb-5">Insights & <span className="gradient-text">Articles</span></h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Practical insights on software development, AI, design, and building successful digital products.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-sm">
        <div className="container-custom">
          <ScrollReveal>
            <Link href={`/blog/${featuredPost.slug}`}>
              <div className="glass-card p-8 md:p-10 group cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 w-60 h-60 rounded-full opacity-10 blur-3xl" style={{ background: 'var(--accent-primary)' }} />
                <div className="relative max-w-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="badge">{featuredPost.category}</span>
                    <span className="text-sm" style={{ color: 'var(--text-tertiary)' }}>Featured</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-3 group-hover:text-[var(--accent-primary)] transition-colors">{featuredPost.title}</h2>
                  <p className="text-base mb-4" style={{ color: 'var(--text-secondary)' }}>{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-3 text-sm" style={{ color: 'var(--text-tertiary)' }}>
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Post Grid */}
      <section className="section-sm aurora-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 60}>
                <Link href={`/blog/${post.slug}`}>
                  <div className="glass-card p-6 h-full group cursor-pointer">
                    <span className="badge text-xs mb-3 inline-flex">{post.category}</span>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--accent-primary)] transition-colors">{post.title}</h3>
                    <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-tertiary)' }}>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section">
        <div className="container-custom text-center">
          <ScrollReveal>
            <div className="glass-card p-10 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold mb-3">Stay <span className="gradient-text">Updated</span></h2>
              <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
                Get the latest articles on tech, development, and business growth delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input type="email" placeholder="your@email.com" className="input-field flex-1" />
                <button className="btn-primary shrink-0">Subscribe</button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
