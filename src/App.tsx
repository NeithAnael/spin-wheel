import Wheel from './components/MyWheel';
import Header from './components/Header';
import Footer from './components/Footer';
import { wheelTheme } from '@/components/theme/wheelTheme';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Header */}
      <Header />

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${wheelTheme.backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-black/40 z-0" /> {/* semi-transparent overlay */}

      {/* Central content */}
      <main className="flex-1 flex items-center justify-center relative z-10 p-4">
        <div className="w-full max-w-lg aspect-square p-4">
          <Wheel />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
