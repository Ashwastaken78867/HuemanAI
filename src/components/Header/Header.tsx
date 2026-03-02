import { Menu } from 'lucide-react';
import logo from "../../assets/logo.png";

export function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img src={logo} alt="HuemanAI" className="h-8" />
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#solutions" className="text-gray-700 hover:text-[#1e293b] transition-colors">Solutions</a>
            <a href="#pricing" className="text-gray-700 hover:text-[#1e293b] transition-colors">Pricing</a>
            <a href="#comparisons" className="text-gray-700 hover:text-[#1e293b] transition-colors">Comparisons</a>
            <a href="#faq" className="text-gray-700 hover:text-[#1e293b] transition-colors">FAQ</a>
            <a href="#about" className="text-gray-700 hover:text-[#1e293b] transition-colors">About Us</a>
            <a href="#blog" className="text-gray-700 hover:text-[#1e293b] transition-colors">Blog</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="hidden lg:inline-flex text-gray-700 hover:text-[#1e293b] transition-colors">
              Sign In
            </button>
            <button className="bg-[#10b981] text-white px-6 py-2.5 rounded-lg hover:bg-[#059669] transition-colors">
              Get Started
            </button>
            <button className="lg:hidden p-2">
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
