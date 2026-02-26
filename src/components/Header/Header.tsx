import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../../assets/logo.png";
export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#solutions', label: 'Solutions' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#comparisons', label: 'Comparisons' },
    { href: '#faq', label: 'FAQ' },
    { href: '#about', label: 'About Us' },
    { href: '#blog', label: 'Blog' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-15">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img src={logo} alt="HuemanAI Logo" className="h-8 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[#1e293b] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <button className="hidden lg:inline-flex text-gray-700 hover:text-[#1e293b] transition-colors font-medium">
              Sign In
            </button>
            <button className="bg-[#10b981] text-white px-6 py-2.5 rounded-lg hover:bg-[#059669] transition-all font-semibold shadow-sm hover:shadow-md">
              Get Started
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-[#1e293b] transition-colors font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#signin"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-700 hover:text-[#1e293b] transition-colors font-medium py-2 border-t border-gray-100 pt-4"
              >
                Sign In
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
