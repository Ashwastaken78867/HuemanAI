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
import { motion, AnimatePresence, type Variants } from "framer-motion";

type TabKey = "sales" | "marketing" | "operations" | "table";

// Each tab has an icon used in the tall (expanded) card state
const tabs: { key: TabKey; label: string; Icon: any }[] = [
  { key: "sales",      label: "Sales & Revenue",      Icon: DollarSign },
  { key: "marketing",  label: "Marketing and Growth",  Icon: Search     },
  { key: "operations", label: "Operations",            Icon: Users      },
  { key: "table",      label: "Table booking System",  Icon: Calendar   },
];

const content: Record<TabKey, any> = {
  sales: {
    title: "Drive Direct Revenue with Autonomous Sales Agents",
    features: [
      { icon: DollarSign, title: "Sales & Upselling Agent", desc: "24/7 autonomous voice receptionist for bookings." },
      { icon: Sparkles,   title: "Revenue Intelligence",    desc: "Real-time PMS sync for total asset optimization." },
      { icon: BarChart,   title: "Insights & Competition",  desc: "Dynamic pricing to outperform local competitors." },
      { icon: Calendar,   title: "Event Sales Agent",       desc: "Instant automation for group and event inquiries." },
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
      { icon: Search,        title: "SEO Marketing Agent",     desc: "Autonomous content and ranking optimization." },
      { icon: Star,          title: "Reputation & Conversion", desc: "Instant review management to drive guest trust." },
      { icon: Settings,      title: "Digital Brand Manager",   desc: "AI-driven consistency across every touchpoint." },
      { icon: MessageCircle, title: "Social & Community Agent",desc: "24/7 engagement across all digital channels." },
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
      { icon: Users,         title: "Talent Lifecycle Agent",    desc: "Automated hiring, onboarding, and performance." },
      { icon: ClipboardList, title: "Scheduling Intelligence",   desc: "Demand-driven shifts with labor cost control." },
      { icon: Settings,      title: "Concierge & Request Agent", desc: "AI routing for seamless guest service delivery." },
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
      { icon: Calendar, title: "Reservation Agent",      desc: "24/7 automated table booking and guest coordination." },
      { icon: BarChart, title: "Menu Optimization",      desc: "AI-driven menu engineering and pricing strategies." },
      { icon: ChefHat,  title: "Guest Experience Agent", desc: "Personalized dining recommendations and requests." },
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

// ... all imports and data unchanged ...

export const ProductTabs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection]     = useState(1);
  const [compact, setCompact]         = useState(false);

  const outerRef      = useRef<HTMLDivElement | null>(null);
  const lastWheelTime = useRef(0);

  const keys      = tabs.map(t => t.key);
  const activeKey = keys[activeIndex];
  const data      = content[activeKey];

  const goTo = (index: number) => {
    if (index < 0 || index >= keys.length) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  // scroll logic unchanged
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (!outerRef.current) return;
      const rect = outerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const pinned = rect.top <= 0 && rect.bottom >= vh;
      if (!pinned) return;

      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      if (scrollingDown && activeIndex === keys.length - 1) return;
      if (scrollingUp && activeIndex === 0) return;

      const now = Date.now();
      if (now - lastWheelTime.current < 500) { e.preventDefault(); return; }

      e.preventDefault();
      lastWheelTime.current = now;

      if (scrollingDown) goTo(activeIndex + 1);
      if (scrollingUp) goTo(activeIndex - 1);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [activeIndex, keys.length]);

  useEffect(() => {
    const onScroll = () => {
      if (!outerRef.current) return;
      const rect = outerRef.current.getBoundingClientRect();
      setCompact(rect.top <= 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


const slideVariants: Variants = {
  enter: {
    opacity: 0,
    x: direction * 60,
    scale: 0.97,
  },
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as any, // ← fix
    },
  },
  exit: {
    opacity: 0,
    x: direction * -60,
    scale: 0.97,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1] as any, // ← fix
    },
  },
};
  return (
    <div ref={outerRef} className="relative w-full bg-[#f7f9fb]" style={{ height:"200vh" }}>
      <div className="sticky top-0 h-screen flex items-center w-full bg-[#f7f9fb] py-6">
        <div className="max-w-6xl mx-auto px-6 w-full flex flex-col justify-center">

          {/* TABS FIXED */}
          <motion.div
            layout
            transition={{ type:"spring", stiffness:420, damping:32 }}
            className="bg-white shadow-sm border border-gray-100 rounded-2xl p-2 w-full mb-4"
          >
            <div className="grid grid-cols-4 gap-2 w-full">
              {tabs.map((t,i)=>{
                const Icon = t.Icon;
                const isActive = activeKey===t.key;

                return (
                  <motion.button
                    key={t.key}
                    onClick={()=>goTo(i)}
                    layout
                    whileTap={{ scale:0.96 }}
                    transition={{ type:"spring", stiffness:420, damping:32 }}
                    style={{ height: compact ? 48 : 128 }}
                    className={`
                      relative w-full overflow-hidden
                      flex items-center justify-center
                      ${compact ? "rounded-xl" : "rounded-2xl"}
                      ${isActive ? "text-white shadow-sm" : "bg-gray-50 text-gray-500 hover:bg-gray-100"}
                    `}
                  >
                    {/* Active bg */}
                    {isActive && (
                      <motion.span
                        layoutId="activeTabBg"
                        className={`absolute inset-0 bg-[#0f172a] ${compact?"rounded-xl":"rounded-2xl"}`}
                        transition={{ type:"spring", stiffness:420, damping:32 }}
                      />
                    )}

                    {/* Inner content */}
                    <div
                      className={`
                        relative z-10 flex items-center justify-center
                        ${compact ? "flex-row gap-2 px-3" : "flex-col gap-3 px-4"}
                      `}
                    >
                      <Icon
                        size={compact ? 16 : 28}
                        className={isActive ? "text-white" : "text-gray-400"}
                      />

                      <span className={`text-center leading-tight ${compact?"text-xs":"text-sm"}`}>
                        {t.label}
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
          {/* END TABS */}

          {/* Content unchanged */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeKey}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="bg-white rounded-2xl shadow-md p-5 grid lg:grid-cols-2 gap-6 items-center max-h-[70vh]"
            >
              {/* ... content unchanged exactly ... */}





              <div>
                <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 leading-snug">
                  {data.title}
                </h3>

                <div className="flex gap-3 mt-3">
                  <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    Get started for free
                  </button>
                  <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    Learn more
                  </button>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 mt-4">
                  {data.features.map((f: any, i: number) => {
                    const Icon = f.icon;
                    return (
                      <div key={i} className="bg-gray-50 p-3 rounded-lg shadow-sm">
                        <Icon size={18} className="mb-1 text-gray-800" />
                        <div className="font-semibold text-sm">{f.title}</div>
                        <div className="text-xs text-gray-600 mt-0.5">{f.desc}</div>
                      </div>
                    );
                  })}
                </div>

                <ul className="mt-3 space-y-1.5">
                  {data.bullets.map((b: string, i: number) => (
                    <li key={i} className="flex gap-2 text-gray-700 text-xs">
                      <span className="mt-0.5 text-green-600">✔</span>
                      <span>
                        <strong>{b.split(":")[0]}:</strong>
                        {b.split(":")[1]}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-full h-56 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 text-sm">
                  Visual Preview Area
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
