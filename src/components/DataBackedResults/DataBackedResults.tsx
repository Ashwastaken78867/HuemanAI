import { Smile, DollarSign, Users } from "lucide-react";

const stats = [
  {
    icon: Smile,
    value: "92%",
    title: "Improvement in Guest Satisfaction",
    desc: "Measured across all touchpoints",
  },
  {
    icon: DollarSign,
    value: "48%",
    title: "Reduction in Operational Costs",
    desc: "Through intelligent automation",
  },
  {
    icon: Users,
    value: "91%",
    title: "Faster Hiring",
    desc: "Fill essential roles in 4 days vs 45-day industry average",
  },
];

export const DataBackedResults = () => {
  return (
    <section className="w-full py-24 bg-linear-to-b from-[#2f3e52] to-[#243246] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-medium tracking-wide">
          Delegate the busy work, focus on your guests
        </h2>

        {/* Sub */}
        <p className="mt-3 text-slate-300">Data-Backed Results</p>

        {/* Cards */}
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-10 text-center hover:bg-white/10 transition"
              >
                {/* Icon */}
                <div className="mx-auto w-14 h-14 rounded-xl bg-emerald-500 flex items-center justify-center mb-6">
                  <Icon size={26} />
                </div>

                {/* Value */}
                <div className="text-5xl font-semibold">{s.value}</div>

                {/* Title */}
                <div className="mt-3 text-lg text-white/90">
                  {s.title}
                </div>

                {/* Desc */}
                <div className="mt-2 text-sm text-slate-400">
                  {s.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};