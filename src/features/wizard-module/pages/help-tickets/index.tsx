import HelpTicketsHero from './components/HelpTicketsHero'
import HelpTicketsFAQ from './components/HelpTicketsFAQ'
import helpTicketsData from './data/help-tickets-data.json'

const HelpTickets = () => {
  const { header, faqItems } = helpTicketsData

  return (
    <>
      <div className=" bg-white text-slate-800 mx-12 rounded-lg shadow-md">
        <HelpTicketsHero title={header.title} subtitle={header.subtitle} />
        <HelpTicketsFAQ
          title="Questions and Answers on Income Tax Refund"
          items={faqItems}
        />
      </div>
    </>
  )
}

export default HelpTickets
