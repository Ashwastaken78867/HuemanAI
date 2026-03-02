
import './App.css'
import { ProductTabs } from './components/AboutUs/ProductTable'
import {BentoGrid} from './components/AdvantageSection/AdvantageSection'
import { Brands } from './components/Brands/Brands'
import { PerformanceGap } from './components/DataBackedResults/DataBackedResults'
import {SecurityCompliance} from './components/EnterpriseReliability/EnterpriseReliability'
import FAQSection from './components/FAQSection.tsx/FAQSection'
import Footer from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Hero } from './components/heroSection/HeroSection'
import { IntegrationsNew } from './components/IntegrationsSection/IntegrationsSection'
import { VoiceDemo } from './components/VoiceDemo/VoiceDemo'
import { StrategicValue } from './components/WhyHuemanSection.tsx/WhyHuemanSection'
import {VisionSection} from "./components/AIBrainSection/AIBrainSection";
function App() {

  return (
    <div className='bg-white'>
   <Header />
   <Hero />
   <Brands />
   <VisionSection />
 <section className="bg-white py-14">
  <VoiceDemo />
</section>

<section className="bg-white pt-4 pb-16">
  <ProductTabs />
</section>  
<PerformanceGap />
   <BentoGrid />
   <StrategicValue />
   <IntegrationsNew />
   <SecurityCompliance />
   <FAQSection />
   <Footer/>
   {/* <ModuleButtons activeModule={0} onModuleChange={function (): void {
        throw new Error('Function not implemented.')
      } } /> */}

   
    </div>
  )
}

export default App
