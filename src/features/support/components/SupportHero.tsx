type SupportHeroProps = {
  title: string
  subtitle: string
}

const SupportHero = ({ title, subtitle }: SupportHeroProps) => {
  return (
    <section className="px-4! pt-14! sm:px-6 lg:px-8 lg:pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="text-4xl! font-bold! text-slate-900">{title}</h1>
          <p className="mt-3! text-base! text-slate-500">{subtitle}</p>
        </div>
      </div>
    </section>
  )
}

export default SupportHero
