import { Phone, MessageSquare, Mail, Share2 } from 'lucide-react';
export function AIBrainSection() {
  const channels = [
    {
      icon: Phone,
      title: 'Phone Calls',
      description: 'Seamlessly integrated',
      color: 'bg-blue-500',
      iconColor: 'text-white'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      description: 'Seamlessly integrated',
      color: 'bg-green-500',
      iconColor: 'text-white'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Seamlessly integrated',
      color: 'bg-purple-500',
      iconColor: 'text-white'
    },
    {
      icon: Share2,
      title: 'Social Media',
      description: 'Seamlessly integrated',
      color: 'bg-pink-500',
      iconColor: 'text-white'
    }
  ];

  return (
    <section className="py-20 bg-linear-to-b from-white-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Heading and Description */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1d3a] mb-6">
            Modernise guest connections with hospitality-first AI
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            HuemanAI unifies siloed channels into one central brain. From phone calls to WhatsApp, it maintains context to instantly serve guests on any platform. Legacy systems record the past; HuemanAI orchestrates the future.
          </p>
        </div>

        {/* AI Brain Circle */}
        <div className="flex flex-col items-center mb-16">
          <div className="relative">
            {/* Glowing ring effect */}
            <div className="absolute inset-0 rounded-full bg-green-400 opacity-20 blur-xl"></div>
            
            {/* Main circle */}
            <div className="relative w-48 h-48 rounded-full bg-[#1a1d3a] border-4 border-green-400 flex flex-col items-center justify-center shadow-2xl">
              <span className="text-white font-bold text-2xl">AI Brain</span>
              <span className="text-green-400 text-sm mt-1">Unified Context</span>
            </div>

            {/* Connection lines */}
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className="absolute top-full left-1/2 h-24 w-px bg-linear-to-b from-green-400 to-transparent"
                style={{
                  transform: `translateX(-50%) translateX(${(index - 1.5) * 220}px)`
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {channels.map((channel, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`${channel.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                <channel.icon className={`${channel.iconColor} w-7 h-7`} />
              </div>
              <h3 className="text-[#1a1d3a] font-semibold text-lg mb-2">
                {channel.title}
              </h3>
              <p className="text-gray-500 text-sm">
                {channel.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}