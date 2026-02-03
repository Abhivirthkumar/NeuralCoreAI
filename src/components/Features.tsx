import { Brain, Network, Cpu, Layers, TrendingUp, Shield } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Deep Learning Networks',
    description: 'Advanced neural architectures that understand context, patterns, and relationships in complex data structures.',
    color: 'cyan',
  },
  {
    icon: Network,
    title: 'Distributed Processing',
    description: 'Massively parallel computation across global infrastructure for unprecedented speed and scalability.',
    color: 'blue',
  },
  {
    icon: Cpu,
    title: 'Real-Time Inference',
    description: 'Lightning-fast predictions with optimized model serving and edge computing capabilities.',
    color: 'teal',
  },
  {
    icon: Layers,
    title: 'Multi-Modal Learning',
    description: 'Process and understand text, images, audio, and structured data in unified intelligence systems.',
    color: 'cyan',
  },
  {
    icon: TrendingUp,
    title: 'Adaptive Intelligence',
    description: 'Self-improving models that learn from feedback and continuously optimize performance.',
    color: 'blue',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with encrypted processing and compliance-ready infrastructure.',
    color: 'teal',
  },
];

export function Features() {
  return (
    <section className="relative py-32 bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6">
            Intelligent by Design
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Built on cutting-edge AI research, our platform delivers capabilities that were
            science fiction just years ago.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-7 h-7 text-cyan-400" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
