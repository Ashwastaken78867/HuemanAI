import { MessageSquare, Phone, Mail, Share2 } from 'lucide-react';

export function VisionSection() {
  const channels = [
    { icon: Phone, label: 'Phone Calls', color: 'bg-blue-500' },
    { icon: MessageSquare, label: 'WhatsApp', color: 'bg-green-500' },
    { icon: Mail, label: 'Email', color: 'bg-purple-500' },
    { icon: Share2, label: 'Social Media', color: 'bg-pink-500' }
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl text-[#1e293b] mb-6">
            Modernise guest connections with hospitality-first AI
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            HuemanAI unifies siloed channels into one central brain. From phone calls to WhatsApp, 
            it maintains context to instantly serve guests on any platform. Legacy systems record the past; 
            HuemanAI orchestrates the future.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Brain */}
          <div className="flex items-center justify-center mb-12">
            <div className="relative">
              <div className="absolute inset-0 bg-[#10b981] blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-48 h-48 bg-gradient-to-br from-[#1e293b] to-[#334155] rounded-full flex items-center justify-center shadow-2xl border-4 border-[#10b981]">
                <div className="text-center">
                  <div className="text-white text-2xl mb-2">AI Brain</div>
                  <div className="text-[#10b981] text-sm">Unified Context</div>
                </div>
              </div>
            </div>
          </div>

          {/* Channel Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {channels.map((channel, index) => (
              <div key={index} className="relative group">
                {/* Connection Line */}
                <div className="hidden lg:block absolute bottom-full left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-t from-[#10b981] to-transparent"></div>
                
                <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-[#10b981] transition-all shadow-lg group-hover:shadow-2xl">
                  <div className={`w-14 h-14 ${channel.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <channel.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-[#1e293b] mb-2">{channel.label}</h3>
                  <p className="text-gray-600 text-sm">Seamlessly integrated</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
