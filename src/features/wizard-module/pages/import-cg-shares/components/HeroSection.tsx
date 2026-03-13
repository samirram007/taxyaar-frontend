import heroData from '../data/heroSection.json'

interface HeroSectionProps {
  onStartNowClick: () => void
}

export default function HeroSection({ onStartNowClick }: HeroSectionProps) {
  return (
    <section className="bg-white py-20! px-8!">
      <div className="max-w-6xl mx-auto flex items-center gap-16">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {heroData.title}
            <br />
            {heroData.titleBr}
          </h1>
          <p className="text-gray-600 mb-8 text-sm leading-relaxed font-normal">
            {heroData.description}
          </p>
          <button
            type="button"
            onClick={onStartNowClick}
            className="bg-blue-600 text-white px-8! py-3! rounded font-semibold hover:bg-blue-700 transition text-sm"
          >
            {heroData.buttonText}
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <img
            src="/img/cgshare-hero.svg"
            alt="Hero"
            className="w-full h-auto max-w-md"
          />
        </div>
      </div>
    </section>
  )
}
