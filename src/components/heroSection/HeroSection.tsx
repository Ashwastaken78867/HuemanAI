
import { ArrowRight, Play } from 'lucide-react';
import tabletMockup from '../../assets/hero.png';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm">The OS Statement</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl text-[#1e293b] leading-tight">
              The Unified AI-First and Conversational Operating System for <span className="text-[#10b981]">Hospitality</span>
            </h1>
            
            <div className="flex flex-wrap gap-4 text-lg text-gray-700">
              <span className="flex items-center">
                <span className="w-1.5 h-1.5 bg-[#10b981] rounded-full mr-2"></span>
                Maximise Revenue
              </span>
              <span className="text-gray-300">|</span>
              <span className="flex items-center">
                <span className="w-1.5 h-1.5 bg-[#10b981] rounded-full mr-2"></span>
                Automate Service
              </span>
              <span className="text-gray-300">|</span>
              <span className="flex items-center">
                <span className="w-1.5 h-1.5 bg-[#10b981] rounded-full mr-2"></span>
                Secure Talent
              </span>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              One platform to unify your guest journey and manage your entire workforce with autonomous AI Agents
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#10b981] text-white px-8 py-4 rounded-lg hover:bg-[#059669] transition-all flex items-center justify-center space-x-2 shadow-lg shadow-green-500/30">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white text-[#1e293b] px-8 py-4 rounded-lg border-2 border-gray-200 hover:border-[#1e293b] transition-all flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Take a Product Tour</span>
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-linear-to-r from-green-400 to-blue-500 rounded-2xl blur-2xl opacity-20"></div>
            <img 
              src={tabletMockup} 
              alt="HuemanAI Dashboard" 
              className="relative w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}