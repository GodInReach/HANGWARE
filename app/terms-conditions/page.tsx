import type { Metadata } from 'next'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'HANGWARE Terms and Conditions - the legal agreement governing the use of our services and website.',
}

export default function TermsConditionsPage() {
  return (
    <section className="section">
      <div className="container-custom max-w-3xl mx-auto">
        <ScrollReveal>
          <span className="badge mb-4 inline-flex">Legal</span>
          <h1 className="mb-4">Terms & <span className="gradient-text">Conditions</span></h1>
          <p className="text-sm mb-8" style={{ color: 'var(--text-tertiary)' }}>Last updated: June 1, 2025</p>
          <div className="divider-gradient mb-10" />
        </ScrollReveal>

        <div className="space-y-8">
          {[
            {
              title: '1. Acceptance of Terms',
              content: 'By accessing and using the HANGWARE website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should not use our services.',
            },
            {
              title: '2. Services',
              content: 'HANGWARE provides digital product engineering services including but not limited to software development, mobile app development, AI solutions, cloud services, UI/UX design, and consulting services. The specific scope of work for each project will be defined in a separate service agreement or statement of work.',
            },
            {
              title: '3. Intellectual Property',
              content: 'All intellectual property rights in the deliverables created by HANGWARE shall transfer to the client upon full payment, unless otherwise specified in the service agreement. HANGWARE retains the right to use general tools, frameworks, and methodologies developed during the project for future work.\n\nAll content on the HANGWARE website, including text, graphics, logos, and software, is the property of HANGWARE and is protected by intellectual property laws.',
            },
            {
              title: '4. Payment Terms',
              content: 'Payment terms will be specified in individual service agreements. Standard terms include:\n• An advance payment before project commencement\n• Milestone-based payments as specified in the project proposal\n• Final payment upon project delivery and acceptance\n• Late payments may incur interest at 1.5% per month',
            },
            {
              title: '5. Confidentiality',
              content: 'Both parties agree to maintain the confidentiality of all proprietary and sensitive information shared during the course of the engagement. This obligation survives the termination of any service agreement. A separate NDA may be executed upon request.',
            },
            {
              title: '6. Project Timeline',
              content: 'HANGWARE will make reasonable efforts to deliver projects within agreed timelines. However, timelines are estimates and may be affected by factors including but not limited to scope changes, client delays in providing feedback or approvals, and force majeure events.',
            },
            {
              title: '7. Limitation of Liability',
              content: 'HANGWARE shall not be liable for any indirect, incidental, special, or consequential damages arising out of or relating to our services. Our total liability shall not exceed the total amount paid by the client for the specific service giving rise to the claim.',
            },
            {
              title: '8. Warranty',
              content: 'HANGWARE provides a 30-day warranty period after project delivery during which we will fix any bugs or defects at no additional cost. This warranty does not cover issues arising from client modifications, third-party integrations not implemented by HANGWARE, or misuse of the delivered product.',
            },
            {
              title: '9. Termination',
              content: 'Either party may terminate a service agreement with 30 days written notice. Upon termination, the client shall pay for all work completed up to the date of termination. HANGWARE will deliver all completed work and documentation.',
            },
            {
              title: '10. Governing Law',
              content: 'These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in India.',
            },
            {
              title: '11. Changes to Terms',
              content: 'HANGWARE reserves the right to modify these terms at any time. Changes will be posted on this page with an updated date. Continued use of our services after changes constitutes acceptance of the modified terms.',
            },
            {
              title: '12. Contact',
              content: 'For questions about these Terms and Conditions, please contact us at:\n\nEmail: hello@hangware.in\nPhone: +91 98765 43210',
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
