type TrustedCompaniesProps = {
  heading: string
  subheading: string
  logos: string[]
}

const TrustedCompanies = ({
  heading,
  subheading,
  logos,
}: TrustedCompaniesProps) => {
  return (
    <section className="px-4! py-18! sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[24px] bg-white">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-800 sm:text-[2rem]">
            {heading}
          </h2>
          <p className="mt-2 text-sm text-slate-400 sm:text-base">
            {subheading}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 text-center sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((company) => (
            <div
              key={company}
              className="flex min-h-14 items-center justify-center text-base font-semibold tracking-[0.04em] text-slate-500 grayscale"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedCompanies
