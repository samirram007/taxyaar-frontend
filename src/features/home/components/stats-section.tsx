import React from 'react'

interface Stat {
  id: number
  number: string
  label: string
  suffix: string
}

const StatsSection: React.FC = () => {
  const stats: Stat[] = [
    {
      id: 1,
      number: '50',
      label: 'Thousand+',
      suffix: 'Filings Completed',
    },
    {
      id: 2,
      number: '4.7',
      label: 'Star',
      suffix: 'Rating',
    },
    {
      id: 3,
      number: '22',
      label: 'Thousand+',
      suffix: 'Happy Users',
    },
    {
      id: 4,
      number: '24/7',
      label: '',
      suffix: 'Customer Support',
    },
  ]

  return (
    <section className="!py-16 md:!py-24 bg-gradient-to-r from-sky-400 to-blue-600">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 !mt-12">
          {stats.map((stat) => (
            <div key={stat.id} className="!text-center text-white !py-8 !px-5">
              <div className="!text-5xl md:!text-6xl !font-black text-white !mb-4 !leading-tight">
                {stat.number}
              </div>
              <div className="flex flex-col !text-sm md:!text-base font-medium !gap-2">
                {stat.label && (
                  <span className="text-white !text-xs opacity-90">
                    {stat.label}
                  </span>
                )}
                <span className="text-white !m-0 !p-0 !font-semibold">
                  {stat.suffix}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
