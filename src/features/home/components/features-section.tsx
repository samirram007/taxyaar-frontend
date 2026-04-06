import React from 'react'
import { Zap, Shield, Headphones, RefreshCw } from 'lucide-react'

interface Feature {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      title: 'Quick Filing',
      description:
        'Complete your tax return in minutes with our guided process',
      icon: <Zap size={48} />,
    },
    {
      id: 2,
      title: 'Secure & Safe',
      description: '100% secured filing with bank-level encryption',
      icon: <Shield size={48} />,
    },
    {
      id: 3,
      title: 'Expert Support',
      description: 'Get help from tax experts when you need it',
      icon: <Headphones size={48} />,
    },
    {
      id: 4,
      title: 'Always Updated',
      description: 'Latest tax rules and regulations included',
      icon: <RefreshCw size={48} />,
    },
  ]

  return (
    <section className="!py-24 md:!py-32 bg-white">
      <div className="container">
        <div className="!text-center !mb-20">
          <h2 className="!text-4xl md:!text-5xl !font-bold text-blue-600 !mb-6 !leading-tight">
            Why Choose Our Platform?
          </h2>
          <p className="!text-lg md:!text-xl text-gray-700 !m-0 !p-0">
            Get the best tax filing experience with our comprehensive features
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-gradient-to-b from-white to-slate-50 border-2 border-gray-300 rounded-2xl !p-8 hover:border-blue-600 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer"
            >
              <div className="text-5xl text-blue-600 !mb-6">{feature.icon}</div>
              <h3 className="!text-2xl md:!text-xl !font-semibold text-blue-600 !mb-4 !leading-tight">
                {feature.title}
              </h3>
              <p className="!text-base text-gray-700 leading-relaxed !m-0 !p-0">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
