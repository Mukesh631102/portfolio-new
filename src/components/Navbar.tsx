import React, { useState } from 'react';
import { Search, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onSearchChange?: (query: string) => void;
  searchQuery?: string;
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onSearchChange,
  searchQuery = '',
  onOpenContactModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-container">
      <div className="navbar-inner">
        {/* Monogram Logo */}
        <a href="#hero" className="logo-link" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
          <div className="logo-badge">
            <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
              <rect width="100" height="100" rx="28" fill="#1f232e" stroke="#f3b432" strokeWidth="6" />
              <path d="M26 72V28L50 52L74 28V72" stroke="#f3b432" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="logo-text">Mukesh<span className="logo-dot">.</span></span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <button onClick={() => scrollTo('about')} className="nav-item">About</button>
          <button onClick={() => scrollTo('skills')} className="nav-item">Skills</button>
          <button onClick={() => scrollTo('portfolio')} className="nav-item">Portfolio</button>
          <button onClick={() => scrollTo('experience')} className="nav-item">Experience</button>
          <button onClick={() => scrollTo('contact')} className="nav-item">Contact</button>
        </nav>

        {/* Search Input pill inspired by reference */}
        <div className={`search-pill ${searchFocused ? 'search-pill-focused' : ''}`}>
          <input
            type="text"
            placeholder="Search skills, projects..."
            value={searchQuery}
            onChange={(e) => onSearchChange?.(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className="search-input"
            aria-label="Search portfolio"
          />
          <Search size={15} className="search-icon" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <button onClick={() => scrollTo('hero')} className="mobile-nav-item">Home</button>
          <button onClick={() => scrollTo('about')} className="mobile-nav-item">About</button>
          <button onClick={() => scrollTo('skills')} className="mobile-nav-item">Skills</button>
          <button onClick={() => scrollTo('portfolio')} className="mobile-nav-item">Portfolio</button>
          <button onClick={() => scrollTo('experience')} className="mobile-nav-item">Experience</button>
          <button onClick={() => scrollTo('achievements')} className="mobile-nav-item">Achievements</button>
          <button onClick={() => scrollTo('contact')} className="mobile-nav-item">Contact</button>
          <div className="mobile-drawer-footer">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContactModal?.();
              }}
              className="btn-gold-solid"
              style={{ width: '100%' }}
            >
              Get in Touch <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
