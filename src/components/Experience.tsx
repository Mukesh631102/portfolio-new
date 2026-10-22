import React from 'react';
import { Calendar, MapPin, GraduationCap } from 'lucide-react';
import { EXPERIENCES, PERSONAL_INFO } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="section-title">
        <span>Experience</span>
      </div>

      <div className="timeline-container">
        {/* Timeline Item 1: Mecypher AI */}
        {EXPERIENCES.map((exp) => (
          <div key={exp.id} className="timeline-item">
            {/* Left Year Badge */}
            <div className="timeline-badge-wrap">
              <span className="timeline-year-badge">{exp.yearBadge}</span>
              <span className="timeline-node" />
            </div>

            {/* Timeline Vertical Guide Line */}
            <div className="timeline-content-card">
              <div className="timeline-header">
                <div>
                  <h4 className="timeline-role">{exp.role}</h4>
                  <div className="timeline-company-row">
                    <span className="timeline-company">{exp.company}</span>
                    <span className="timeline-sep">&bull;</span>
                    <span className="timeline-location">
                      <MapPin size={13} /> {exp.location}
                    </span>
                  </div>
                </div>
                <span className="timeline-period-pill">
                  <Calendar size={13} /> {exp.period}
                </span>
              </div>

              <p className="timeline-summary">{exp.description}</p>

              <ul className="timeline-bullets">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="timeline-bullet-item">{bullet}</li>
                ))}
              </ul>

              <div className="timeline-tech-tags">
                {exp.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-chip">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Timeline Item 2: Education & Technical Engineering */}
        <div className="timeline-item">
          <div className="timeline-badge-wrap">
            <span className="timeline-year-badge">2027</span>
            <span className="timeline-node timeline-node-subtle" />
          </div>

          <div className="timeline-content-card">
            <div className="timeline-header">
              <div>
                <h4 className="timeline-role">B.Tech in Computer Science & Engineering</h4>
                <div className="timeline-company-row">
                  <span className="timeline-company">{PERSONAL_INFO.education.institution}</span>
                  <span className="timeline-sep">&bull;</span>
                  <span className="timeline-location">
                    <MapPin size={13} /> {PERSONAL_INFO.education.campus}
                  </span>
                </div>
              </div>
              <span className="timeline-period-pill">
                <GraduationCap size={13} /> CGPA: {PERSONAL_INFO.education.cgpa}
              </span>
            </div>

            <p className="timeline-summary">
              Rigorous curriculum focusing on Artificial Intelligence, Distributed Systems, Data Structures & Algorithms, and Database Management Systems.
            </p>

            <ul className="timeline-bullets">
              <li className="timeline-bullet-item">
                Maintained top-tier academic performance with an exceptional <strong>9.18 CGPA</strong>.
              </li>
              <li className="timeline-bullet-item">
                Spearheaded research on <em>Adaptive Multimodal Feature Fusion Transformer (AMFFT)</em> with empirical benchmarking.
              </li>
              <li className="timeline-bullet-item">
                Led collegiate development squads to win 1st Prize at Red Hat COE Hackathon.
              </li>
            </ul>

            <div className="timeline-tech-tags">
              <span className="tech-chip">Computer Science</span>
              <span className="tech-chip">Algorithms</span>
              <span className="tech-chip">Deep Learning</span>
              <span className="tech-chip">Database Systems</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
