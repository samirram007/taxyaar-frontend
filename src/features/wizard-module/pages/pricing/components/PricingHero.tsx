import { ChevronRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import PlanCard from './PlanCard'

type Plan = {
  name: string
  price: string
  subtitle: string
  description: string
  features: string[]
  emphasized?: boolean
}

type PricingHeroProps = {
  heading: string
  sectionTitle: string
  mobileOfferText: string
  mobileOfferCta: string
  plans: Plan[]
}

const PricingHero = ({
  heading,
  sectionTitle,
  mobileOfferText,
  mobileOfferCta,
  plans,
}: PricingHeroProps) => {
  return (
    <section className="px-4! pt-14! pb-24! sm:px-6 lg:px-8 lg:pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="pt-8! text-center sm:pt-16 lg:pt-20">
          <h1 className="mx-auto max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-slate-800 sm:text-5xl sm:leading-[1.05]">
            {heading}
          </h1>
        </div>

        <div className="mt-16! text-center">
          <p className="text-2xl font-semibold tracking-[-0.02em] text-slate-800">
            {sectionTitle}
          </p>
        </div>

        <div className="mt-10! grid gap-6 lg:grid-cols-2 lg:gap-8">
          {plans.map((plan) => (
            <PlanCard key={plan.name} {...plan} />
          ))}
        </div>

        <div className="mt-10! flex justify-center">
          <Link
            to="/sign-up"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-500 shadow-[0_12px_30px_rgba(15,23,42,0.04)] transition-colors hover:border-slate-300 hover:text-slate-700"
          >
            {mobileOfferText}
            <span className="font-semibold text-[#477efa]">
              {mobileOfferCta}
            </span>
            <ChevronRight className="h-4 w-4 text-[#477efa]" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PricingHero
