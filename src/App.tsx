
import './App.css'
import { ProductTabs } from './components/AboutUs/ProductTable'
import AdvantageSection from './components/AdvantageSection/AdvantageSection'
import { AIBrainSection } from './components/AIBrainSection/AIBrainSection'
import { Brands } from './components/Brands/Brands'
import { DataBackedResults } from './components/DataBackedResults/DataBackedResults'
import EnterpriseReliability from './components/EnterpriseReliability/EnterpriseReliability'
import FAQSection from './components/FAQSection.tsx/FAQSection'
import Footer from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Hero } from './components/heroSection/HeroSection'
import { IntegrationsSection } from './components/IntegrationsSection/IntegrationsSection'
import { VoiceDemo } from './components/VoiceDemo/VoiceDemo'
import { WhyHuemanSection } from './components/WhyHuemanSection.tsx/WhyHuemanSection'

function App() {

  return (
    <div className='bg-white'>
   <Header />
   <Hero />
   <Brands />
   <AIBrainSection />
 <section className="bg-white py-14">
  <VoiceDemo />
</section>

<section className="bg-white pt-4 pb-16">
  <ProductTabs />
</section>  
<DataBackedResults />
   <AdvantageSection />
   <WhyHuemanSection />
   <IntegrationsSection />
   <EnterpriseReliability />
   <FAQSection />
   <Footer/>
   
    </div>
  )
}

export default App
