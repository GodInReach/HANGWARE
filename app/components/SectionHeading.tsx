'use client'

import { useEffect, useRef } from 'react'

interface SectionHeadingProps {
  badge?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeading({ badge, title, subtitle, centered = true, light = false }: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          observer.unobserve(el)
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal mb-14 ${centered ? 'text-center' : ''}`}
    >
      {badge && (
        <span className="badge mb-4 inline-flex">{badge}</span>
      )}
      <h2
        className="mb-4"
        style={{ color: light ? '#ffffff' : 'var(--text-primary)' }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p
          className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''}`}
          style={{ color: light ? 'rgba(255,255,255,0.7)' : 'var(--text-secondary)' }}
        >
          {subtitle}
        </p>
      )}
      {/* Gradient underline */}
      <div
        className={`mt-5 h-1 w-20 rounded-full ${centered ? 'mx-auto' : ''}`}
        style={{ background: 'var(--accent-gradient)' }}
      />
    </div>
  )
}
