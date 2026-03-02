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
import hero from "../../assets/hero.png";

type TabKey = "sales" | "marketing" | "operations" | "table";

const HEADER_OFFSET = 80; // ✅ matches h-20 header

const tabs: { key: TabKey; label: string }[] = [
  { key: "sales", label: "Sales & Revenue" },
  { key: "marketing", label: "Marketing and Growth" },
  { key: "operations", label: "Operations" },
  { key: "table", label: "Table booking System" },
];

const content: Record<TabKey, any> = {
  sales: {
    title: "Drive Direct Revenue with Autonomous Sales Agents",
    features: [
      { icon: DollarSign, title: "Upselling Agent", desc: "24/7 autonomous voice receptionist." },
      { icon: Sparkles, title: "Revenue Intelligence", desc: "Real-time PMS sync optimization." },
      { icon: BarChart, title: "Insights & Competition", desc: "Dynamic pricing intelligence." },
      { icon: Calendar, title: "Event Sales Agent", desc: "Automation for group bookings." },
    ],
    bullets: [
      "Higher Search Visibility: Dominating local search.",
      "Automated Social Growth: Consistent presence.",
      "Enhanced Guest Trust: Rapid review response.",
      "Data-Driven Campaigns: High-performing outreach.",
    ],
  },
  marketing: {
    title: "Automate Guest Acquisition and Digital Authority",
    features: [
      { icon: Search, title: "SEO Marketing Agent", desc: "Autonomous ranking optimization." },
      { icon: Star, title: "Reputation & Conversion", desc: "Instant review management." },
      { icon: Settings, title: "Digital Brand Manager", desc: "Consistency across touchpoints." },
      { icon: MessageCircle, title: "Social & Community", desc: "24/7 engagement." },
    ],
    bullets: [
      "Reduced Labor Costs: Optimize schedules.",
      "Faster Hiring: AI-screened candidates.",
      "Zero Task Slippage: Automated reminders.",
      "Real-Time Transparency: Team alignment.",
    ],
  },
  operations: {
    title: "Streamline Workforce and Front-Desk Operations",
    features: [
      { icon: MessageCircle, title: "Conversational Ops", desc: "Instant staff coordination." },
      { icon: Users, title: "Talent Lifecycle", desc: "Automated hiring lifecycle." },
      { icon: ClipboardList, title: "Scheduling AI", desc: "Demand-driven shifts." },
      { icon: Settings, title: "Concierge Agent", desc: "Guest service routing." },
    ],
    bullets: [
      "Maximize Table Turnover: AI seating.",
      "Reduce No-Shows: Auto reminders.",
      "Increase F&B Revenue: Smart upsell.",
      "Lower Food Waste: Predictive inventory.",
    ],
  },
  table: {
    title: "Intelligent Restaurant & F&B Management",
    features: [
      { icon: Calendar, title: "Reservation Agent", desc: "24/7 bookings." },
      { icon: BarChart, title: "Menu Optimization", desc: "AI pricing strategy." },
      { icon: ChefHat, title: "Guest Experience", desc: "Personalized dining." },
      { icon: Utensils, title: "Inventory AI", desc: "Smart ordering." },
    ],
    bullets: [
      "Reduced Labor Costs: Demand scheduling.",
      "Faster Hiring: AI screening.",
      "Zero Task Slippage: Automation.",
      "Real-Time Transparency: Visibility.",
    ],
  },
};

