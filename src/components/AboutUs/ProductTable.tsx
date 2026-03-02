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

const HEADER_OFFSET = 80;

/* ---------------- Tabs ---------------- */
const tabs: { key: TabKey; label: string }[] = [
  { key: "sales", label: "Sales & Revenue" },
  { key: "marketing", label: "Marketing and Growth" },
  { key: "operations", label: "Operations" },
  { key: "table", label: "Table booking System" },
];

/* ---------------- Content ---------------- */
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

/* ---------------- Animations ---------------- */
const rise: Variants = {
  enter: { y: "100%", opacity: 0 },
  center: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    y: "-60%",
    opacity: 0,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
};

const containerMorph: Variants = {
  enter: { y: 40, opacity: 0 },
  center: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    y: -40,
    opacity: 0,
    transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
  },
};

/* ---------------- Component ---------------- */
export const ProductTabs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const outerRef = useRef<HTMLDivElement | null>(null);
  const tabsRef = useRef<HTMLDivElement | null>(null);

  const isStepping = useRef(false);
  const enteredFromBottom = useRef(false);
  const enteredFromTop = useRef(false);

  const keys = tabs.map(t => t.key);
  const activeKey = keys[activeIndex];
  const data = content[activeKey];

  /* ---------- Page-step scroll ---------- */
const scrollAccum = useRef(0);
const STEP_THRESHOLD = 90; // trackpad distance

useEffect(() => {
  let isAnimatingLocal = false;

  const STEP_COOLDOWN = 420; // match animation
  const PIN_TOLERANCE = 2;

  const onWheel = (e: WheelEvent) => {
    if (!tabsRef.current) return;

    const rect = tabsRef.current.getBoundingClientRect();
    const pinned = Math.abs(rect.top - HEADER_OFFSET) <= PIN_TOLERANCE;

    // not in sticky zone → normal page scroll
    if (!pinned) {
      enteredFromBottom.current = false;
      enteredFromTop.current = false;
      return;
    }

    const delta = e.deltaY;
    const direction = delta > 0 ? 1 : -1;

    // detect entry direction
    if (direction === -1 && !enteredFromBottom.current) {
      enteredFromBottom.current = true;
      setActiveIndex(keys.length - 1);
      return;
    }

    if (direction === 1 && !enteredFromTop.current) {
      enteredFromTop.current = true;
      setActiveIndex(0);
      return;
    }

    // ignore momentum during animation
    if (isAnimatingLocal) {
      e.preventDefault();
      return;
    }

    // allow page scroll at edges
    if (activeIndex === 0 && direction === -1) return;
    if (activeIndex === keys.length - 1 && direction === 1) return;

    // trigger exactly ONE step
    e.preventDefault();
    isAnimatingLocal = true;

    setActiveIndex((i) => {
      const next = i + direction;
      return Math.max(0, Math.min(keys.length - 1, next));
    });

    // unlock after animation
    setTimeout(() => {
      isAnimatingLocal = false;
    }, STEP_COOLDOWN);
  };

  window.addEventListener("wheel", onWheel, { passive: false });
  return () => window.removeEventListener("wheel", onWheel);
}, [activeIndex, keys.length]);

  return (
    <div ref={outerRef} className="relative w-full bg-white" style={{ minHeight: "140vh" }}>
      <div className="sticky top-[80px] h-[calc(100vh-80px)] flex flex-col">

        {/* Tabs */}
        <div
          ref={tabsRef}
          className="w-full max-w-7xl mx-auto mb-4 bg-white rounded-2xl border border-[#e6e9ee] p-2"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {tabs.map((t, i) => (
              <button
                key={t.key}
                onClick={() => setActiveIndex(i)}
                className={`px-4 py-5 rounded-lg text-sm lg:text-base transition ${
                  activeIndex === i
                    ? "bg-[#14142c] text-white"
                    : "bg-[#62ff84]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="w-full max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeKey}
              variants={containerMorph}
              initial="enter"
              animate="center"
              exit="exit"
              className="bg-white rounded-2xl border border-[#e6e9ee] p-10 lg:p-12 min-h-[560px] grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left */}
              <div>
                <div className="overflow-hidden">
                  <motion.h3
                    variants={rise}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="text-3xl lg:text-[34px] leading-tight font-semibold text-gray-900"
                  >
                    {data.title}
                  </motion.h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  {data.features.map((f: any, i: number) => {
                    const Icon = f.icon;
                    return (
                      <div key={i} className="overflow-hidden">
                        <motion.div
                          variants={rise}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ delay: i * 0.08 }}
                          className="border border-[#e6e9ee] p-4 rounded-xl min-h-[92px]"
                        >
                          <Icon size={18} className="mb-1 text-gray-800" />
                          <div className="font-semibold text-[15px]">
                            {f.title}
                          </div>
                          <div className="text-[13px] text-gray-600">
                            {f.desc}
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>

                <ul className="mt-6 space-y-2 text-[14px] text-gray-700">
                  {data.bullets.map((b: string, i: number) => (
                    <li key={i} className="overflow-hidden flex">
                      <motion.div
                        variants={rise}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ delay: i * 0.06 }}
                        className="flex"
                      >
                        <span className="text-green-600 mr-2">✔</span>
                        <span>{b}</span>
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="overflow-hidden flex justify-center">
                <motion.div
                  variants={rise}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <img
                    src={hero}
                    className="w-full max-w-[520px] rounded-xl shadow"
                    alt="preview"
                  />
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default ProductTabs;