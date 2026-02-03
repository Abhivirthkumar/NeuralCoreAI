import { Brain, Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">NeuralCore AI</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              Building the future of artificial intelligence with cutting-edge neural networks
              and machine learning technology.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-900 hover:bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-900 hover:bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-900 hover:bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Features</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">API Reference</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Guides</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Support</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Status</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2024 NeuralCore AI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
