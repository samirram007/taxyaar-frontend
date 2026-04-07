
import PricingHero from './components/PricingHero'
import TrustedCompanies from './components/TrustedCompanies'
import PlanComparison from './components/PlanComparison'
import pricingData from './data/pricing.json'


const Pricing = () => {
  const { hero, plans, trustedSection, comparison } = pricingData

  return (
    <>

      <div className="body bg-white text-slate-800">
        <PricingHero
          heading={hero.heading}
          sectionTitle={hero.sectionTitle}
          mobileOfferText={hero.mobileOfferText}
          mobileOfferCta={hero.mobileOfferCta}
          plans={plans}
        />
        <TrustedCompanies
          heading={trustedSection.heading}
          subheading={trustedSection.subheading}
          logos={trustedSection.logos}
        />
        <PlanComparison
          heading={comparison.heading}
          tabs={comparison.tabs}
          self={comparison.self}
          assisted={comparison.assisted}
        />
      </div>

    </>
  )
}

export default Pricing
