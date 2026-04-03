import HelpTicketsHero from './components/HelpTicketsHero'
import HelpTicketsFAQ from './components/HelpTicketsFAQ'
import helpTicketsData from './data/help-tickets-data.json'
import Breadcrumb from '../../components/CustomBreadCrumb';

const HelpTickets = () => {
  const { header, faqItems } = helpTicketsData

  return (
    <div className="min-w-full ">
      <div className="min-h-screen max-w-max mx-auto">

        <Breadcrumb title='Escalation Request' />
        <div className=" bg-white text-slate-800 mx-auto max-w-7xl mt-8 pb-8 rounded-lg shadow-md">
        <HelpTicketsHero title={header.title} subtitle={header.subtitle} />
        <HelpTicketsFAQ
          title="Questions and Answers on Income Tax Refund"
          items={faqItems}
        />
      </div>
      </div>
    </div>
  )
}

export default HelpTickets
