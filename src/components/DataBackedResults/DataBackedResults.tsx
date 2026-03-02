import { Smile, DollarSign, Users } from 'lucide-react';

export function PerformanceGap() {
  const stats = [
    {
      icon: Smile,
      value: '92%',
      label: 'Improvement in Guest Satisfaction',
      description: 'Measured across all touchpoints'
    },
    {
      icon: DollarSign,
      value: '48%',
      label: 'Reduction in Operational Costs',
      description: 'Through intelligent automation'
    },
    {
      icon: Users,
      value: '91%',
      label: 'Faster Hiring',
      description: 'Fill essential roles in 4 days vs 45-day industry average'
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-r from-[#1e293b] to-[#334155]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            Delegate the busy work, focus on your guests
          </h2>
          <p className="text-xl text-gray-300">
            Data-Backed Results
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
              <div className="w-16 h-16 bg-[#10b981] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl text-white mb-3 text-center">{stat.value}</div>
              <div className="text-xl text-white mb-2 text-center">{stat.label}</div>
              <div className="text-gray-400 text-sm text-center">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
