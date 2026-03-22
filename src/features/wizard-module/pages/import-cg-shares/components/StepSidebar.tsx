import stepData from '../data/stepSidebar.json'

interface StepSidebarProps {
  currentStep: number
}

export default function StepSidebar({ currentStep }: StepSidebarProps) {
  const steps = stepData.steps

  return (
    <>
      <div className="lg:hidden w-full overflow-x-auto pb-2">
        <div className="flex gap-2 min-w-max">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`rounded-full border px-3 py-2 text-xs font-semibold whitespace-nowrap ${
                currentStep >= step.number
                  ? 'border-blue-600 bg-blue-50 text-blue-700'
                  : 'border-gray-300 bg-white text-gray-600'
              }`}
            >
              Step {step.number}: {step.title}
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:block w-48 pr-6!">
        {steps.map((step, index) => (
          <div key={step.number} className="mb-10 relative">
            <div className="flex gap-4 items-start">
              <div className="flex flex-col items-center">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs! flex-shrink-0 ${
                    currentStep >= step.number
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-0.5 h-14 mt-2 ${
                      currentStep > step.number ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  ></div>
                )}
              </div>
              <div className="pt-0.5">
                <h3
                  className={`font-semibold !text-sm ${
                    currentStep >= step.number
                      ? 'text-blue-600'
                      : 'text-gray-600'
                  }`}
                >
                  {step.title}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5 font-normal">
                  {step.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
