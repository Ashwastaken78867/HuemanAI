import React, { useEffect, useRef, useState } from "react";
import {
  DollarSign,
  Sparkles,
  BarChart,
  Calendar,
  Search,
  Star,
  MessageCircle,
  Users,
  Settings,
  ClipboardList,
  ChefHat,
  Utensils,
} from "lucide-react";

type TabKey = "sales" | "marketing" | "operations" | "table";

const tabs = [
  { key: "sales", label: "Sales & Revenue" },
  { key: "marketing", label: "Marketing and Growth" },
  { key: "operations", label: "Operations" },
  { key: "table", label: "Table booking System" },
];

const content = {
  sales: {
    title: "Drive Direct Revenue with Autonomous Sales Agents",
    features: [
      { icon: DollarSign, title: "Sales & Upselling Agent", desc: "24/7 autonomous voice receptionist for bookings." },
      { icon: Sparkles, title: "Revenue Intelligence", desc: "Real-time PMS sync for total asset optimization." },
      { icon: BarChart, title: "Insights & Competition", desc: "Dynamic pricing to outperform local competitors." },
      { icon: Calendar, title: "Event Sales Agent", desc: "Instant automation for group and event inquiries." },
    ],
    bullets: [
      "Higher Search Visibility: Dominating local search for organic traffic.",
      "Automated Social Growth: Consistent presence without manual posting.",
      "Enhanced Guest Trust: Rapid response to reviews to boost conversion.",
      "Data-Driven Campaigns: High-performing outreach for hospitality.",
    ],
  },
  marketing: {
    title: "Automate Guest Acquisition and Digital Authority",
    features: [
      { icon: Search, title: "SEO Marketing Agent", desc: "Autonomous content and ranking optimization." },
      { icon: Star, title: "Reputation & Conversion", desc: "Instant review management to drive guest trust." },
      { icon: Settings, title: "Digital Brand Manager", desc: "AI-driven consistency across every touchpoint." },
      { icon: MessageCircle, title: "Social & Community Agent", desc: "24/7 engagement across all digital channels." },
    ],
    bullets: [
      "Reduced Labor Costs: Optimize schedules to match actual demand.",
      "Faster Hiring: AI-screened candidates cut weeks off recruitment.",
      "Zero Task Slippage: Automated reminders and escalations.",
      "Real-Time Transparency: Every team member aligned instantly.",
    ],
  },
  operations: {
    title: "Streamline Workforce and Front-Desk Operations",
    features: [
      { icon: MessageCircle, title: "Conversational Operations", desc: "Staff chat for instant task and shift updates." },
      { icon: Users, title: "Talent Lifecycle Agent", desc: "Automated hiring, onboarding, and performance." },
      { icon: ClipboardList, title: "Scheduling Intelligence", desc: "Demand-driven shifts with labor cost control." },
      { icon: Settings, title: "Concierge & Request Agent", desc: "AI routing for seamless guest service delivery." },
    ],
    bullets: [
      "Maximize Table Turnover: AI-optimized seating and reservation flow.",
      "Reduce No-Shows: Automated reminders and confirmations.",
      "Increase F&B Revenue: Smart upselling and pairing suggestions.",
      "Lower Food Waste: Predictive inventory and demand forecasting.",
    ],
  },
  table: {
    title: "Intelligent Restaurant & F&B Management",
    features: [
      { icon: Calendar, title: "Reservation Agent", desc: "24/7 automated table booking and guest coordination." },
      { icon: BarChart, title: "Menu Optimization", desc: "AI-driven menu engineering and pricing strategies." },
      { icon: ChefHat, title: "Guest Experience Agent", desc: "Personalized dining recommendations and requests." },
      { icon: Utensils, title: "Inventory Intelligence", desc: "Smart ordering and waste reduction automation." },
    ],
    bullets: [
      "Reduced Labor Costs: Optimize schedules to match actual demand.",
      "Faster Hiring: AI-screened candidates cut weeks off recruitment.",
      "Zero Task Slippage: Automated reminders and escalations.",
      "Real-Time Transparency: Every team member aligned instantly.",
    ],
  },
};

export const ProductTabs: React.FC = () => {
  const [active, setActive] = useState<TabKey>("sales");
  const [compact, setCompact] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const data = content[active];

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setCompact(rect.top <= 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 bg-[#f7f9fb]">
      <div className="max-w-7xl mx-auto px-6">

        {/* MORPHING TABS */}
       {/* MORPHING TABS */}
<div className={`transition-all duration-500 z-30 ${compact ? "sticky top-6" : ""}`}>
  <div
    className={`bg-white shadow-sm border border-gray-100 transition-all duration-500 ${
      compact ? "rounded-full px-2 py-2 max-w-2xl mx-auto" : "rounded-3xl p-3 mb-12"
    }`}
  >
    <div
      className={`transition-all duration-500 flex items-center ${
        compact ? "gap-2 justify-center" : "grid grid-cols-4 gap-3 w-full"
      }`}
    >
      {tabs.map((t) => (
        <button
          key={t.key}
          onClick={() => setActive(t.key as TabKey)}
          className={`
            font-medium transition-all duration-300 flex items-center justify-center text-center
            ${
              compact
                ? "px-5 py-2 rounded-full text-sm h-10"
                : "w-full h-16 rounded-2xl text-base px-4" // Balanced height for a cleaner look
            }
            ${
              active === t.key
                ? "bg-[#0f172a] text-white shadow-lg shadow-slate-200"
                : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-black"
            }
          `}
        >
          {t.label}
        </button>
      ))}
    </div>
  </div>
</div>
        {/* CONTENT */}
        <div
          key={active}
          className="bg-white rounded-2xl shadow-md p-10 grid lg:grid-cols-2 gap-12 animate-slideUp"
        >
          <div>
            <h3 className="text-4xl font-semibold text-gray-900 leading-tight">
              {data.title}
            </h3>

            <div className="flex gap-4 mt-6">
              <button className="bg-black text-white px-6 py-3 rounded-xl font-semibold">
                Get started for free
              </button>
              <button className="bg-black text-white px-6 py-3 rounded-xl font-semibold">
                Learn more
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              {data.features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} className="bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                    <Icon size={22} className="mb-2 text-gray-800" />
                    <div className="font-semibold">{f.title}</div>
                    <div className="text-sm text-gray-600 mt-1">{f.desc}</div>
                  </div>
                );
              })}
            </div>

            <ul className="mt-8 space-y-3">
              {data.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-gray-700">
                  <span className="mt-1 text-green-600">✔</span>
                  <span>
                    <strong>{b.split(":")[0]}:</strong>
                    {b.split(":")[1]}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full h-90 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
              Visual Preview Area
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductTabs;