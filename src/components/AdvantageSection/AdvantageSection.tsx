import { Database, DollarSign, Search, Zap, Users, Plug } from 'lucide-react';

export function BentoGrid() {
  const features = [
    {
      icon: Database,
      title: 'Centralised Guest Data',
      description: 'A 360° view of every customer, unifying PMS and POS interactions.',
      size: 'lg:col-span-2',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: DollarSign,
      title: 'Autonomous Revenue',
      description: 'High-performance sales agents capture leads 24/7.',
      size: 'lg:col-span-1',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Search,
      title: 'AI Search Power',
      description: 'Dominate local SEO autonomously.',
      size: 'lg:col-span-1',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Zap,
      title: 'Instant Task Sync',
      description: 'Seamlessly bridge guest requests and staff actions.',
      size: 'lg:col-span-2',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Rapid Recruitment',
      description: 'Automated screening to secure top hospitality talent.',
      size: 'lg:col-span-1',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Plug,
      title: 'Simple Integrations',
      description: 'Plug-and-play with Opera, Mews, and Cloudbeds.',
      size: 'lg:col-span-2',
      color: 'from-teal-500 to-green-600'
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-[#1e293b] mb-6">
            The HuemanAI OS Advantage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to transform your hospitality operations in one unified platform
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`${feature.size} bg-gradient-to-br ${feature.color} rounded-2xl p-8 text-white hover:shadow-2xl hover:scale-105 transition-all group relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-12 -translate-y-12"></div>
              
              <div className="relative">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-2xl mb-3">{feature.title}</h3>
                <p className="text-white/90 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
