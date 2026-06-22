'use client'

import { useEffect, useRef, useCallback } from 'react'

interface Digit {
  x: number
  y: number
  value: string
  speed: number
  opacity: number
  baseOpacity: number
  size: number
  layer: number
  brightness: number
  targetBrightness: number
  offsetX: number
  offsetY: number
  targetOffsetX: number
  targetOffsetY: number
  pulsePhase: number
}

export default function BinaryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000, prevX: -1000, prevY: -1000, speed: 0 })
  const digitsRef = useRef<Digit[]>([])
  const animFrameRef = useRef<number>(0)
  const pulseTimeRef = useRef(0)
  const lastTimeRef = useRef(0)

  const INTERACTION_RADIUS = 180
  const REPEL_STRENGTH = 25
  const GLOW_INTENSITY = 2.5
  const DIGIT_COUNT_FACTOR = 0.00015 // digits per pixel² of screen area

  const initDigits = useCallback((width: number, height: number) => {
    const area = width * height
    const count = Math.min(Math.floor(area * DIGIT_COUNT_FACTOR), 2500)
    const digits: Digit[] = []

    for (let i = 0; i < count; i++) {
      const layer = Math.random() < 0.3 ? 0 : Math.random() < 0.6 ? 1 : 2
      const layerScale = [0.6, 0.8, 1.0][layer]
      const baseOpacity = [0.08, 0.14, 0.22][layer]

      digits.push({
        x: Math.random() * width,
        y: Math.random() * height,
        value: Math.random() > 0.5 ? '1' : '0',
        speed: (0.15 + Math.random() * 0.4) * layerScale,
        opacity: baseOpacity,
        baseOpacity,
        size: (10 + Math.random() * 6) * layerScale,
        layer,
        brightness: 0,
        targetBrightness: 0,
        offsetX: 0,
        offsetY: 0,
        targetOffsetX: 0,
        targetOffsetY: 0,
        pulsePhase: Math.random() * Math.PI * 2,
      })
    }

    digitsRef.current = digits
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      ctx.scale(dpr, dpr)
      initDigits(window.innerWidth, window.innerHeight)
    }

    resize()
    window.addEventListener('resize', resize)

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const m = mouseRef.current
      m.prevX = m.x
      m.prevY = m.y
      m.x = e.clientX
      m.y = e.clientY
      m.speed = Math.sqrt((m.x - m.prevX) ** 2 + (m.y - m.prevY) ** 2)
    }

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000
      mouseRef.current.y = -1000
      mouseRef.current.speed = 0
    }

    // Touch support
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0]
        const m = mouseRef.current
        m.prevX = m.x
        m.prevY = m.y
        m.x = touch.clientX
        m.y = touch.clientY
        m.speed = Math.sqrt((m.x - m.prevX) ** 2 + (m.y - m.prevY) ** 2)
      }
    }

    const handleTouchEnd = () => {
      mouseRef.current.x = -1000
      mouseRef.current.y = -1000
      mouseRef.current.speed = 0
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    window.addEventListener('touchend', handleTouchEnd)

    // Animation loop
    const animate = (timestamp: number) => {
      const deltaTime = timestamp - lastTimeRef.current
      lastTimeRef.current = timestamp
      const dt = Math.min(deltaTime / 16.667, 3) // normalize to ~60fps, cap at 3x

      pulseTimeRef.current += 0.008 * dt

      const width = window.innerWidth
      const height = window.innerHeight
      const mouse = mouseRef.current

      ctx.clearRect(0, 0, width, height)

      const digits = digitsRef.current

      for (let i = 0; i < digits.length; i++) {
        const d = digits[i]

        // Move downward
        d.y += d.speed * dt
        if (d.y > height + 20) {
          d.y = -20
          d.x = Math.random() * width
          d.value = Math.random() > 0.5 ? '1' : '0'
        }

        // Calculate distance to cursor
        const dx = d.x + d.offsetX - mouse.x
        const dy = d.y + d.offsetY - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        // Brightness interaction
        if (dist < INTERACTION_RADIUS) {
          const proximity = 1 - dist / INTERACTION_RADIUS
          const curveProximity = proximity * proximity // quadratic falloff
          d.targetBrightness = curveProximity * GLOW_INTENSITY

          // Repulsion
          const angle = Math.atan2(dy, dx)
          const repelForce = curveProximity * REPEL_STRENGTH
          d.targetOffsetX = Math.cos(angle) * repelForce
          d.targetOffsetY = Math.sin(angle) * repelForce
        } else {
          d.targetBrightness = 0
          d.targetOffsetX = 0
          d.targetOffsetY = 0
        }

        // Smooth interpolation
        const lerpSpeed = 0.08 * dt
        d.brightness += (d.targetBrightness - d.brightness) * lerpSpeed
        d.offsetX += (d.targetOffsetX - d.offsetX) * lerpSpeed * 1.5
        d.offsetY += (d.targetOffsetY - d.offsetY) * lerpSpeed * 1.5

        // Pulse effect on some digits
        const pulse = Math.sin(pulseTimeRef.current + d.pulsePhase) * 0.03

        // Calculate final opacity
        const finalOpacity = Math.min(
          d.baseOpacity + d.brightness * 0.6 + pulse,
          1.0
        )

        // Draw
        const drawX = d.x + d.offsetX
        const drawY = d.y + d.offsetY

        // Glow effect for bright digits
        if (d.brightness > 0.1) {
          const glowAlpha = d.brightness * 0.3
          ctx.shadowColor = `rgba(0, 212, 255, ${glowAlpha})`
          ctx.shadowBlur = d.brightness * 20
        } else {
          ctx.shadowColor = 'transparent'
          ctx.shadowBlur = 0
        }

        // Color: interpolate between dim gray and bright cyan
        const r = Math.round(100 + d.brightness * 155)
        const g = Math.round(120 + d.brightness * 92)
        const b = Math.round(140 + d.brightness * 115)

        ctx.font = `${d.size}px "JetBrains Mono", monospace`
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${finalOpacity})`
        ctx.fillText(d.value, drawX, drawY)
      }

      // Reset shadow for performance
      ctx.shadowColor = 'transparent'
      ctx.shadowBlur = 0

      animFrameRef.current = requestAnimationFrame(animate)
    }

    animFrameRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [initDigits])

  return (
    <canvas
      ref={canvasRef}
      id="binary-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  )
}
