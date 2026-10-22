import React, { useState } from 'react';
import { GraduationCap, Brain, Languages, User } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="about-section">
      <div className="section-title">
        <span className="section-title-line" />
        <span>About</span>
      </div>

      <div className="about-layout">
        {/* Profile Photo */}
        <div className="about-photo-col">
          <div className="about-photo-frame">
            {!imgError ? (
              <img
                src="/profile.jpg"
                alt="Mukesh P — AI Engineer & Full-Stack Developer"
                className="about-photo-img"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="about-photo-fallback">
                <User size={64} className="icon-gold" />
                <span className="photo-fallback-text">Add your photo as<br/><code>public/profile.jpg</code></span>
              </div>
            )}
            {/* Decorative gold corner accents */}
            <div className="photo-corner photo-corner-tl" />
            <div className="photo-corner photo-corner-br" />
          </div>

          {/* Quick stat badges below photo */}
          <div className="about-photo-stats">
            <div className="photo-stat-item">
              <span className="photo-stat-value">9.18</span>
              <span className="photo-stat-label">CGPA</span>
            </div>
            <div className="photo-stat-divider" />
            <div className="photo-stat-item">
              <span className="photo-stat-value">5+</span>
              <span className="photo-stat-label">Projects</span>
            </div>
            <div className="photo-stat-divider" />
            <div className="photo-stat-item">
              <span className="photo-stat-value">🏆</span>
              <span className="photo-stat-label">1st Prize</span>
            </div>
          </div>
        </div>

        {/* About Text Content */}
        <div className="about-text-col">
          <p className="about-text">
            I am a Computer Science Engineering undergraduate at{' '}
            <strong className="text-gold">SRM Institute of Science and Technology</strong> with a{' '}
            <strong className="text-gold">9.18 CGPA</strong>, specializing in architecting{' '}
            <strong className="text-gold">Intelligent Document Processing (IDP)</strong>,{' '}
            <strong className="text-gold">autonomous Multi-Agent RAG pipelines</strong>, and{' '}
            <strong className="text-gold">production machine learning workflows</strong>.
          </p>

          <p className="about-text">
            During my internship at <strong className="text-gold">Mecypher AI India</strong>, I built end-to-end OCR extraction pipelines using PaddleOCR and PyMuPDF, engineered low-latency ML inference services with Flask, and developed responsive dashboards for real-time model monitoring.
          </p>

          <p className="about-text">
            As the <strong className="text-gold">1st Prize Winner at the Red Hat COE Hackathon</strong> and author of the deep learning research paper <em className="text-gold">Adaptive Multimodal Feature Fusion Transformer (AMFFT)</em>, I focus on building resilient software architectures that deliver deterministic performance.
          </p>

          {/* Highlight Quick Cards */}
          <div className="about-cards-grid">
            {/* Education Card */}
            <div className="about-mini-card">
              <div className="mini-card-icon-wrap">
                <GraduationCap size={20} className="icon-gold" />
              </div>
              <div className="mini-card-body">
                <span className="mini-card-tag">Education</span>
                <h4 className="mini-card-title">{PERSONAL_INFO.education.institution}</h4>
                <p className="mini-card-sub">
                  {PERSONAL_INFO.education.degree} &bull; <strong className="text-gold">{PERSONAL_INFO.education.cgpa} CGPA</strong> ({PERSONAL_INFO.education.period})
                </p>
              </div>
            </div>

            {/* Research & Publications Card */}
            <div className="about-mini-card">
              <div className="mini-card-icon-wrap">
                <Brain size={20} className="icon-gold" />
              </div>
              <div className="mini-card-body">
                <span className="mini-card-tag">Research Paper</span>
                <h4 className="mini-card-title">AMFFT Architecture</h4>
                <p className="mini-card-sub">Adaptive Multimodal Feature Fusion Transformer (Authored & Submitted)</p>
              </div>
            </div>

            {/* Languages Card */}
            <div className="about-mini-card">
              <div className="mini-card-icon-wrap">
                <Languages size={20} className="icon-gold" />
              </div>
              <div className="mini-card-body">
                <span className="mini-card-tag">Spoken Languages</span>
                <div className="languages-pill-row">
                  {PERSONAL_INFO.spokenLanguages.map((lang, idx) => (
                    <span key={idx} className="lang-pill">
                      {lang.language} <small>({lang.proficiency})</small>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
