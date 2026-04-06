import React from 'react'

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

  return (
    <section className="!py-24 md:!py-32 bg-slate-100">
      <div className="container">
        <div className="!text-center !mb-20">
          <h2 className="!text-4xl md:!text-5xl !font-bold text-blue-600 !mb-6 !leading-tight">
            How It Works
          </h2>
          <p className="!text-lg md:!text-xl text-gray-700 !m-0 !p-0">
            Simple 4-step process to complete your tax filing
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="bg-white border-2 border-blue-600 rounded-2xl !p-8 !text-center relative hover:shadow-lg transition-all"
            >
              <div className="!text-5xl md:!text-6xl font-black text-blue-200 !mb-6 !leading-tight">
                {step.number}
              </div>
              <h3 className="!text-xl md:!text-lg !font-semibold text-blue-600 !mb-4 !leading-tight">
                {step.title}
              </h3>
              <p className="!text-sm md:!text-base text-gray-700 !m-0 !p-0">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 text-3xl text-orange-400 font-bold">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
