'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={index}
            className="glass-card overflow-hidden"
            style={{ borderRadius: '14px' }}
          >
            <button
              id={`faq-${index}`}
              className="w-full flex items-center justify-between p-5 text-left transition-colors duration-300"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span
                className="font-semibold text-base pr-4"
                style={{ color: isOpen ? 'var(--accent-primary)' : 'var(--text-primary)' }}
              >
                {item.question}
              </span>
              <span
                className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300"
                style={{
                  background: isOpen ? 'var(--glow-color)' : 'transparent',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={isOpen ? 'var(--accent-primary)' : 'var(--text-tertiary)'}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>
            <div
              className="overflow-hidden transition-all duration-500"
              style={{
                maxHeight: isOpen ? '500px' : '0',
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div
                className="px-5 pb-5 text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {item.answer}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
