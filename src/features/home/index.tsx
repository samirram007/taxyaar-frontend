import Banner from './components/banner'

import FeaturesSection from './components/features-section'
import HowItWorksSection from './components/how-it-works-section'
import StatsSection from './components/stats-section'
import FAQSection from './components/faq-section'
import TestimonialsSection from './components/testimonials-section'
import ContactUsSection from './components/cta-section'
import { Suspense } from 'react'

const BannerSkeleton = () => (
  <div className="h-dvh delay-1000 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse" />
)
// const HeaderSkeleton = () => <div className="h-16 bg-gray-300 animate-pulse" />
// const FooterSkeleton = () => (
//   <div className="h-24 bg-gray-300 animate-pulse mt-8" />
// )
const Home = () => {
  return (
    <>
      <Suspense fallback={<BannerSkeleton />}>
        <Banner />
      </Suspense>
      <Suspense fallback={<div className="h-48 bg-gray-200 animate-pulse" />}>
        <FeaturesSection />
      </Suspense>
      <Suspense fallback={<div className="h-48 bg-gray-200 animate-pulse" />}>
        <StatsSection />
      </Suspense>
      <Suspense fallback={<div className="h-48 bg-gray-200 animate-pulse" />}>
        <HowItWorksSection />
      </Suspense>
      <Suspense fallback={<div className="h-48 bg-gray-200 animate-pulse" />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<div className="h-48 bg-gray-200 animate-pulse" />}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={<div className="h-48 bg-gray-200 animate-pulse" />}>
        <ContactUsSection />
      </Suspense>
    </>
  )
}

export default Home
