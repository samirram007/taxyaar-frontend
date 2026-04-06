import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

type SupportOption = {
  id: number
  icon: string
  title: string
  description: string
  responseTime?: string
  escalateText?: string
  ctaText?: string
  ctaType?: string
  hasLink?: boolean
  bgColor?: string
}

type SupportOptionsProps = {
  options: SupportOption[]
}

const IconTicket = () => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="56" height="56" rx="8" fill="#2563EB" fillOpacity="0.1" />
    <path
      d="M18 18C17.45 18 17 18.45 17 19V35C17 35.55 17.45 36 18 36H38C38.55 36 39 35.55 39 35V19C39 18.45 38.55 18 38 18H18ZM37 34H19V20H37V34Z"
      fill="#2563EB"
    />
    <path d="M21 22H35V24H21V22Z" fill="#2563EB" />
    <path d="M21 27H35V29H21V27Z" fill="#2563EB" />
    <path d="M21 32H28V34H21V32Z" fill="#2563EB" />
  </svg>
)

const IconWhatsApp = () => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="56" height="56" rx="8" fill="#2563EB" fillOpacity="0.1" />
    <path
      d="M28 17C22.48 17 18 21.48 18 27C18 29.1 18.68 31.05 19.82 32.63L18.5 36L21.95 34.73C23.5 35.73 25.38 36.38 27.5 36.38C33.02 36.38 37.5 31.9 37.5 26.38C37.5 20.86 33.02 16.38 27.5 16.38C27.5 17 28 17 28 17Z"
      fill="#2563EB"
    />
    <path
      d="M28 34C26.2 34 24.5 33.4 23.1 32.4L22.2 31.8L20 32.6L21.2 30.4L20.6 29.4C19.8 27.9 19.4 26.2 19.4 24.4C19.4 19.2 23.6 15 28.8 15C34 15 38.2 19.2 38.2 24.4C38.2 29.6 34.2 34 28 34Z"
      fill="white"
    />
    <path
      d="M33.5 25.8C33.2 25.6 32.1 25C31.8 24.9C31.5 24.8 31.3 24.9 31.1 25.1C30.9 25.3 30.3 26 30.1 26.2C29.9 26.4 29.7 26.4 29.4 26.2C29.1 26 28.2 25.7 27.1 24.7C26.2 23.9 25.6 22.9 25.4 22.6C25.2 22.3 25.4 22.1 25.6 21.9C25.8 21.7 26 21.5 26.3 21.2C26.5 21 26.6 20.8 26.8 20.5C26.9 20.3 26.8 20.1 26.6 20C26.4 19.9 25.6 19.5 25.3 19.4C25 19.3 24.8 19.3 24.6 19.6C24.4 19.9 23.8 20.7 23.8 21.8C23.8 22.9 24 24.1 24.2 24.3C24.4 24.5 26.3 27.1 29.2 28.3C30 28.6 30.7 28.8 31.3 28.9C32.1 29.1 32.8 29.1 33.5 28.9C34.1 28.7 35.3 28.1 35.6 27.5C35.9 26.9 35.9 26.3 35.8 26.2C35.7 26 35.5 25.9 35.2 25.8C35 25.8 34 25.8 33.5 25.8Z"
      fill="white"
    />
  </svg>
)

const IconEscalate = () => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="56" height="56" rx="8" fill="#DC2626" fillOpacity="0.1" />
    <path
      d="M28 18C22.48 18 18 22.48 18 28C18 33.52 22.48 38 28 38C33.52 38 38 33.52 38 28C38 22.48 33.52 18 28 18ZM28 36C23.58 36 20 32.42 20 28C20 23.58 23.58 20 28 20C32.42 20 36 23.58 36 28C36 32.42 32.42 36 28 36Z"
      fill="#DC2626"
    />
    <path
      d="M31.5 24.5L24.5 31.5M24.5 24.5L31.5 31.5"
      stroke="#DC2626"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

const IconKnowledge = () => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="56" height="56" rx="8" fill="#3B82F6" fillOpacity="0.15" />
    <path
      d="M28 18C22.48 18 18 22.48 18 28C18 33.52 22.48 38 28 38C33.52 38 38 33.52 38 28C38 22.48 33.52 18 28 18ZM28 36C23.58 36 20 32.42 20 28C20 23.58 23.58 20 28 20C32.42 20 36 23.58 36 28C36 32.42 32.42 36 28 36Z"
      fill="#3B82F6"
    />
    <path
      d="M28 24V28M28 32H28.01"
      stroke="#3B82F6"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'ticket':
      return <IconTicket />
    case 'whatsapp':
      return <IconWhatsApp />
    case 'escalate':
      return <IconEscalate />
    case 'knowledge':
      return <IconKnowledge />
    default:
      return null
  }
}

const SupportOptions = ({ options }: SupportOptionsProps) => {
  return (
    <section className="px-4! py-12! sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1! md:grid-cols-2! gap-6!">
          {options.map((option) => (
            <Card
              key={option.id}
              className={`p-8! gap-0! rounded-lg! border! border-slate-200! shadow-none! flex! flex-col! items-center! text-center! ${
                option.bgColor || 'bg-white!'
              }`}
            >
              <div className="mb-6!">{getIcon(option.icon)}</div>
              <h3 className="text-lg! font-semibold! text-slate-900! mb-2!">
                {option.title}
              </h3>
              <p className="text-slate-600! text-sm! mb-2!">
                {option.description}
              </p>
              {option.responseTime && (
                <p className="text-slate-500! text-xs! mb-4!">
                  {option.responseTime}
                </p>
              )}
              {option.escalateText && (
                <>
                  <p className="text-slate-600! text-sm! mb-3! leading-relaxed!">
                    {option.escalateText}
                  </p>
                </>
              )}
              {option.ctaText && (
                <>
                  <Button className="mt-4! bg-blue-600! hover:bg-blue-700! text-white! px-6! py-2! text-sm! font-medium!">
                    {option.ctaText}
                  </Button>
                  {option.title === 'Escalate a ticket' && (
                    <a
                      href="#"
                      className="mt-2! text-blue-600! text-xs! hover:text-blue-700! underline!"
                    >
                      How to Escalate
                    </a>
                  )}
                </>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SupportOptions
