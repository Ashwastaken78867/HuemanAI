import {
  Database,
  DollarSign,
  Search,
  Zap,
  Users,
  Plug,
} from "lucide-react";

const cards = [
  {
    title: "Centralised Guest Data",
    desc: "A 360° view of every customer, unifying PMS and POS interactions.",
    icon: Database,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Autonomous Revenue",
    desc: "High-performance sales agents capture leads 24/7.",
    icon: DollarSign,
    gradient: "from-emerald-500 to-green-600",
  },
  {
    title: "AI Search Power",
    desc: "Dominate local SEO autonomously.",
    icon: Search,
    gradient: "from-fuchsia-500 to-pink-500",
  },
  {
    title: "Instant Task Sync",
    desc: "Seamlessly bridge guest requests and staff actions.",
    icon: Zap,
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Rapid Recruitment",
    desc: "Automated screening to secure top hospitality talent.",
    icon: Users,
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Simple Integrations",
    desc: "Plug-and-play with Opera, Mews, and Cloudbeds.",
    icon: Plug,
    gradient: "from-emerald-500 to-teal-500",
  },
];

export default function AdvantageSection() {
  return (
    <section className="bg-[#f7f9fb] py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-800">
            The HuemanAI OS Advantage
          </h2>
          <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
            Everything you need to transform your hospitality operations in one unified platform
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl p-8 text-white bg-linear-to-br ${card.gradient}
                transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
              >
                {/* Glow circles */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>

                {/* Icon badge */}
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                  <Icon size={22} />
                </div>

                {/* Text */}
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-white/90 text-sm leading-relaxed max-w-md">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}