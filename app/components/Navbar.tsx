'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from './ThemeProvider'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/#process', label: 'Process' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav
        id="main-nav"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 rounded-2xl md:rounded-full py-2 px-3 md:px-4 shadow-2xl transition-all duration-500 w-max max-w-[95vw]"
        style={{
          background: 'rgba(var(--nav-bg-rgb), 0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid var(--nav-border)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3), 0 0 20px var(--glow-color)',
        }}
      >
        <div className="flex items-center gap-4 md:gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0" id="nav-logo">
            <div className="relative">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-white text-md"
                style={{ background: 'var(--accent-gradient)' }}
              >
                H
              </div>
              <div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'var(--accent-gradient)', filter: 'blur(10px)' }}
              />
            </div>
            <span className="text-lg font-bold tracking-tight hidden sm:inline-block" style={{ color: 'var(--text-primary)' }}>
              HANG<span className="gradient-text">WARE</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 border-x border-[var(--divider)] px-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-300 hover:bg-[var(--glow-color)]"
                style={{ color: 'var(--text-secondary)' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 lg:gap-3 shrink-0">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              id="theme-toggle"
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
              }}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            {/* CTA Button */}
            <Link href="/contact" className="btn-primary text-[10px] md:text-xs !py-2 !px-3 md:!px-4 whitespace-nowrap" id="nav-cta">
              Book <span className="hidden sm:inline">Consultation</span>
            </Link>

            {/* Mobile Menu Button - Shown only on small screens for links */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 rounded-lg flex flex-col items-center justify-center gap-1 transition-all"
              style={{
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
              }}
              id="mobile-menu-toggle"
              aria-label="Toggle mobile menu"
            >
              <span
                className="block w-4 h-0.5 rounded-full transition-all duration-300"
                style={{
                  background: 'var(--text-primary)',
                  transform: mobileOpen ? 'rotate(45deg) translate(2px, 2px)' : 'none',
                }}
              />
              <span
                className="block w-4 h-0.5 rounded-full transition-all duration-300"
                style={{
                  background: 'var(--text-primary)',
                  opacity: mobileOpen ? 0 : 1,
                }}
              />
              <span
                className="block w-4 h-0.5 rounded-full transition-all duration-300"
                style={{
                  background: 'var(--text-primary)',
                  transform: mobileOpen ? 'rotate(-45deg) translate(2px, -2px)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        style={{ background: 'var(--overlay)' }}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 bottom-0 z-40 w-80 max-w-[85vw] transition-transform duration-500 lg:hidden overflow-y-auto`}
        style={{
          background: 'var(--bg-primary)',
          borderLeft: '1px solid var(--glass-border)',
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        <div className="p-6 pt-20">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-base font-medium rounded-xl transition-all duration-300"
                style={{ color: 'var(--text-secondary)' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-6 pt-6" style={{ borderTop: '1px solid var(--divider)' }}>
            <Link
              href="/contact"
              className="btn-primary w-full text-center"
              onClick={() => setMobileOpen(false)}
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
