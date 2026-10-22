import React, { useState } from 'react';
import { Trophy, BookOpen, Award } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = ACHIEVEMENTS[activeIndex];

  return (
    <section id="achievements" className="achievements-section">
      <div className="section-title">
        <span className="section-title-line" />
        <span>Achievements & Research</span>
      </div>

      {/* Spotlight Card structured identically to reference's Testimonial card */}
      <div className="achievement-spotlight-card">
        {/* Left Side: Highlight Quote, Description, and Credentials */}
        <div className="spotlight-left">
          <div className="spotlight-accent-line" />
          
          <blockquote className="spotlight-quote">
            {activeIndex === 0 && (
              <p>
                Secured <strong className="text-gold">1st Prize</strong> at the{' '}
                <strong className="text-gold">Red Hat COE Hackathon</strong> (SIMATS, Chennai) for engineering and pitching the{' '}
                <strong className="text-gold">AgroScope</strong> platform architecture with satellite telematics and smart contracts.
              </p>
            )}
            {activeIndex === 1 && (
              <p>
                Authored and submitted the research paper <strong className="text-gold">Adaptive Multimodal Feature Fusion Transformer (AMFFT)</strong>, proposing dynamic attention mechanisms across heterogeneous sensor streams.
              </p>
            )}
            {activeIndex === 2 && (
              <p>
                Selected and active participant in high-intensity regional engineering competitions including <strong className="text-gold">V-Vortex</strong> and <strong className="text-gold">Nexathon '25 (VIT Chennai)</strong>.
              </p>
            )}
          </blockquote>

          <div className="spotlight-author-row">
            <div>
              <h5 className="spotlight-author-name">Mukesh P</h5>
              <p className="spotlight-author-role">
                {current.type === 'hackathon' && '1st Prize Hackathon Lead & Architect'}
                {current.type === 'publication' && 'Primary Research Author & Deep Learning Researcher'}
                {current.type === 'competition' && 'Competitive Hackathon Finalist'}
                {' '}&bull; {current.organization}
              </p>
            </div>
          </div>

          {/* Quick Selectors */}
          <div className="spotlight-tabs-row">
            {ACHIEVEMENTS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`spotlight-tab-pill ${activeIndex === idx ? 'spotlight-tab-pill-active' : ''}`}
              >
                {item.type === 'hackathon' && <Trophy size={14} />}
                {item.type === 'publication' && <BookOpen size={14} />}
                {item.type === 'competition' && <Award size={14} />}
                <span>{item.type === 'hackathon' ? 'Red Hat Winner' : item.type === 'publication' ? 'AMFFT Paper' : 'Nexathon'}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Golden Card with Visual Trophy / Badge (matches the reference's yellow portrait backdrop) */}
        <div className="spotlight-right">
          <div className="spotlight-gold-badge-card">
            <div className="spotlight-badge-art">
              {current.type === 'hackathon' && (
                <div className="badge-icon-circle">
                  <Trophy size={48} className="badge-icon" />
                  <span className="badge-icon-sub">1ST PLACE</span>
                </div>
              )}
              {current.type === 'publication' && (
                <div className="badge-icon-circle">
                  <BookOpen size={48} className="badge-icon" />
                  <span className="badge-icon-sub">RESEARCH</span>
                </div>
              )}
              {current.type === 'competition' && (
                <div className="badge-icon-circle">
                  <Award size={48} className="badge-icon" />
                  <span className="badge-icon-sub">FINALIST</span>
                </div>
              )}
            </div>
            <div className="spotlight-gold-card-footer">
              <span className="gold-footer-title">{current.badge}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
