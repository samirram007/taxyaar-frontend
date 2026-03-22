import { useState, useMemo } from 'react'
import brokerData from '../data/brokerSelection.json'
import brokerIconData from '../data/brokerIcons.json'

const resolveImageSrc = (imagePath?: string) => {
  if (!imagePath) {
    return ''
  }

  const normalizedPath = imagePath.replace(/^\//, '')
  return encodeURI(`${import.meta.env.BASE_URL}${normalizedPath}`)
}

interface BrokerSelectionProps {
  selectedBrokerId: number | null
  onSelectBroker: (brokerId: number) => void
}

export default function BrokerSelection({
  selectedBrokerId,
  onSelectBroker,
}: BrokerSelectionProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const brokers = useMemo(() => {
    return brokerData.brokers.map((broker) => ({
      ...broker,
      image:
        brokerIconData.brokerImageMap[
          broker.id as unknown as keyof typeof brokerIconData.brokerImageMap
        ],
    }))
  }, [])

  return (
    <div className="flex-1 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 px-4! md:px-8! py-3">
        <h2 className="!text-lg font-bold text-gray-800">
          {brokerData.header}
        </h2>
      </div>

      <div className="bg-white px-4! md:px-8! py-5! md:py-6!">
        <p className="text-gray-600 text-xs! mb-5 leading-relaxed font-normal">
          {brokerData.description}
        </p>
        <h3 className="text-xs! font-bold text-gray-800 mb-5 uppercase tracking-wider">
          {brokerData.sectionTitle}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
          {brokers.map((broker) => {
            const imageSrc = resolveImageSrc(broker.image)

            return (
              <button
                key={broker.id}
                onClick={() => onSelectBroker(broker.id)}
                onMouseEnter={() => setHoveredId(broker.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`rounded-xl border border-gray-200 bg-white px-4 py-4 flex flex-col items-center justify-between h-[118px] md:h-[124px] transition-all duration-200 ${
                  selectedBrokerId === broker.id
                    ? 'border-blue-500 shadow-md scale-[1.01]'
                    : 'shadow-sm'
                } ${hoveredId === broker.id ? 'shadow-md -translate-y-[1px]' : ''}`}
              >
                <div className="h-12 md:h-14 w-full flex items-center justify-center">
                  <img
                    src={imageSrc}
                    alt={broker.name}
                    className="max-h-12 md:max-h-14 max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="text-[15px] font-medium text-gray-800 text-center leading-snug mt-2">
                  {broker.name}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
