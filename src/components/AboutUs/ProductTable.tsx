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

// Each tab has an icon used in the tall (expanded) card state
const tabs: { key: TabKey; label: string; Icon: any; activeBg: string }[] = [
  {
    key: "sales", label: "Sales & Revenue",
    Icon: undefined,
    activeBg: ""
  },
  {
    key: "marketing", label: "Marketing and Growth",
    Icon: undefined,
    activeBg: ""
  },
  {
    key: "operations", label: "Operations",
    Icon: undefined,
    activeBg: ""
  },
  {
    key: "table", label: "Table booking System",
    Icon: undefined,
    activeBg: ""
  },
];
const content: Record<TabKey, any> = {
  sales: {
    title: "Drive Direct Revenue with Autonomous Sales Agents",
    features: [
      { icon: DollarSign, title: "& Upselling Agent", desc: "24/7 autonomous voice receptionist for bookings." },
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
  const [, setDirection] = useState(1);
  const [compact, setCompact] = useState(false);

  const outerRef = useRef<HTMLDivElement | null>(null);
  const lastWheelTime = useRef(0);
  const compactJustEntered = useRef(false);

  // 🔒 locks
  const compactScrollBlock = useRef(0);
  const edgeLock = useRef<"start" | "end" | null>(null);

  const keys = tabs.map(t => t.key);
  const activeKey = keys[activeIndex];
  const data = content[activeKey];

  const goTo = (index: number) => {
    if (index < 0 || index >= keys.length) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  // ✅ wheel logic (corrected)
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (!outerRef.current) return;

      const rect = outerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      // only when compact visible
      if (!compact) return;

      const pinned = rect.top <= 40 && rect.bottom >= vh - 40;
      if (!pinned) return;

      // 🔒 entry lock (stay on tab 1 after shrink)
      if (compactScrollBlock.current > 0) {
        e.preventDefault();
        compactScrollBlock.current -= 1;
        return;
      }

      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      // 🔒 edge pause at first
      if (activeIndex === 0 && scrollingUp) {
        if (edgeLock.current !== "start") {
          e.preventDefault();
          edgeLock.current = "start";
          compactScrollBlock.current = 2;
          return;
        }
        return;
      }

      // 🔒 edge pause at last
      if (activeIndex === keys.length - 1 && scrollingDown) {
        if (edgeLock.current !== "end") {
          e.preventDefault();
          edgeLock.current = "end";
          compactScrollBlock.current = 2;
          return;
        }
        return;
      }

      const now = Date.now();
      if (now - lastWheelTime.current < 650) {
        e.preventDefault();
        return;
      }

      e.preventDefault();
      lastWheelTime.current = now;
      edgeLock.current = null;

      if (scrollingDown) goTo(activeIndex + 1);
      if (scrollingUp) goTo(activeIndex - 1);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [activeIndex, keys.length, compact]);


  useEffect(() => {
  const onScroll = () => {
    if (!outerRef.current) return;

    const rect = outerRef.current.getBoundingClientRect();
    const vh = window.innerHeight;

    const nextCompact = rect.top <= 40;

    // 🔒 entering compact → long pause at tab 1
    if (nextCompact && !compact) {
      compactScrollBlock.current = 25;
      edgeLock.current = "start";
      compactJustEntered.current = true;
    }

    // 🔒 reaching end of section → long pause at tab 4
    const atEnd =
      rect.bottom <= vh + 40 && rect.bottom >= vh - 40;

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
}, [compact, activeIndex, keys.length]);

  // reset shrink flag
  useEffect(() => {
    if (compactJustEntered.current) {
      compactJustEntered.current = false;
    }
  }, [activeIndex]);




const rise: Variants = {
  enter: (_delay: number = 0) => ({
    opacity: 0,
    y: 80, // start clearly below final position
  }),
  center: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1] as const,
      delay,
    },
  }),
  exit: {
    opacity: 0,
    y: -40,
    transition: {
      duration: 0.9,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

const imageRise: Variants = {
  enter: {
    opacity: 0,
    y: 120, // deeper start from below
    scale: 0.98,
  },
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.7,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: 0.44,
    },
  },
  exit: {
    opacity: 0,
    y: -60,
    scale: 0.98,
    transition: {
      duration: 1.0,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

  return (
<div
  ref={outerRef}
  className="relative w-full bg-white"
  style={{ minHeight: "120vh" }}
>
  <div className="sticky top-18 h-screen flex items-start w-full pt-0 pb-2 bg-white">
    <div className="w-full flex flex-col bg-white">
      {/* APOLLO TABS */}
      <div
      className="relative w-full mb-2 duration-300"
      >
        {/* COMPACT SEGMENTED BUTTON BAR */}
     <motion.div
  initial={{ opacity: 0, y: 16, scale: 0.96 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
  className="relative w-full mb-4 flex items-center bg-white"
>
  <div className="w-full max-w-7xl mx-auto bg-white rounded-2xl border border-[#e6e9ee] p-2">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3">
      {tabs.map((t, i) => {
        const isActive = activeKey === t.key;

        return (
          <motion.button
            key={t.key}
            onClick={() => goTo(i)}
            className={`
              relative w-full
              px-4 lg:px-8 py-5 lg:py-6
              rounded-lg
              text-sm lg:text-base
              font-normal
              flex items-center justify-center text-center
              transition-colors duration-200
              ${
                isActive
                  ? "bg-[#14142c] text-white"
                  : "bg-[#62ff84] text-black hover:bg-[#4ee86d]"
              }
            `}
          >
            <span className="leading-tight">{t.label}</span>
          </motion.button>
        );
      })}
    </div>
  </div>
</motion.div>
            
      </div>
    {/* </div>
  </div>
</div> */}

      {/* CONTENT */}
     {/* CONTENT */}
<div className="w-full bg-white">
  <AnimatePresence>
    <div className="w-full max-w-7xl mx-auto">
      <motion.div
        className="bg-white rounded-2xl border border-[#e6e9ee] p-5 grid lg:grid-cols-2 gap-8 items-center"
        style={{ minHeight: 260 }}
      >
        {/* TEXT COLUMN (static container) */}
        <div key={activeKey + "-text"}>
          
          {/* TITLE */}
          <motion.h3
            custom={0.10}
            variants={rise}
            initial="enter"
            animate="center"
            exit="exit"
            className="text-2xl lg:text-3xl font-semibold text-gray-900 leading-snug"
          >
            {data.title}
          </motion.h3>

          {/* BUTTONS */}
          <motion.div
            custom={0.24}
            variants={rise}
            initial="enter"
            animate="center"
            exit="exit"
            className="flex gap-3 mt-3"
          >
            <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold">
              Get started for free
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold">
              Learn more
            </button>
          </motion.div>

          {/* FEATURES */}
          <motion.div
            custom={0.36}
            variants={rise}
            initial="enter"
            animate="center"
            exit="exit"
            className="grid sm:grid-cols-2 gap-3 mt-4"
          >
            {data.features.map((f: any, i: number) => {
              const Icon = f.icon;
              return (
                <div key={i} className="bg-white border border-[#e6e9ee] p-3 rounded-lg">
                  <Icon size={18} className="mb-1 text-gray-800" />
                  <div className="font-semibold text-sm">{f.title}</div>
                  <div className="text-xs text-gray-600 mt-0.5">{f.desc}</div>
                </div>
              );
            })}
          </motion.div>

          {/* BULLETS */}
          <motion.ul
            custom={0.52}
            variants={rise}
            initial="enter"
            animate="center"
            exit="exit"
            className="mt-3 space-y-1.5"
          >
            {data.bullets.map((b: string, i: number) => (
              <li key={i} className="flex gap-2 text-gray-700 text-xs">
                <span className="mt-0.5 text-green-600">✔</span>
                <span>
                  <strong>{b.split(":")[0]}:</strong>
                  {b.split(":")[1]}
                </span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* IMAGE */}
        <motion.div
          key={activeKey + "-image"}
          variants={imageRise}
          initial="enter"
          animate="center"
          exit="exit"
          className="flex items-center justify-center"
        >
          <img
            src={hero}
            alt="Product preview"
            className="w-full max-w-130 rounded-xl object-contain shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
          />
        </motion.div>
      </motion.div>
    </div>
  </AnimatePresence>
</div>

    </div>
  </div>
</div>
  );
};

export default ProductTabs;