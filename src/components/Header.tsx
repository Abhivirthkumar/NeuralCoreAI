import { Brain, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-900/50">
      <nav className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">NeuralCore AI</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">
              Features
            </a>
            <a href="#solutions" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">
              Solutions
            </a>
            <a href="#docs" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">
              Documentation
            </a>
            <a href="#pricing" className="text-slate-300 hover:text-cyan-400 transition-colors font-medium">
              Pricing
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="px-5 py-2 text-slate-300 hover:text-white transition-colors font-medium">
              Sign In
            </button>
            <button className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-800 pt-4">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-slate-300 hover:text-cyan-400 transition-colors">
                Features
              </a>
              <a href="#solutions" className="text-slate-300 hover:text-cyan-400 transition-colors">
                Solutions
              </a>
              <a href="#docs" className="text-slate-300 hover:text-cyan-400 transition-colors">
                Documentation
              </a>
              <a href="#pricing" className="text-slate-300 hover:text-cyan-400 transition-colors">
                Pricing
              </a>
              <button className="px-5 py-2 text-slate-300 hover:text-white transition-colors text-left">
                Sign In
              </button>
              <button className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
