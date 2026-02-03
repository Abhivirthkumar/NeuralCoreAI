import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { DataFlow } from './components/DataFlow';
import { Stats } from './components/Stats';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <Hero />
      <Features />
      <DataFlow />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;
