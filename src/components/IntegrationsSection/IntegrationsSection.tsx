import React from "react";
import { Zap } from "lucide-react";

const integrations = [
  {
    title: "PMS",
    items: ["Opera", "Protel", "Mews", "Cloudbeds"],
  },
  {
    title: "CRS",
    items: ["Sabre", "Amadeus", "Travelport", "GDS"],
  },
  {
    title: "Marketing",
    items: ["Mailchimp", "HubSpot", "Salesforce", "ActiveCampaign"],
  },
  {
    title: "Analytics",
    items: ["Google Analytics", "Mixpanel", "Hotjar", "Tableau"],
  },
];

export const IntegrationsSection: React.FC = () => {
  return (
    <section className="relative w-full py-24 bg-linear-to-b from-[#2f4358] to-[#24384c] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight">
          Seamlessly Connects with Your Existing Tools
        </h2>

        <p className="mt-4 text-lg text-white/70 max-w-3xl mx-auto">
          HuemanAI integrates with 700+ platforms. No need to replace your
          current systems — we enhance them.
        </p>

        {/* Center Icon */}
        <div className="flex justify-center mt-12">
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-400/30 blur-2xl rounded-full" />
            <div className="relative w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg">
              <Zap size={28} />
            </div>
          </div>
        </div>

        {/* Integration Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {integrations.map((col) => (
            <div
              key={col.title}
              className="bg-white/5 backdrop-blur rounded-2xl border border-white/10 p-6 text-left"
            >
              <h3 className="text-white font-semibold text-lg mb-4">
                {col.title}
              </h3>

              <div className="space-y-3">
                {col.items.map((item) => (
                  <div
                    key={item}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/80 text-sm transition-all duration-200 hover:bg-white/10 hover:border-white/20 hover:translate-x-1"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <p className="mt-14 text-white/60">
          Don't see your tool? We offer custom integrations.
        </p>

        {/* CTA */}
        <button className="mt-6 px-8 py-3 rounded-xl bg-white text-[#24384c] font-semibold shadow-md transition hover:shadow-xl hover:-translate-y-0.5">
          Request Integration
        </button>
      </div>
    </section>
  );
};