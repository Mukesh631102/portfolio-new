import { useState, useEffect } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Portfolio } from './components/Portfolio';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { ArrowUp } from 'lucide-react';

export function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-canvas">
      {/* Sticky Navbar */}
      <div className="navbar-sticky-wrap">
        <Navbar
          onSearchChange={setSearchQuery}
          searchQuery={searchQuery}
          onOpenContactModal={handleOpenContact}
        />
      </div>

      {/* Single scrollable page */}
      <main className="portfolio-scroll-main">
        <Hero onOpenContactModal={handleOpenContact} />
        <About />
        <Skills searchQuery={searchQuery} />
        <Portfolio searchQuery={searchQuery} />
        <Experience />
        <Achievements />
        <Contact />
      </main>

      {/* Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="scroll-top-btn"
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
}

export default App;
