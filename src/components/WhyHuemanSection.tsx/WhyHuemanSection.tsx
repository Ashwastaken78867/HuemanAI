import { DollarSign, Workflow, Award } from 'lucide-react';

export function StrategicValue() {
  const pillars = [
    {
      icon: DollarSign,
      title: 'Flexible and Transparent Pricing',
      description: 'Clear, value-driven models tailored to your property size. No hidden fees, no surprises—just honest pricing that scales with your success.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Workflow,
      title: 'Built for the Way Modern Hotels Actually Work',
      description: 'A unified workflow designed for the high-pressure demands of hotels and restaurants. We understand your reality because we built this with hospitality leaders.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Award,
      title: 'Designed for Hospitality Leaders and Innovators',
      description: 'The new standard of service for those who want to lead the market. Stay ahead of competitors with cutting-edge AI technology.',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-[#1e293b] mb-6">
            Stop using slow, bulky legacy tech. <br />Choose <span className="text-[#10b981]">HuemanAI.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#10b981] hover:shadow-2xl transition-all group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                <pillar.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl text-[#1e293b] mb-4">{pillar.title}</h3>
              
              <p className="text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
