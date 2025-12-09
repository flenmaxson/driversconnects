import QuickEasySection from '@/components/QuickEasySection'
import UltimatePCCare from '@/components/UltimatePCCare'
import Hero from '@/components/Hero'
import WorkWithDevices from '@/components/WorkWithDevices'
import DriverPack from '@/components/DriverPack'
import Talk from '@/components/Talk'
import MainLayout from '@/components/MainLaout'
import CostumersReview from '@/components/CostumersReview'
import FAQList from '@/components/FaqList'
import PricingPackages from '@/components/PricingSection'

export default function Home() {
  return (
    <MainLayout>
      {/* Hero */}
      <Hero/>
    

      {/* Quick & Easy */}
      <QuickEasySection />

      {/* Ultimate PC Care */}
      <UltimatePCCare/>

      {/* Works with devices */}
      <WorkWithDevices/>


      {/* Suitable for any computer */}
      <DriverPack/>
      <PricingPackages/>

      {/* Contact */}
      <CostumersReview/>
      <FAQList/>
      <Talk/>
    </MainLayout>
  )
}