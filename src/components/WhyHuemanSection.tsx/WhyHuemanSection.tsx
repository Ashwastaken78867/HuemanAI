import { DollarSign, Layers, Award } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Flexible and Transparent Pricing",
    desc: "Clear, value-driven models tailored to your property size. No hidden fees, no surprises—just honest pricing that scales with your success.",
    color: "from-emerald-500 to-emerald-600",
    active: true,
  },
  {
    icon: Layers,
    title: "Built for the Way Modern Hotels Actually Work",
    desc: "A unified workflow designed for the high-pressure demands of hotels and restaurants. We understand your reality because we built this with hospitality leaders.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Award,
    title: "Designed for Hospitality Leaders and Innovators",
    desc: "The new standard of service for those who want to lead the market. Stay ahead of competitors with cutting-edge AI technology.",
    color: "from-pink-500 to-fuchsia-500",
  },
];

export const WhyHuemanSection = () => {
  return (
    <section className="bg-[#f6f8fb] py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-4xl lg:text-5xl font-semibold text-slate-800 leading-tight">
          Stop using slow, bulky legacy tech.
          <br />
          Choose <span className="text-emerald-500">HuemanAI</span>.
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((f, i) => {
            const Icon = f.icon;

            return (
              <div
                key={i}
                className={`
                  group rounded-2xl p-8 bg-white
                  border transition-all duration-300
                  ${
                    f.active
                      ? "border-emerald-500 shadow-[0_10px_40px_rgba(16,185,129,0.12)]"
                      : "border-slate-200 hover:border-emerald-300 hover:shadow-lg"
                  }
                `}
              >
                {/* Icon */}
                <div
                  className={`
                    w-12 h-12 rounded-xl flex items-center justify-center text-white
                    bg-gradient-to-br ${f.color}
                    shadow-md mb-6
                    transition-transform duration-300
                    group-hover:scale-110
                  `}
                >
                  <Icon size={22} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-slate-800 leading-snug">
                  {f.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-slate-600 leading-relaxed text-sm">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};