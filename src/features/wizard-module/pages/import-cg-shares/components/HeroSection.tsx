import heroData from '../data/heroSection.json'

interface HeroSectionProps {
  onStartNowClick: () => void
}

export default function HeroSection({ onStartNowClick }: HeroSectionProps) {
  return (
    <section className="bg-white py-12! md:py-16! lg:py-20! px-4! md:px-6! lg:px-8!">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {heroData.title}
            <br />
            {heroData.titleBr}
          </h1>
          <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
            {heroData.description}
          </p>
          <button
            type="button"
            onClick={onStartNowClick}
            className="bg-blue-600 text-white px-6! md:px-8! py-3! rounded font-semibold hover:bg-blue-700 transition text-sm md:text-base"
          >
            {heroData.buttonText}
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center w-full">
          <img
            src="/img/cgshare-hero.svg"
            alt="Hero"
            className="w-full h-auto max-w-sm md:max-w-md"
          />
        </div>
      </div>
    </section>
  )
}
