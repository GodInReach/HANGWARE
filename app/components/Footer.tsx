import Link from 'next/link'

const footerServices = [
  { label: 'Full Stack Development', href: '/services' },
  { label: 'Mobile App Development', href: '/services' },
  { label: 'SaaS Development', href: '/services' },
  { label: 'AI & Automation', href: '/services' },
  { label: 'UI/UX Design', href: '/services' },
  { label: 'Cloud Solutions', href: '/services' },
]

const footerCompany = [
  { label: 'About Us', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

const footerLegal = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-conditions' },
]

const industries = [
  'Healthcare', 'Education', 'E-Commerce', 'Logistics', 'Finance', 'Startups',
]

export default function Footer() {
  return (
    <footer
      id="main-footer"
      style={{ background: 'var(--footer-bg)', position: 'relative', zIndex: 10 }}
    >
      {/* Aurora Divider */}
      <div
        style={{
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #0066ff, #00d4ff, #7c3aed, transparent)',
        }}
      />

      <div className="container-custom py-16 lg:py-20" >
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pt-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-lg"
                style={{ background: 'linear-gradient(135deg, #0066ff, #00d4ff)' }}
              >
                H
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                HANG<span style={{ background: 'linear-gradient(135deg, #00d4ff, #0066ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>WARE</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-sm" style={{ color: 'var(--footer-text)' }}>
              Engineering digital products that drive business growth. We help startups and businesses transform ideas into scalable digital solutions.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {['LinkedIn', 'Twitter', 'GitHub', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="social-icon-link w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-[#00d4ff] hover:text-[#00d4ff]"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'var(--footer-text)',
                  }}
                >
                  <span className="text-xs font-bold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Services</h4>
            <ul className="space-y-3">
              {footerServices.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-300 hover:text-[#00d4ff]"
                    style={{ color: 'var(--footer-text)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Company</h4>
            <ul className="space-y-3">
              {footerCompany.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-300 hover:text-[#00d4ff]"
                    style={{ color: 'var(--footer-text)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Get in Touch</h4>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--footer-text)' }}>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="#00d4ff" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>thehangware@gmail.com</span>
              </li>

              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="#00d4ff" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                <span>India</span>
              </li>
            </ul>

          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-14 py-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-sm" style={{ color: 'var(--footer-text)' }}>
            © {new Date().getFullYear()} HANGWARE. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLegal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm transition-colors duration-300 hover:text-[#00d4ff]"
                style={{ color: 'var(--footer-text)' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
