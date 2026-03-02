
import './App.css'
import { ProductTabs } from './components/AboutUs/ProductTable'
import {BentoGrid} from './components/BentoGrid/BentoGrid'
import { Brands } from './components/Brands/Brands'
import { PerformanceGap } from './components/PerformanceGap/PerformanceGap'
import {SecurityCompliance} from './components/SecurityCompliance/SecurityCompliance'
import FAQSection from './components/FAQSection.tsx/FAQSection'
import Footer from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Hero } from './components/heroSection/HeroSection'
import { IntegrationsNew } from './components/IntegrationsNew/IntegrationsNew'
import { VoiceDemo } from './components/VoiceDemo/VoiceDemo'
import { StrategicValue } from './components/StrategicValue/StrategicValue'
import {VisionSection} from "./components/VisionSection/VisionSection";
function App() {

  return (
    <div className="min-h-screen bg-white">
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
 

   
    </div>
  )
}

export default App
