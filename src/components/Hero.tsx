import React from 'react';
import { Mail, ArrowDown, MessageCircle, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';

interface HeroProps {
  onOpenContactModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContactModal }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content-grid">
        {/* Left Column: Greeting, Name, Role, CTAs */}
        <div className="hero-text-col">
          <div className="hero-greeting-row">
            <span className="hero-im">I'M</span>
            <span className="hero-sparkle"><Sparkles size={16} /></span>
          </div>

          <h1 className="hero-name">Mukesh P</h1>

          <div className="hero-role-block">
            <h2 className="hero-role">{PERSONAL_INFO.role}</h2>
            <p className="hero-tagline">
              B.Tech in Computer Science at SRM IST (CGPA: 9.18) &bull; Software Development Intern at Mecypher AI
            </p>
          </div>

          <div className="hero-cta-group">
            <button
              onClick={onOpenContactModal}
              className="btn-gold hero-btn"
              id="hero-contact-btn"
            >
              Contact Me
            </button>
            <button
              onClick={() => scrollTo('portfolio')}
              className="btn-ghost hero-btn-secondary"
            >
              View Projects <ArrowDown size={15} />
            </button>
          </div>

          <div className="hero-highlight-chips">
            <span className="chip"><Terminal size={13} /> RAG & IDP Pipelines</span>
            <span className="chip">🏆 Red Hat Hackathon Winner</span>
          </div>
        </div>

        {/* Right Column: Initials Tech Avatar Treatment + Vertical Social Line */}
        <div className="hero-visual-col">
          <div className="hero-avatar-frame">
            {/* Tech Monogram Card */}
            <div className="avatar-art-container">
              <div className="avatar-ambient-glow" />
              <div className="avatar-card-inner">
                {/* Circuit Ring Background */}
                <svg className="avatar-circuit-svg" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="85" stroke="#f3b432" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.3" fill="none" />
                  <circle cx="100" cy="100" r="68" stroke="#ffffff" strokeWidth="1" strokeDasharray="3 9" opacity="0.15" fill="none" />
                  <path d="M100 15 L100 35 M100 165 L100 185 M15 100 L35 100 M165 100 L185 100" stroke="#f3b432" strokeWidth="2" opacity="0.5" />
                </svg>

                {/* Monogram Display */}
                <div className="avatar-monogram-core">
                  <span className="avatar-initials">MP</span>
                  <span className="avatar-caption">AI &bull; Full-Stack</span>
                </div>

                {/* Floating Status Badge */}
                <div className="avatar-floating-badge">
                  <span className="status-indicator-dot" />
                  <span>Available for Internships</span>
                </div>

                {/* Bottom CGPA chip */}
                <div className="avatar-cgpa-badge">
                  <span className="cgpa-label">SRM IST</span>
                  <span className="cgpa-value">9.18 CGPA</span>
                </div>
              </div>
            </div>

            {/* Vertical Golden Accent Line & Social Icon Strip (matches reference design) */}
            <div className="hero-social-strip">
              <div className="gold-vertical-line" />
              <div className="hero-social-icons">
                <a
                  href={PERSONAL_INFO.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <GitHubIcon size={17} />
                </a>
                <a
                  href={PERSONAL_INFO.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon size={17} />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.contact.email}`}
                  className="social-icon-btn"
                  title="Direct Email"
                  aria-label="Send Email"
                >
                  <Mail size={17} />
                </a>
                <a
                  href={PERSONAL_INFO.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  title="WhatsApp Connect"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={17} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
