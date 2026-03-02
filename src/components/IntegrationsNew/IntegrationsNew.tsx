import { Zap } from 'lucide-react';

export function IntegrationsNew() {
  const integrations = {
    PMS: ['Opera', 'Protel', 'Mews', 'Cloudbeds'],
    CRS: ['Sabre', 'Amadeus', 'Travelport', 'GDS'],
    Marketing: ['Mailchimp', 'HubSpot', 'Salesforce', 'ActiveCampaign'],
    Analytics: ['Google Analytics', 'Mixpanel', 'Hotjar', 'Tableau']
  };

  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-[#2c3e50] to-[#34495e]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            Seamlessly Connects with Your Existing Tools
          </h2>
          <p className="text-gray-300 text-lg">
            HuemanAI integrates with 700+ platforms. No need to replace your current systems—
            <br />
            we enhance them.
          </p>
        </div>

        {/* Central Hub */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-[#10b981] blur-3xl opacity-40 animate-pulse"></div>
            <div className="relative w-24 h-24 bg-[#10b981] rounded-2xl flex items-center justify-center shadow-2xl">
              <Zap className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>

        {/* Integration Categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {Object.entries(integrations).map(([category, tools]) => (
            <div 
              key={category}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all"
            >
              <h3 className="text-white text-lg mb-4">{category}</h3>
              <div className="space-y-2">
                {tools.map((tool, index) => (
                  <div 
                    key={index}
                    className="bg-white/5 rounded-lg px-4 py-3 text-gray-300 text-sm hover:bg-white/10 transition-all"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">
            Don't see your tool? We offer custom integrations.
          </p>
          <button className="bg-white text-[#2c3e50] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all shadow-xl">
            Request Integration
          </button>
        </div>
      </div>
    </section>
  );
}