export const ProductTabs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [compact, setCompact] = useState(false);

  const outerRef = useRef<HTMLDivElement | null>(null);
  const lastWheelTime = useRef(0);

  const keys = tabs.map(t => t.key);
  const activeKey = keys[activeIndex];
  const data = content[activeKey];

  const goTo = (index: number) => {
    if (index < 0 || index >= keys.length) return;
    setActiveIndex(index);
  };

  // ✅ Scroll → tab switching
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (!outerRef.current || !compact) return;

      const rect = outerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      const pinned =
        rect.top <= HEADER_OFFSET &&
        rect.bottom >= vh - HEADER_OFFSET;

      if (!pinned) return;

      const now = Date.now();
      if (now - lastWheelTime.current < 650) {
        e.preventDefault();
        return;
      }

      const down = e.deltaY > 0;
      const up = e.deltaY < 0;

      if (down && activeIndex < keys.length - 1) {
        e.preventDefault();
        lastWheelTime.current = now;
        goTo(activeIndex + 1);
      }

      if (up && activeIndex > 0) {
        e.preventDefault();
        lastWheelTime.current = now;
        goTo(activeIndex - 1);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [activeIndex, compact]);

  // ✅ Detect sticky enter
  useEffect(() => {
    const onScroll = () => {
      if (!outerRef.current) return;

      const rect = outerRef.current.getBoundingClientRect();
      const nextCompact = rect.top <= HEADER_OFFSET;

      setCompact(nextCompact);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  
const rise: Variants = {
  enter: (depth: number = 0) => ({
    opacity: 0,
    y: 30 + depth * 8, // Apollo layered lift
  }),
  center: (depth: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      delay: depth * 0.09,
    },
  }),
  exit: (depth: number = 0) => ({
    opacity: 0,
    y: -24 - depth * 6,
    transition: {
      duration: 0.45,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

const imageRise: Variants = {
  enter: {
    opacity: 0,
    y: 70,
    scale: 0.97,
  },
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.18,
    },
  },
  exit: {
    opacity: 0,
    y: -40,
    scale: 0.97,
    transition: {
      duration: 0.45,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

  return (
    <div
      ref={outerRef}
      className="relative w-full bg-white"
      style={{ minHeight: "120vh" }}
    >
      <div className="sticky top-[80px] h-[calc(100vh-80px)] flex flex-col">
        {/* Tabs */}
        <div className="w-full max-w-7xl mx-auto mb-4 bg-white rounded-2xl border border-[#e6e9ee] p-2">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {tabs.map((t, i) => (
              <button
                key={t.key}
                onClick={() => goTo(i)}
                className={`px-4 py-5 rounded-lg text-sm lg:text-base ${
                  activeIndex === i
                    ? "bg-[#14142c] text-white"
                    : "bg-[#62ff84] text-black"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
       <div className="w-full max-w-7xl mx-auto">
  <AnimatePresence mode="wait">
    <motion.div
      key={activeKey}
      className="bg-white rounded-2xl border border-[#e6e9ee] p-6 grid lg:grid-cols-2 gap-8 items-center"
    >
      {/* Text column */}
      <div>
        {/* TITLE */}
        <motion.h3
          variants={rise}
          custom={0}
          initial="enter"
          animate="center"
          exit="exit"
          className="text-2xl lg:text-3xl font-semibold text-gray-900"
        >
          {data.title}
        </motion.h3>

        {/* FEATURES */}
        <motion.div
          variants={rise}
          custom={2}
          initial="enter"
          animate="center"
          exit="exit"
          className="grid sm:grid-cols-2 gap-3 mt-4"
        >
          {data.features.map((f: any, i: number) => {
            const Icon = f.icon;
            return (
              <div key={i} className="border border-[#e6e9ee] p-3 rounded-lg">
                <Icon size={18} />
                <div className="font-semibold text-sm">{f.title}</div>
                <div className="text-xs text-gray-600">{f.desc}</div>
              </div>
            );
          })}
        </motion.div>

        {/* BULLETS */}
        <motion.ul
          variants={rise}
          custom={3}
          initial="enter"
          animate="center"
          exit="exit"
          className="mt-4 space-y-1 text-xs text-gray-700"
        >
          {data.bullets.map((b: string, i: number) => (
            <li key={i}>✔ {b}</li>
          ))}
        </motion.ul>
      </div>

      {/* IMAGE */}
      <motion.div
        variants={imageRise}
        initial="enter"
        animate="center"
        exit="exit"
        className="flex justify-center"
      >
        <img
          src={hero}
          className="w-full max-w-md rounded-xl shadow"
        />
      </motion.div>
    </motion.div>
  </AnimatePresence>
</div>
      </div>
    </div>
  );
};

export default ProductTabs;