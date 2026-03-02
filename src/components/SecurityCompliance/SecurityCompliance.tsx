import { Shield, Lock, Eye, RefreshCw } from 'lucide-react';

export function SecurityCompliance() {
  const badges = [
    { name: 'GDPR', description: 'European Data Protection' },
    { name: 'SOC 2', description: 'Security & Compliance' },
    { name: 'ISO 27001', description: 'Information Security' },
    { name: 'PCI DSS', description: 'Payment Security' }
  ];

  const features = [
    {
      icon: Lock,
      title: '256-bit Encryption',
      description: 'Bank-level security for all data transmission and storage'
    },
    {
      icon: Shield,
      title: 'Regular Security Audits',
      description: 'Third-party penetration testing and vulnerability assessments'
    },
    {
      icon: Eye,
      title: '24/7 Monitoring',
      description: 'Real-time threat detection and instant response protocols'
    },
    {
      icon: RefreshCw,
      title: 'Automated Backups',
      description: 'Daily backups with 99.9% uptime SLA guarantee'
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl lg:text-5xl text-[#1e293b] mb-6">
            Enterprise-Grade Reliability
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your guest data is protected by the highest global security standards.
          </p>
        </div>

        {/* Compliance Badges */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#10b981] hover:shadow-xl transition-all text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-white">{badge.name}</span>
              </div>
              <p className="text-gray-600 text-sm">{badge.description}</p>
            </div>
          ))}
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#10b981] hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-[#10b981]/10 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-[#10b981]" />
              </div>
              <h3 className="text-[#1e293b] mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-[#1e293b] to-[#334155] rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl text-[#10b981] mb-2">99.9%</div>
              <div className="text-gray-300">Uptime SLA Guarantee</div>
            </div>
            <div>
              <div className="text-4xl text-[#10b981] mb-2">&lt; 2hrs</div>
              <div className="text-gray-300">Average Support Response</div>
            </div>
            <div>
              <div className="text-4xl text-[#10b981] mb-2">Zero</div>
              <div className="text-gray-300">Data Breaches Since Launch</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}