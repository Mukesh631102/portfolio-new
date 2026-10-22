import React, { useState } from 'react';
import { ExternalLink, ChevronRight, X, Layers, Cpu, ShieldCheck, FileText, Sliders } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { GitHubIcon } from './SocialIcons';

interface PortfolioProps {
  searchQuery?: string;
}

export const Portfolio: React.FC<PortfolioProps> = ({ searchQuery = '' }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesFilter = filter === 'All' || proj.category.includes(filter);
    const matchesSearch =
      searchQuery.trim() === '' ||
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-header">
        <h3 className="section-title">
          <span>Portfolio</span>
        </h3>
        <div className="portfolio-header-dots">
          <span className="gold-dot" />
          <span className="gold-dot" />
          <span className="gold-dot" />
          <span className="gold-dot" />
        </div>
      </div>

      {/* Category Pills */}
      <div className="portfolio-filter-row">
        {['All', 'AI & Enterprise', 'Full-Stack & Web3', 'Data Science & AI'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`portfolio-filter-btn ${filter === f ? 'portfolio-filter-btn-active' : ''}`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="portfolio-grid">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => setSelectedProject(project)}
          >
            {/* Project Visual Thumbnail */}
            <div className="project-thumbnail" style={{ background: project.gradient }}>
              {/* Abstract Visual Representation */}
              <div className="thumbnail-art">
                {project.id === 'financial-workflow-rag' && (
                  <div className="mockup-diagram">
                    <div className="mockup-node node-rag">
                      <Cpu size={16} />
                      <span>Multi-Agent RAG</span>
                    </div>
                    <div className="mockup-arrow">↓</div>
                    <div className="mockup-row">
                      <span className="mini-chip">Retriever</span>
                      <span className="mini-chip">Drafting</span>
                      <span className="mini-chip">Verifier</span>
                    </div>
                  </div>
                )}

                {project.id === 'agroscope-intelligence' && (
                  <div className="mockup-diagram">
                    <div className="mockup-node node-agro">
                      <ShieldCheck size={16} />
                      <span>Satellite Telematics</span>
                    </div>
                    <div className="mockup-arrow">⇄</div>
                    <div className="mockup-row">
                      <span className="mini-chip">Sub-200ms API</span>
                      <span className="mini-chip">Solidity Contract</span>
                    </div>
                  </div>
                )}

                {project.id === 'neuralinsight-platform' && (
                  <div className="mockup-diagram">
                    <div className="mockup-node node-insight">
                      <Layers size={16} />
                      <span>Groq LLM Engine</span>
                    </div>
                    <div className="mockup-arrow">↓</div>
                    <div className="mockup-row">
                      <span className="mini-chip">Statistical Profile</span>
                      <span className="mini-chip">Dynamic Dash</span>
                    </div>
                  </div>
                )}

                {project.id === 'document-asset-pipeline' && (
                  <div className="mockup-diagram">
                    <div className="mockup-node node-pipeline">
                      <FileText size={16} />
                      <span>Intelligent Doc OCR</span>
                    </div>
                    <div className="mockup-arrow">↓</div>
                    <div className="mockup-row">
                      <span className="mini-chip">EasyOCR / Paddle</span>
                      <span className="mini-chip">OpenCV Clean</span>
                      <span className="mini-chip">Streamlit</span>
                    </div>
                  </div>
                )}

                {project.id === 'auraprune-studio' && (
                  <div className="mockup-diagram">
                    <div className="mockup-node node-prune">
                      <Sliders size={16} />
                      <span>AuraPrune Studio</span>
                    </div>
                    <div className="mockup-arrow">↓</div>
                    <div className="mockup-row">
                      <span className="mini-chip">PyTorch Pruning</span>
                      <span className="mini-chip">Sparsity L1</span>
                      <span className="mini-chip">Vercel UI</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Hover Dark Glass Overlay (mimicking reference image) */}
              <div className="project-overlay">
                <span className="overlay-date">{project.date}</span>
                <h4 className="overlay-title">{project.title}</h4>
                <p className="overlay-desc">{project.tagline}</p>
                <div className="overlay-btn-wrap">
                  <span className="btn-gold-sm">
                    View Project <ChevronRight size={14} />
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Meta Bar */}
            <div className="project-meta">
              <div className="project-meta-left">
                <span className="project-card-category">{project.category}</span>
                <h4 className="project-card-title">{project.title}</h4>
              </div>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="project-github-icon"
                title="View GitHub Repository"
                aria-label="GitHub Repository"
              >
                <GitHubIcon size={18} />
              </a>
            </div>

            <div className="project-tags">
              {project.technologies.slice(0, 4).map((tech, idx) => (
                <span key={idx} className="project-tag-pill">{tech}</span>
              ))}
              {project.technologies.length > 4 && (
                <span className="project-tag-pill project-tag-more">+{project.technologies.length - 4}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="portfolio-view-more">
        <a
          href="https://github.com/Mukesh631102"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold-solid"
        >
          View More on GitHub <ExternalLink size={16} />
        </a>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="modal-header">
              <span className="modal-badge">{selectedProject.category} &bull; {selectedProject.date}</span>
              <h3 className="modal-title">{selectedProject.title}</h3>
              <p className="modal-tagline text-gold">{selectedProject.tagline}</p>
            </div>

            <p className="modal-desc">{selectedProject.description}</p>

            <div className="modal-bullets-section">
              <h5 className="modal-subtitle">Key Architecture & Engineering Highlights</h5>
              <ul className="modal-bullets-list">
                {selectedProject.bullets.map((bullet, idx) => (
                  <li key={idx} className="modal-bullet-item">{bullet}</li>
                ))}
              </ul>
            </div>

            <div className="modal-tech-section">
              <h5 className="modal-subtitle">Technologies Employed</h5>
              <div className="modal-tech-pills">
                {selectedProject.technologies.map((t, idx) => (
                  <span key={idx} className="modal-tech-pill">{t}</span>
                ))}
              </div>
            </div>

            <div className="modal-actions">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-solid"
              >
                <GitHubIcon size={18} /> View on GitHub
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="btn-ghost"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
