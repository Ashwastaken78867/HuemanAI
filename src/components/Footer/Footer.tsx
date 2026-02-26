import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full font-urbanist">
      {/* Main footer */}
      <section className="bg-white flex flex-wrap justify-between p-8 md:p-14 gap-y-8 md:gap-y-10 gap-x-6 md:gap-x-15 sm:gap-x-5">
        {/* Logo + description */}
        <div className="min-w-full sm:min-w-60 text-sm text-text-charcoal font-semibold leading-[1.2]">
          <img
            src="src\assets\logo (1).png"
            alt="HumenAI Logo"
            className="object-contain w-32.5 sm:w-39"
          />
          <p className="mt-4 sm:mt-6 text-sm font-normal text-text-charcoal/70">
            Deliver with the AI-Native Suite for Modern Hospitality
          </p>
        </div>

        {/* Column */}
        <FooterColumn
          title="Solutions"
          links={[
            { label: "Hiring Suite", href: "/recruitment-module" },
            { label: "AI Concierge", href: "/ai-concierge" },
            { label: "Sales Suite", href: "/sales-module" },
            { label: "Marketing Suite", href: "/marketing-module" },
          ]}
        />

        <FooterColumn
          title="Pricing"
          links={[
            { label: "View Plans", href: "/pricing" },
            { label: "Comparisons", href: "/comparisons" },
          ]}
        />

        <FooterColumn
          title="Company"
          links={[
            { label: "About Us", href: "/about-us" },
            { label: "FAQ", href: "/faq" },
            { label: "Contact Us", href: "/contact-us" },
          ]}
        />

        <FooterColumn
          title="Legal"
          links={[
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms of Service", href: "/terms-of-service" },
          ]}
        />
      </section>

      {/* Bottom bar */}
      <section className="bg-white text-text-charcoal text-sm py-6 px-4 md:px-8 border-t border-gray-100">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-text-charcoal/70 text-center md:text-left">
            © 2026. All Rights Reserved - Huemanai Ltd.
          </span>

          <div className="flex items-center space-x-4 text-text-charcoal/70">
            <a href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="/terms-of-service" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  links: { label: string; href: string }[];
};

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => (
  <nav className="w-full sm:w-45 md:w-50">
    <div className="text-text-charcoal font-semibold uppercase text-xs tracking-wider">
      {title}
    </div>
    <ul className="text-text-charcoal/70 font-normal leading-8 sm:leading-12.25 mt-3 sm:mt-4 text-sm">
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href} className="hover:text-primary transition-colors">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Footer;