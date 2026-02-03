import { Activity, Globe, Zap, Server } from 'lucide-react';

const stats = [
  {
    icon: Activity,
    value: '2.4B',
    label: 'Predictions Made',
    trend: '+127% YoY',
  },
  {
    icon: Globe,
    value: '94',
    label: 'Countries Served',
    trend: 'Global Coverage',
  },
  {
    icon: Zap,
    value: '38ms',
    label: 'Avg. Response Time',
    trend: '-45% from Q1',
  },
  {
    icon: Server,
    value: '99.99%',
    label: 'Uptime SLA',
    trend: 'Enterprise Ready',
  },
];

export function Stats() {
  return (
    <section className="relative py-32 bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(34,211,238,0.05)_50%,transparent_100%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6">
            Performance at Scale
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Trusted by enterprises worldwide for mission-critical AI operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 rounded-2xl transition-all duration-500"></div>

                <div className="relative">
                  <div className="mb-6">
                    <Icon className="w-10 h-10 text-cyan-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                  </div>

                  <div className="text-5xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {stat.value}
                  </div>

                  <div className="text-slate-400 text-lg mb-3">
                    {stat.label}
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 rounded-full">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-cyan-400 font-medium">{stat.trend}</span>
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 p-12 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-teal-500/10 rounded-3xl border border-cyan-500/20 backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Data?
              </h3>
              <p className="text-slate-400 text-lg">
                Join thousands of developers and enterprises leveraging our AI platform
              </p>
            </div>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white rounded-lg font-semibold border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
