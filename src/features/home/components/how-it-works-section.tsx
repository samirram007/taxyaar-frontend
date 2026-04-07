import React, { useEffect, useRef, useState } from 'react'

interface Step {
  id: number
  number: string
  title: string
  description: string
}

const HowItWorksSection: React.FC = () => {
  const steps: Step[] = [
    {
      id: 1,
      number: '01',
      title: 'Sign Up',
      description: 'Create your account in just a few clicks',
    },
    {
      id: 2,
      number: '02',
      title: 'Provide Details',
      description: 'Fill in your tax information step by step',
    },
    {
      id: 3,
      number: '03',
      title: 'Review & Verify',
      description: 'Review your filing and verify all details',
    },
    {
      id: 4,
      number: '04',
      title: 'Submit & Done',
      description: 'Submit your return and get confirmation',
    },
  ]

  // Animation state
  const [animate, setAnimate] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    let timeout1: NodeJS.Timeout, timeout2: NodeJS.Timeout
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setFadeOut(true)
          setAnimate(false)
          // Fade out, then fade in
          timeout1 = setTimeout(() => {
            setFadeOut(false)
            timeout2 = setTimeout(() => setAnimate(true), 320)
          }, 400) // fade out duration
        } else {
          setAnimate(false)
          setFadeOut(false)
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(section)
    return () => {
      observer.disconnect()
      clearTimeout(timeout1)
      clearTimeout(timeout2)
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-slate-100">
      <div className="container mx-auto ">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6 leading-tight">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-gray-700 m-0 p-0">
            Simple 4-step process to complete your tax filing
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {steps.map((step, index) => {
            // Animation classes for each card
            let anim = ''
            if (fadeOut) {
              anim = 'animate-fade-out'
            } else if (animate) {
              anim = 'animate-slide-in-left'
            }
            return (
              <div
                key={step.id}
                className={`bg-white border-2 border-blue-600 rounded-2xl p-8 text-center relative hover:shadow-lg transition-all duration-700 ${anim}`}
                style={{
                  animationDelay: fadeOut
                    ? `${index * 0.1}s`
                    : animate
                      ? `${index * 0.26 + 0.32}s`
                      : '0s',
                  animationFillMode: 'both',
                }}
              >
                <div className="text-5xl md:text-6xl font-black text-blue-200 mb-6 leading-tight">
                  {step.number}
                </div>
                <h3 className="text-xl md:text-lg font-semibold text-blue-600 mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-gray-700 m-0 p-0">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <>
                    {/* Desktop arrow */}
                    <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 text-4xl text-blue-400 font-bold">
                      <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><path d="M8 18h20m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    {/* Mobile arrow */}
                    <div className="block lg:hidden absolute left-1/2 -bottom-6 -translate-x-1/2 text-4xl text-blue-400 font-bold">
                      <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><path d="M18 8v20m0 0-6-6m6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
      <style>{`
        @keyframes slide-in-left {
          0% { opacity: 0; transform: translateX(-60px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-out {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
        .animate-slide-in-left { animation: slide-in-left 0.7s cubic-bezier(0.4,0,0.2,1) both; }
        .animate-fade-out { animation: fade-out 0.4s cubic-bezier(0.4,0,0.2,1) both; }
        @media (max-width: 1023px) {
          @keyframes slide-in-left {
            0% { opacity: 0; transform: translateY(-60px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        }
      `}</style>
    </section>
  )
}

export default HowItWorksSection
