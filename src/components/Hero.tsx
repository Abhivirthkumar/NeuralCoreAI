import { Brain, Sparkles, Zap } from 'lucide-react';
import { NeuralBackground } from './NeuralBackground';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <NeuralBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-cyan-500/10 border border-cyan-500/20 rounded-full backdrop-blur-sm animate-fade-in">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-cyan-400 font-medium">Next-Generation Intelligence</span>
        </div>

        <h1 className="text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight animate-slide-up">
          Redefining
          <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
            Artificial Intelligence
          </span>
        </h1>

        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up-delay">
          Harness the power of cutting-edge neural networks and machine learning to transform
          data into actionable insights. Experience intelligence that adapts, learns, and evolves.
        </p>

        <div className="flex flex-wrap gap-6 justify-center animate-slide-up-delay-2">
          <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
            <Brain className="w-5 h-5" />
            Explore Platform
            <Zap className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white rounded-lg font-semibold border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300">
            View Documentation
          </button>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-12 max-w-4xl mx-auto">
          <div className="group">
            <div className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
              99.9%
            </div>
            <div className="text-slate-400 text-sm">Model Accuracy</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
              &lt;50ms
            </div>
            <div className="text-slate-400 text-sm">Response Time</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
              10M+
            </div>
            <div className="text-slate-400 text-sm">Operations/Day</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full p-1">
          <div className="w-1.5 h-3 bg-cyan-400 rounded-full mx-auto animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
