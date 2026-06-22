'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  end: number
  suffix?: string
  prefix?: string
  label: string
  duration?: number
}

export default function AnimatedCounter({ end, suffix = '', prefix = '', label, duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return

    let startTime: number | null = null
    let rafId: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * end))

      if (progress < 1) {
        rafId = requestAnimationFrame(animate)
      }
    }

    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [started, end, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <p className="text-sm font-medium" style={{ color: 'var(--text-tertiary)' }}>
        {label}
      </p>
    </div>
  )
}
