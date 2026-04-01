import { Button } from '@/components/ui/button'

type HelpTicketsHeroProps = {
  title: string
  subtitle: string
}

const HelpTicketsHero = ({ title, subtitle }: HelpTicketsHeroProps) => {
  const handleNewTicket = () => {
    window.open('https://help.taxyaar.com/help-center', '_blank')
  }

  return (
    <section className="px-4! pt-14! pb-8! sm:px-6 lg:px-8 lg:pt-20 lg:pb-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1">
            <h1 className="text-4xl! font-bold! text-slate-900">{title}</h1>
            <p className="mt-3! text-base! text-slate-500">{subtitle}</p>
          </div>
          <Button
            onClick={handleNewTicket}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md whitespace-nowrap mt-1"
          >
            New Ticket
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HelpTicketsHero
