import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

type FAQItem = {
  id: string
  question: string
  answer: string
}

type HelpTicketsFAQProps = {
  items: FAQItem[]
  title: string
}

const HelpTicketsFAQ = ({ items, title }: HelpTicketsFAQProps) => {
  return (
    <section className="px-8! py-10! sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="text-3xl! font-bold! text-slate-900 mb-10">{title}</h2>
        <Accordion type="single" collapsible className="space-y-2">
          {items.map((item, index) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border-b border-slate-200 last:border-0"
            >
              <AccordionTrigger className="text-base font-semibold text-slate-900 hover:text-blue-600 py-4 px-0 text-left">
                <div className="flex items-start gap-4 w-full">
                  <span className="font-bold text-slate-600 min-w-fit flex-shrink-0 mt-0.5">
                    {index + 1}.
                  </span>
                  <span className="text-left">{item.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-slate-700 leading-relaxed pt-2 pb-6 ml-10">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default HelpTicketsFAQ
