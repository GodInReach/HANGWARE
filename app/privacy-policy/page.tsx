import type { Metadata } from 'next'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'HANGWARE Privacy Policy - how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <section className="section">
      <div className="container-custom max-w-3xl mx-auto">
        <ScrollReveal>
          <span className="badge mb-4 inline-flex">Legal</span>
          <h1 className="mb-4">Privacy <span className="gradient-text">Policy</span></h1>
          <p className="text-sm mb-8" style={{ color: 'var(--text-tertiary)' }}>Last updated: June 1, 2025</p>
          <div className="divider-gradient mb-10" />
        </ScrollReveal>

        <div className="prose-custom space-y-8">
          {[
            {
              title: '1. Information We Collect',
              content: 'We collect information you provide directly to us, such as when you fill out a contact form, request a consultation, or communicate with us. This includes your name, email address, phone number, company name, and project details.\n\nWe also automatically collect certain information when you visit our website, including your IP address, browser type, device information, and pages visited.',
            },
            {
              title: '2. How We Use Your Information',
              content: 'We use the information we collect to:\n• Respond to your inquiries and provide consultation services\n• Send you project proposals and follow-up communications\n• Improve our website and services\n• Send periodic newsletters (only with your explicit consent)\n• Comply with legal obligations',
            },
            {
              title: '3. Information Sharing',
              content: 'We do not sell, trade, or rent your personal information to third parties. We may share your information only with:\n• Trusted service providers who assist us in operating our website and business (e.g., email service providers, analytics tools)\n• Legal authorities when required by law or to protect our rights',
            },
            {
              title: '4. Data Security',
              content: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.',
            },
            {
              title: '5. Cookies',
              content: 'Our website uses cookies to enhance your browsing experience. You can set your browser to refuse all or some browser cookies. However, if you disable cookies, some parts of our website may not function properly.',
            },
            {
              title: '6. Third-Party Links',
              content: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies.',
            },
            {
              title: '7. Your Rights',
              content: 'You have the right to:\n• Access the personal data we hold about you\n• Request correction of inaccurate data\n• Request deletion of your data\n• Opt out of marketing communications\n• Lodge a complaint with a supervisory authority',
            },
            {
              title: '8. Data Retention',
              content: 'We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements.',
            },
            {
              title: '9. Changes to This Policy',
              content: 'We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.',
            },
            {
              title: '10. Contact Us',
              content: 'If you have any questions about this privacy policy or our data practices, please contact us at:\n\nEmail: hello@hangware.in\nPhone: +91 98765 43210',
            },
          ].map((section, i) => (
            <ScrollReveal key={section.title} delay={i * 30}>
              <div>
                <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
                <div className="text-sm leading-relaxed whitespace-pre-line" style={{ color: 'var(--text-secondary)' }}>
                  {section.content}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
