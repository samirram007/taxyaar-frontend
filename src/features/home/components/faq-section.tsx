import React, { useState } from 'react'

interface FAQItem {
  id: number
  question: string
  answer: string
}

const FAQSection: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(1)

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: 'How long does the filing process take?',
      answer:
        'Most users complete their filing in 15-30 minutes depending on the complexity of their tax situation. Our guided wizard makes it easy and quick.',
    },
    {
      id: 2,
      question: 'Is my information secure?',
      answer:
        'Yes! We use bank-level encryption and follow all data protection standards. Your personal and financial information is fully secured.',
    },
    {
      id: 3,
      question: 'Can I get help during filing?',
      answer:
        'Absolutely! Our expert support team is available 24/7 to help you with any questions. You can chat with them directly through our platform.',
    },
    {
      id: 4,
      question: 'What if I make a mistake?',
      answer:
        'You can review and edit your filing as many times as you need before submission. Our system will flag any potential errors for you.',
    },
    {
      id: 5,
      question: 'Do you support all filing types?',
      answer:
        'We support individual tax returns, business filings, and various other tax return types. Check our supported filings page for details.',
    },
    {
      id: 6,
      question: 'How do I track my filing status?',
      answer:
        'Once submitted, you can track your filing status in real-time from your dashboard. We send email updates at every stage.',
    },
  ]

  return (
    <section className="!py-24 md:!py-32 bg-white">
      <div className="container">
        <div className="!text-center !mb-20">
          <h2 className="!text-4xl md:!text-5xl !font-bold text-gray-800 !mb-4 !leading-tight">
            Frequently Asked Questions - FAQs
          </h2>
          <p className="!text-lg md:!text-lg text-gray-600 !m-0 !p-0">
            Here are some very common questions that we are asked
          </p>
        </div>
        <div className="grid grid-cols-1 max-w-4xl mx-auto">
          <div className="flex flex-col ">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border-b border-gray-300 last:border-b-0 !pb-4 !pt-5"
              >
                <button
                  className="w-full flex justify-between items-center transition-all hover:text-blue-600 group"
                  onClick={() => setActiveId(activeId === faq.id ? 0 : faq.id)}
                >
                  <span className="!text-base md:!text-lg !font-semibold !text-left text-gray-800 group-hover:text-blue-600">
                    {faq.question}
                  </span>
                  <span className="!text-3xl text-gray-600 group-hover:text-blue-600 flex-shrink-0 !ml-8 leading-none">
                    {activeId === faq.id ? '−' : '+'}
                  </span>
                </button>
                {activeId === faq.id && (
                  <div className="!mt-6 !pt-6 border-t border-gray-300 animate-in fade-in">
                    <p className="!text-base text-gray-600 leading-relaxed !m-0 !p-0">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
