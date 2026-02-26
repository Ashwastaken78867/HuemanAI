import {
  ShieldCheck,
  Lock,
  Eye,
  RefreshCw,
  
} from "lucide-react";

const certifications = [
  { title: "GDPR", subtitle: "European Data Protection" },
  { title: "SOC 2", subtitle: "Security & Compliance" },
  { title: "ISO 27001", subtitle: "Information Security" },
  { title: "PCI DSS", subtitle: "Payment Security" },
];

const features = [
  {
    icon: Lock,
    title: "256-bit Encryption",
    desc: "Bank-level security for all data transmission and storage",
  },
  {
    icon: ShieldCheck,
    title: "Regular Security Audits",
    desc: "Third-party penetration testing and vulnerability assessments",
  },
  {
    icon: Eye,
    title: "24/7 Monitoring",
    desc: "Real-time threat detection and instant response protocols",
  },
  {
    icon: RefreshCw,
    title: "Automated Backups",
    desc: "Daily backups with 99.9% uptime SLA guarantee",
  },
];

export default function EnterpriseReliability() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-500 text-white mb-6">
            <ShieldCheck size={28} />
          </div>

          <h2 className="text-4xl font-semibold text-slate-800 mb-4">
            Enterprise-Grade Reliability
          </h2>

          <p className="text-lg text-slate-500">
            Your guest data is protected by the highest global security standards.
          </p>
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certifications.map((c) => (
            <div
              key={c.title}
              className="bg-white border border-slate-200 rounded-2xl p-8 text-center
                         hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-emerald-500 text-white
                              flex items-center justify-center mx-auto mb-4
                              font-semibold">
                {c.title}
              </div>

              <p className="text-slate-600 text-sm">{c.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-white border border-slate-200 rounded-2xl p-8
                           hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600
                                flex items-center justify-center mb-4">
                  <Icon size={22} />
                </div>

                <h4 className="text-lg font-semibold text-slate-800 mb-2">
                  {f.title}
                </h4>

                <p className="text-slate-500 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats Bar */}
        <div className="bg-slate-800 rounded-2xl py-10 px-8
                        grid grid-cols-1 md:grid-cols-3 text-center text-white">
          <div>
            <div className="text-3xl font-semibold text-emerald-400 mb-2">
              99.9%
            </div>
            <p className="text-slate-300 text-sm">Uptime SLA Guarantee</p>
          </div>

          <div>
            <div className="text-3xl font-semibold text-emerald-400 mb-2">
              &lt; 2hrs
            </div>
            <p className="text-slate-300 text-sm">Average Support Response</p>
          </div>

          <div>
            <div className="text-3xl font-semibold text-emerald-400 mb-2">
              Zero
            </div>
            <p className="text-slate-300 text-sm">Data Breaches Since Launch</p>
          </div>
        </div>

      </div>
    </section>
  );
}