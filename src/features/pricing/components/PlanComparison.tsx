import { CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

type ComparisonColumn = {
  label: string
  included: boolean
}

type ComparisonRow = {
  feature: string
  columns: ComparisonColumn[]
}

type PlanComparisonProps = {
  heading: string
  tabs: string[]
  self: ComparisonRow[]
  assisted: ComparisonRow[]
}

const PlanComparison = ({
  heading,
  tabs,
  self,
  assisted,
}: PlanComparisonProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0])

  const rows = activeTab === tabs[0] ? self : assisted

  return (
    <section className="bg-[#f7fbff] px-4! py-20! sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-800 sm:text-[2rem]">
            {heading}
          </h2>

          <div className="mt-8! inline-flex rounded-[6px] border border-[#d6e4ff] bg-white p-1 shadow-[0_12px_30px_rgba(71,126,250,0.08)]">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={[
                  'rounded-[4px] px-5! py-2! text-sm font-semibold transition-colors',
                  activeTab === tab
                    ? 'bg-[#477efa] text-white'
                    : 'text-[#477efa] hover:bg-blue-50',
                ].join(' ')}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10! overflow-hidden rounded-[14px] border border-[#e6eefc] bg-white shadow-[0_24px_60px_rgba(71,126,250,0.08)]">
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-sm text-slate-600">
              <thead>
                <tr className="border-b border-[#edf2fb] bg-white text-slate-800">
                  <th className="min-w-[220px] px-6! py-4! text-left text-sm font-semibold">
                    &nbsp;
                  </th>
                  {rows[0]?.columns.map((col) => (
                    <th
                      key={col.label}
                      className="min-w-[150px] px-6! py-4! text-center text-sm font-semibold"
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={idx % 2 === 0 ? 'bg-[#f4f8ff]' : 'bg-white'}
                  >
                    <td className="px-6! py-4! font-medium text-slate-600">
                      {row.feature}
                    </td>
                    {row.columns.map((col) => (
                      <td
                        key={`${row.feature}-${col.label}`}
                        className="px-6! py-4!"
                      >
                        <div className="flex justify-center">
                          {col.included ? (
                            <CheckCircle2 className="h-4 w-4 text-[#69d5c3]" />
                          ) : (
                            <span className="h-4 w-4 rounded-full border border-slate-200" />
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlanComparison
