import { CheckCircle2 } from 'lucide-react'
import { Link } from '@tanstack/react-router'

type PlanCardProps = {
  name: string
  price: string
  subtitle: string
  description: string
  features: string[]
  emphasized?: boolean
}

const PlanCard = ({
  name,
  price,
  subtitle,
  description,
  features,
  emphasized = false,
}: PlanCardProps) => {
  return (
    <article
      className={[
        'rounded-[8px] border px-6! py-8! text-center shadow-[0_22px_40px_rgba(15,23,42,0.06)] sm:px-10 sm:py-10',
        emphasized
          ? 'border-[#3b7cff] bg-[#3b7cff] text-white'
          : 'border-slate-100 bg-white text-slate-800',
      ].join(' ')}
    >
      <div className="text-5xl font-semibold tracking-[-0.04em]">
        <span className="mr-1 align-top text-2xl">₹</span>
        {price}
      </div>

      <p
        className={[
          'mt-3! text-xs font-medium',
          emphasized ? 'text-blue-100' : 'text-slate-400',
        ].join(' ')}
      >
        ({subtitle})
      </p>

      <h2 className="mt-5! text-2xl font-semibold tracking-[-0.03em]">
        {name}
      </h2>

      <p
        className={[
          'mt-2! text-sm',
          emphasized ? 'text-blue-100' : 'text-slate-500',
        ].join(' ')}
      >
        {description}
      </p>

      <ul className="mx-auto mt-7! flex max-w-xs flex-col gap-3 text-left text-sm font-medium">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <CheckCircle2
              className={[
                'h-4 w-4 shrink-0',
                emphasized ? 'text-white' : 'text-[#5d94ff]',
              ].join(' ')}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        to="/sign-up"
        className={[
          'mt-8! inline-flex min-h-12 w-full items-center justify-center rounded-[4px] border text-sm font-semibold transition-colors sm:w-[86%]',
          emphasized
            ? 'border-white bg-white text-slate-800 hover:bg-slate-100'
            : 'border-transparent bg-white text-[#487dfb] shadow-[0_10px_20px_rgba(59,124,255,0.12)] ring-1 ring-slate-100 hover:bg-slate-50',
        ].join(' ')}
      >
        Start for FREE
      </Link>

      <p
        className={[
          'mt-4! text-xs font-medium',
          emphasized ? 'text-blue-100' : 'text-slate-400',
        ].join(' ')}
      >
        Pay only after seeing your refund
      </p>
    </article>
  )
}

export default PlanCard
