import { Mic, Play, Volume2, Radio } from 'lucide-react';

export function VoiceDemo() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-linear-to-br from-[#1e293b] to-[#0f172a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-white">
            <h2 className="text-4xl lg:text-5xl mb-4">
              Don't Just Read About It. <span className="text-[#10b981]">Hear It.</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Experience our Voice AI handling a real-time table booking. It sounds so human, 
              your guests won't know the difference.
            </p>

            <div className="space-y-4 pt-6">
              <button className="w-full bg-[#10b981] hover:bg-[#059669] text-white px-8 py-6 rounded-xl transition-all flex items-center justify-between group shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                    <Play className="w-7 h-7" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium">Play Live Recording</div>
                    <div className="text-sm text-green-100">Listen to a 24/7 Virtual Receptionist</div>
                  </div>
                </div>
                <Volume2 className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity" />
              </button>

              <button className="w-full bg-white/10 hover:bg-white/20 text-white px-8 py-6 rounded-xl transition-all flex items-center justify-between group border border-white/20">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-[#10b981] rounded-full flex items-center justify-center">
                    <Mic className="w-7 h-7" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium">Try the Live Demo</div>
                    <div className="text-sm text-gray-300">Experience the "Dining Agent" in action</div>
                  </div>
                </div>
                <Radio className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="bg-white/10 rounded-lg p-4 border border-white/10">
                <div className="text-3xl text-[#10b981] mb-1">24/7</div>
                <div className="text-sm text-gray-300">Always Available</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 border border-white/10">
                <div className="text-3xl text-[#10b981] mb-1">40+</div>
                <div className="text-sm text-gray-300">Languages</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 border border-white/10">
                <div className="text-3xl text-[#10b981] mb-1">95%</div>
                <div className="text-sm text-gray-300">Accuracy</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="bg-linear-to-br from-[#10b981] to-[#059669] rounded-2xl p-8 mb-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Mic className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white">Dining Agent</div>
                    <div className="text-green-100 text-sm">Active Call</div>
                  </div>
                  <div className="ml-auto flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div 
                        key={i}
                        className="w-1 h-8 bg-white rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      ></div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-white text-sm">
                      "Hi, I'd like to book a table for 4 people tomorrow at 7 PM."
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-800 text-sm">
                      "Of course! I have availability for 4 guests tomorrow at 7:00 PM. 
                      Would you prefer indoor seating or our terrace?"
                    </p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-white text-sm">
                      "Terrace sounds perfect!"
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>Live Availability Check</span>
                <span className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse"></span>
                  <span className="text-[#10b981]">Connected</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}