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
    <section className="py-16 md:py-24 bg-white border-b border-blue-100">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 leading-tight">
            Why Choose Our Platform?
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            Get the best tax filing experience with our comprehensive features
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={feature.id + '-' + idx}
              className="group flex flex-col items-center bg-blue-50 border border-blue-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:scale-105 focus-within:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden"
              tabIndex={0}
            >
              <div className="mb-4">
                <span className="text-blue-600 group-hover:text-blue-500 group-focus:text-blue-500 transition-colors duration-200 text-5xl">
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2 text-center drop-shadow-sm group-hover:text-blue-700 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center text-sm group-hover:text-blue-500 transition-colors duration-300">
                {feature.description}
              </p>
              <span className="absolute -top-4 -right-4 w-12 h-12 bg-linear-to-br from-blue-200 to-yellow-100 rounded-full opacity-30 group-hover:scale-125 group-hover:opacity-50 transition-all duration-300 pointer-events-none"></span>
              <span className="absolute -bottom-4 -left-4 w-16 h-16 bg-linear-to-tr from-yellow-100 to-blue-200 rounded-full opacity-20 group-hover:scale-110 group-hover:opacity-40 transition-all duration-300 pointer-events-none"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
