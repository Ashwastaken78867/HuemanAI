import React from "react";
import { Phone, MessageSquare, Mail, Share2 } from "lucide-react";

const channels = [
  {
    title: "Phone Calls",
    desc: "Seamlessly integrated",
    icon: Phone,
    color: "bg-blue-500",
  },
  {
    title: "WhatsApp",
    desc: "Seamlessly integrated",
    icon: MessageSquare,
    color: "bg-green-500",
  },
  {
    title: "Email",
    desc: "Seamlessly integrated",
    icon: Mail,
    color: "bg-purple-500",
  },
  {
    title: "Social Media",
    desc: "Seamlessly integrated",
    icon: Share2,
    color: "bg-pink-500",
  },
];

export const AIBrainSection: React.FC = () => {
  return (
    <section className="w-full bg-[#f7f9fb] py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800">
          Modernise guest connections with
          <br />
          hospitality-first AI
        </h2>

        {/* Description */}
        <p className="mt-6 text-gray-600 leading-relaxed">
          HuemanAI unifies siloed channels into one central brain. From phone
          calls to WhatsApp, it maintains context to instantly serve guests on
          any platform. Legacy systems record the past; HuemanAI orchestrates
          the future.
        </p>

        {/* AI Brain immediately after text */}
        <div className="flex justify-center mt-12">
          <img
            src="src\assets\imgg5.png"
            alt="AI Brain"
            className="w-40 h-40 lg:w-56 lg:h-56 object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* Connectors + Cards */}
      <div className="max-w-6xl mx-auto px-6 mt-10">
        {/* Connector lines */}
        <div className="grid grid-cols-4 gap-8 mb-6">
          {channels.map((_, i) => (
            <div key={i} className="flex justify-center">
              <div className="w-0.5 h-12 bg-primary/60 rounded-full" />
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {channels.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="relative bg-white rounded-2xl shadow-md p-6 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${item.color}`}
                >
                  <Icon size={22} />
                </div>

                {/* Text */}
                <div className="mt-4">
                  <div className="font-semibold text-gray-800">
                    {item.title}
                  </div>
                  <div className="text-gray-500 text-sm mt-1">
                    {item.desc}
                  </div>
                </div>

                {/* Hover ring */}
                <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition ring-1 ring-primary/20 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};