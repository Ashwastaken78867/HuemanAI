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

/* ---------- Per-element Apollo reveal ---------- */
const rise: Variants = {
  enter: { y: "100%", opacity: 0 },
  center: (isSwitch: boolean = false) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: isSwitch ? 0.7 : 1.15,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  exit: {
    y: "-60%",
    opacity: 0,
    transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
  },
};

/* ---------- Apollo vertical morph container ---------- */
const containerMorph: Variants = {
  enter: {
    y: 40,
    opacity: 0,
  },
  center: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    y: -40,
    opacity: 0,
    transition: {
      duration: 0.45,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const ProductTabs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [compact, setCompact] = useState(false);

  const outerRef = useRef<HTMLDivElement | null>(null);
  const lastWheelTime = useRef(0);
  const compactJustEntered = useRef(false);
  const compactScrollBlock = useRef(0);
  const edgeLock = useRef<"start" | "end" | null>(null);

  const keys = tabs.map(t => t.key);
  const activeKey = keys[activeIndex];
  const data = content[activeKey];

  const goTo = (i: number) => {
    if (i < 0 || i >= keys.length) return;
    setActiveIndex(i);
  };

  /* ---------- Wheel (your logic) ---------- */
 const enteredFromBottom = useRef(false);
const enteredFromTop = useRef(false);

useEffect(() => {
  const onWheel = (e: WheelEvent) => {
    if (!outerRef.current) return;

    const rect = outerRef.current.getBoundingClientRect();
    const vh = window.innerHeight;

    const pinned =
      rect.top <= HEADER_OFFSET &&
      rect.bottom >= vh - HEADER_OFFSET;

    if (!pinned) {
      enteredFromBottom.current = false;
      enteredFromTop.current = false;
      return;
    }

    const down = e.deltaY > 0;
    const up = e.deltaY < 0;

    /* --- Detect entry direction --- */
    if (!enteredFromBottom.current && rect.bottom < vh) {
      enteredFromBottom.current = true;
      setActiveIndex(keys.length - 1); // force tab 4
    }

    if (!enteredFromTop.current && rect.top > HEADER_OFFSET) {
      enteredFromTop.current = true;
      setActiveIndex(0); // force tab 1
    }

    /* --- Step through tabs --- */
    if (down && activeIndex < keys.length - 1) {
      e.preventDefault();

      const now = Date.now();
      if (now - lastWheelTime.current < 550) return;
      lastWheelTime.current = now;

      setActiveIndex(i => Math.min(i + 1, keys.length - 1));
      return;
    }

    if (up && activeIndex > 0) {
      e.preventDefault();

      const now = Date.now();
      if (now - lastWheelTime.current < 550) return;
      lastWheelTime.current = now;

      setActiveIndex(i => Math.max(i - 1, 0));
      return;
    }

    /* --- Allow page scroll at edges --- */
    if (activeIndex === 0 && up) return;
    if (activeIndex === keys.length - 1 && down) return;
  };

  window.addEventListener("wheel", onWheel, { passive: false });
  return () => window.removeEventListener("wheel", onWheel);
}, [activeIndex, keys.length]);

  /* ---------- Scroll detect ---------- */
  useEffect(() => {
    const onScroll = () => {
      if (!outerRef.current) return;

      const rect = outerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      const nextCompact = rect.top <= HEADER_OFFSET;

      if (nextCompact && !compact) {
        compactScrollBlock.current = 25;
        edgeLock.current = "start";
        compactJustEntered.current = true;
      }

      const atEnd =
        rect.bottom <= vh + HEADER_OFFSET &&
        rect.bottom >= vh - HEADER_OFFSET;

      if (nextCompact && atEnd && activeIndex === keys.length - 1) {
        if (edgeLock.current !== "end") {
          compactScrollBlock.current = 25;
          edgeLock.current = "end";
        }
      }

      setCompact(nextCompact);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [compact, activeIndex]);

  useEffect(() => {
    if (compactJustEntered.current) {
      compactJustEntered.current = false;
    }
  }, [activeIndex]);

  return (
    <div ref={outerRef} className="relative w-full bg-white" style={{ minHeight: "120vh" }}>
      <div className="sticky top-[80px] h-[calc(100vh-80px)] flex flex-col">

        {/* Tabs */}
        <div className="w-full max-w-7xl mx-auto mb-4 bg-white rounded-2xl border border-[#e6e9ee] p-2">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {tabs.map((t, i) => (
              <button
                key={t.key}
                onClick={() => goTo(i)}
                className={`px-4 py-5 rounded-lg text-sm lg:text-base ${
                  activeIndex === i ? "bg-[#14142c] text-white" : "bg-[#62ff84]"
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
  {/* LEFT CONTENT */}
  <div>
    {/* Title */}
    <div className="overflow-hidden">
      <motion.h3
        variants={rise}
        custom={true}
        initial="enter"
        animate="center"
        exit="exit"
        className="text-3xl lg:text-[34px] leading-tight font-semibold text-gray-900"
      >
        {data.title}
      </motion.h3>
    </div>

    {/* Feature Cards */}
    <div className="grid sm:grid-cols-2 gap-4 mt-6">
      {data.features.map((f: any, i: number) => {
        const Icon = f.icon;
        return (
          <div key={i} className="overflow-hidden">
            <motion.div
              variants={rise}
              custom={true}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ delay: i * 0.11 }}
              className="border border-[#e6e9ee] p-4 rounded-xl min-h-[92px] flex flex-col justify-center"
            >
              <Icon size={18} className="mb-1 text-gray-800" />
              <div className="font-semibold text-[15px] leading-tight">
                {f.title}
              </div>
              <div className="text-[13px] text-gray-600 leading-snug mt-0.5">
                {f.desc}
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>

    {/* Bullets */}
    <ul className="mt-6 space-y-2 text-[14px] text-gray-700">
      {data.bullets.map((b: string, i: number) => (
        <li key={i} className="overflow-hidden flex">
          <motion.div
            variants={rise}
            custom={true}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ delay: i * 0.1 }}
            className="flex"
          >
            <span className="text-green-600 mr-2">✔</span>
            <span>{b}</span>
          </motion.div>
        </li>
      ))}
    </ul>
  </div>

  {/* IMAGE */}
  <div className="overflow-hidden flex justify-center">
    <motion.div
      variants={rise}
      custom={true}
      initial="enter"
      animate="center"
      exit="exit"
    >
      <img
        src={hero}
        className="w-full max-w-[520px] rounded-xl shadow"
        alt="Product preview"
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