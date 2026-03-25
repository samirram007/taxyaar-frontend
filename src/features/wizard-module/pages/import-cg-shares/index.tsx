import { useNavigate } from '@tanstack/react-router'
import { useRef } from 'react'
import { Route } from '@/routes/import-cg-shares'
import Header from '../home/components/header'
import Footer from '../home/components/footer'
import BrokerSelection from './components/BrokerSelection'
import BrokerFileSelection from './components/BrokerFileSelection'
import HeroSection from './components/HeroSection'
import StepSidebar from './components/StepSidebar'

const ImportCGShares = () => {
  const navigate = useNavigate()
  const { brokerId } = Route.useSearch()
  const brokerSectionRef = useRef<HTMLElement | null>(null)
  const currentStep = brokerId ? 2 : 1

  const handleScrollToBrokerSection = () => {
    brokerSectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const handleSelectBroker = (selectedBrokerId: number) => {
    navigate({
      to: '/import-cg-shares',
      search: (previous) => ({
        ...previous,
        brokerId: selectedBrokerId,
      }),
    })
  }

  const handleBackToStepOne = () => {
    navigate({
      to: '/import-cg-shares',
      search: (previous) => ({
        ...previous,
        brokerId: undefined,
      }),
    })
  }

  return (
    <>
      <Header />
      <div className="body">
        <HeroSection onStartNowClick={handleScrollToBrokerSection} />
        <section ref={brokerSectionRef} className="bg-gray-50 py-10! px-8!">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
            <StepSidebar currentStep={currentStep} />
            {brokerId ? (
              <BrokerFileSelection
                brokerId={brokerId}
                onBack={handleBackToStepOne}
              />
            ) : (
              <BrokerSelection
                selectedBrokerId={brokerId ?? null}
                onSelectBroker={handleSelectBroker}
              />
            )}
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default ImportCGShares
