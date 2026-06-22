import ScrollReveal from '../../components/ScrollReveal'

const blogContent: Record<string, { title: string; category: string; date: string; readTime: string; content: string[] }> = {
  'building-scalable-saas-2025': {
    title: 'The Complete Guide to Building Scalable SaaS Products in 2025',
    category: 'SaaS', date: 'June 15, 2025', readTime: '12 min read',
    content: [
      'Building a SaaS product in 2025 is fundamentally different from even a few years ago. The landscape has evolved with AI-native capabilities, edge computing, and increasingly sophisticated user expectations.',
      'In this comprehensive guide, we\'ll walk through the critical decisions you need to make — from architecture and tech stack to pricing models and go-to-market strategy.',
      '## Choosing Your Architecture\n\nThe multi-tenant architecture remains the gold standard for SaaS products. It allows you to serve multiple customers from a single codebase while maintaining data isolation and customization options.',
      'We recommend starting with a monolithic application and evolving toward microservices as your user base and team grow. Premature optimization kills more startups than technical debt.',
      '## Tech Stack Recommendations\n\nFor most SaaS products, we recommend: Next.js for the frontend, Node.js or Python for the backend, PostgreSQL for your primary database, Redis for caching, and AWS or GCP for infrastructure.',
      '## Monetization Strategy\n\nThe most successful SaaS products in 2025 use a combination of usage-based and seat-based pricing. This aligns your revenue with customer value and reduces churn.',
    ],
  },
  'nextjs-vs-react': {
    title: 'Next.js vs React: When to Use What in 2025',
    category: 'Web Development', date: 'June 10, 2025', readTime: '8 min read',
    content: [
      'The React ecosystem has matured significantly, and the question of whether to use Next.js or vanilla React (with Vite or similar) comes down to your specific project needs.',
      '## When to Choose Next.js\n\nNext.js is ideal when you need: server-side rendering for SEO, file-based routing, built-in API routes, image optimization, and a production-ready framework out of the box.',
      '## When to Choose Vanilla React\n\nVanilla React (with Vite) makes more sense for: single-page applications behind authentication, internal tools, dashboards where SEO doesn\'t matter, and when you want maximum flexibility.',
      'The key insight is that Next.js is React — it\'s not a replacement but an enhancement. If you\'re building anything user-facing where performance and SEO matter, Next.js is the safer bet.',
    ],
  },
}

// Fallback content for dynamic slugs
const fallbackPost = {
  title: 'Blog Post',
  category: 'Technology', date: 'May 2025', readTime: '8 min read',
  content: [
    'This blog post is coming soon. Our team is working on creating insightful content about software development, AI, and digital transformation.',
    'In the meantime, check out our other articles or contact us to discuss your project.',
  ],
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogContent[slug] || { ...fallbackPost, title: slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) }

  return (
    <article className="section">
      <div className="container-custom max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="badge">{post.category}</span>
              <span className="text-sm" style={{ color: 'var(--text-tertiary)' }}>{post.date}</span>
              <span className="text-sm" style={{ color: 'var(--text-tertiary)' }}>• {post.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <div className="divider-gradient" />
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {post.content.map((paragraph, i) => (
            <ScrollReveal key={i} delay={i * 50}>
              {paragraph.startsWith('## ') ? (
                <h2 className="text-2xl font-semibold mt-8 mb-4">{paragraph.replace('## ', '')}</h2>
              ) : (
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{paragraph}</p>
              )}
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={100}>
          <div className="mt-12 glass-card p-8 text-center">
            <h3 className="text-xl font-semibold mb-3">Need Help Building Your <span className="gradient-text">Product?</span></h3>
            <p className="text-sm mb-5" style={{ color: 'var(--text-secondary)' }}>
              Our team can help you bring your ideas to life with modern technology.
            </p>
            <a href="/contact" className="btn-primary">Get in Touch</a>
          </div>
        </ScrollReveal>
      </div>
    </article>
  )
}
