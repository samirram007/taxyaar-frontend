import { useState } from 'react'
import Header from '../home/components/header'
import Footer from '../home/components/footer'
import BrokerSelection from './components/BrokerSelection'
import HeroSection from './components/HeroSection'
import StepSidebar from './components/StepSidebar'

const ImportCGShares = () => {
  const [currentStep, setCurrentStep] = useState(1)

  return (
    <>
      <Header />
      <div className="body">
        <HeroSection />
        <section className="bg-gray-50 py-10! px-8!">
          <div className="max-w-6xl mx-auto flex gap-8">
            <StepSidebar currentStep={currentStep} />
            <BrokerSelection />
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default ImportCGShares
