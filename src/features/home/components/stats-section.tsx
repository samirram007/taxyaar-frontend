import React, { useEffect, useRef, useState } from 'react'

interface Stat {
  id: number
  number: string
  label: string
  suffix: string
}

const StatsSection: React.FC = () => {

  // Define the stats with their numeric targets and suffixes for animation
  const stats = [
    {
      value: 50000,
      display: '50K+',
      label: 'Filings Completed',
      suffix: 'K+',
      decimals: 0,
    },
    {
      value: 4.7,
      display: '4.7',
      label: 'Star Rating',
      suffix: '',
      decimals: 1,
    },
    {
      value: 22000,
      display: '22K+',
      label: 'Happy Users',
      suffix: 'K+',
      decimals: 0,
    },
    {
      value: 24,
      display: '24/7',
      label: 'Customer Support',
      suffix: '/7',
      decimals: 0,
    },
  ]

  // State for animated values
  const [counts, setCounts] = useState(stats.map(() => 0))
  const sectionRef = useRef<HTMLDivElement>(null)
  const animating = useRef(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    let raf: number
    let start: number | null = null
    const duration = 1200 // ms

    function animate(ts: number) {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      setCounts(
        stats.map((stat) => {
          if (stat.display === '24/7') return 24 // special case, just show 24
          return +(stat.value * progress).toFixed(stat.decimals)
        })
      )
      if (progress < 1) {
        raf = requestAnimationFrame(animate)
      } else {
        setCounts(stats.map((stat) => (stat.display === '24/7' ? 24 : stat.value)))
        animating.current = false
      }
    }

    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animating.current) {
          animating.current = true
          start = null
          raf = requestAnimationFrame(animate)
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(section)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
    // eslint-disable-next-line
  }, [])


  return (
    <section ref={sectionRef} className="w-full bg-blue-50 py-8 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center">
            <span className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-1">
              {stat.display === '24/7'
                ? `${counts[idx]}/7`
                : stat.suffix === 'K+' ? `${Math.floor(counts[idx] / 1000)}K+` : counts[idx].toLocaleString(undefined, { minimumFractionDigits: stat.decimals, maximumFractionDigits: stat.decimals })}
            </span>
            <span className="text-base md:text-lg text-blue-900 font-medium">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsSection
