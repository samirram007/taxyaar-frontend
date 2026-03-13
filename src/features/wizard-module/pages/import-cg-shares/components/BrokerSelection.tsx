import { useState, useMemo } from 'react'
import {
  SiMoneygram,
  SiChartdotjs,
  SiZerodha,
  SiAnilist,
  SiTradingview,
  SiIcicibank,
  SiBankofamerica,
  SiHsbc,
  SiBitcoin,
  SiEthereum,
  SiPaytm,
  SiSharex,
  SiCoinbase,
  SiAxisbank,
  SiGooglefit,
  SiEditorconfig,
  SiInterbase,
  SiRevanced,
  SiKodak,
  SiTrino,
  SiApple,
  SiArgo,
  SiKubernetes,
  SiQuest,
} from 'react-icons/si'
import brokerData from '../data/brokerSelection.json'
import brokerIconData from '../data/brokerIcons.json'

const iconMap: Record<string, any> = {
  SiMoneygram,
  SiChartdotjs,
  SiZerodha,
  SiAnilist,
  SiTradingview,
  SiIcicibank,
  SiBankofamerica,
  SiHsbc,
  SiBitcoin,
  SiEthereum,
  SiPaytm,
  SiSharex,
  SiCoinbase,
  SiAxisbank,
  SiGooglefit,
  SiEditorconfig,
  SiInterbase,
  SiRevanced,
  SiKodak,
  SiTrino,
  SiApple,
  SiArgo,
  SiKubernetes,
  SiQuest,
}

export default function BrokerSelection() {
  const [selected, setSelected] = useState<number | null>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const brokers = useMemo(() => {
    return brokerData.brokers.map((broker) => ({
      ...broker,
      Icon: iconMap[
        brokerIconData.brokerIconMap[
          broker.id as unknown as keyof typeof brokerIconData.brokerIconMap
        ]
      ],
      bgColor:
        brokerIconData.brokerColorMap[
          broker.id as unknown as keyof typeof brokerIconData.brokerColorMap
        ],
    }))
  }, [])

  return (
    <div className="flex-1 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 px-8! py-3">
        <h2 className="!text-lg font-bold text-gray-800">
          {brokerData.header}
        </h2>
      </div>

      <div className="bg-white px-8! py-6!">
        <p className="text-gray-600 text-xs! mb-5 leading-relaxed font-normal">
          {brokerData.description}
        </p>
        <h3 className="text-xs! font-bold text-gray-800 mb-5 uppercase tracking-wider">
          {brokerData.sectionTitle}
        </h3>
        <div className="grid grid-cols-4 gap-6">
          {brokers.map((broker) => {
            const IconComponent = broker.Icon
            return (
              <button
                key={broker.id}
                onClick={() => setSelected(broker.id)}
                onMouseEnter={() => setHoveredId(broker.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`flex flex-col items-center gap-3 p-3 transition-all duration-200 ${
                  selected === broker.id ? 'transform scale-105' : ''
                } ${hoveredId === broker.id ? 'transform scale-110' : ''}`}
              >
                <div
                  className={`w-16 h-16 rounded-lg flex items-center justify-center text-white shadow-sm transition-all duration-200 ${broker.bgColor} ${
                    hoveredId === broker.id ? 'shadow-lg' : ''
                  }`}
                >
                  <IconComponent size={28} />
                </div>
                <span className="text-xs font-semibold text-gray-700 text-center leading-snug">
                  {broker.name}
                </span>
              </button>
            )
          })}
        </div>
        ` `
      </div>
    </div>
  )
}
