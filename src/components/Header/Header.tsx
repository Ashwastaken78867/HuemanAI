import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

export function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Solutions", href: "#solutions" },
    { label: "Pricing", href: "#pricing" },
    { label: "Comparisons", href: "#comparisons" },
    { label: "FAQ", href: "#faq" },
    { label: "About Us", href: "#about" },
    { label: "Blog", href: "#blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <img src={logo} alt="HuemanAI" className="h-7 lg:h-8" />

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-gray-700 hover:text-[#1e293b] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-[#1e293b] transition-colors">
              Sign In
            </button>
            <button className="bg-[#10b981] text-white px-6 py-2.5 rounded-lg hover:bg-[#059669] transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 border-t border-gray-100" : "max-h-0"
        }`}
      >
        <div className="px-4 sm:px-6 pb-6 pt-4 space-y-4 bg-white">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-gray-700 hover:text-[#1e293b]"
            >
              {l.label}
            </a>
          ))}

          <div className="pt-4 border-t border-gray-100 space-y-3">
            <button className="block w-full text-left text-gray-700 hover:text-[#1e293b]">
              Sign In
            </button>
            <button className="w-full bg-[#10b981] text-white px-6 py-2.5 rounded-lg hover:bg-[#059669] transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}