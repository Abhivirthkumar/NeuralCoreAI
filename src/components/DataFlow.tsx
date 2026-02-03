import { Database, ArrowRight, Sparkles, BarChart3 } from 'lucide-react';

export function DataFlow() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,211,238,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6">
            Seamless Data Pipeline
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Transform raw data into intelligent insights through our optimized processing flow
          </p>
        </div>

        <div className="flex items-center justify-between gap-8">
          <div className="flex-1 group">
            <div className="relative p-8 bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/20">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Database className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Data Ingestion</h3>
              <p className="text-slate-400 mb-6">
                Collect and normalize data from multiple sources in real-time
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  APIs & Webhooks
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  File Uploads
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  Streaming Data
                </div>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative">
              <ArrowRight className="w-12 h-12 text-cyan-400 animate-pulse-slow" />
              <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-30 animate-pulse-slow"></div>
            </div>
          </div>

          <div className="flex-1 group">
            <div className="relative p-8 bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Sparkles className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">AI Processing</h3>
              <p className="text-slate-400 mb-6">
                Advanced neural networks analyze and extract meaningful patterns
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  Feature Extraction
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  Model Inference
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  Result Optimization
                </div>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative">
              <ArrowRight className="w-12 h-12 text-blue-400 animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
              <div className="absolute inset-0 bg-blue-400 blur-xl opacity-30 animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>

          <div className="flex-1 group">
            <div className="relative p-8 bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-teal-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-teal-500/20">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-teal-500/20 to-teal-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <BarChart3 className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Insights Delivery</h3>
              <p className="text-slate-400 mb-6">
                Actionable results delivered to your applications instantly
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                  REST APIs
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  Real-time Updates
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  Custom Integrations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
