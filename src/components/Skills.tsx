import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { TechIcon } from './TechIcon';

interface SkillsProps {
  searchQuery?: string;
}

export const Skills: React.FC<SkillsProps> = ({ searchQuery = '' }) => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [highlightedSkill, setHighlightedSkill] = useState<string>('Python');

  const allSkills = SKILL_CATEGORIES.flatMap(category => 
    category.skills.map(skill => ({ ...skill, categoryName: category.category }))
  );

  const filteredSkills = allSkills.filter(skill => {
    const matchesTab = activeTab === 'All' || skill.categoryName === activeTab;
    const matchesSearch = searchQuery.trim() === '' || 
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const categories = ['All', ...SKILL_CATEGORIES.map(c => c.category)];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-header-row">
        <h3 className="skills-title">My Skills</h3>
      </div>

      {/* Category Tabs */}
      <div className="skills-category-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`tab-btn ${activeTab === cat ? 'tab-btn-active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {filteredSkills.map((skill) => {
          const isHighlighted = highlightedSkill === skill.name || (activeTab === 'All' && skill.name === 'Python' && highlightedSkill === 'Python');

          return (
            <div
              key={skill.name}
              onClick={() => setHighlightedSkill(skill.name)}
              className={`skill-card ${isHighlighted ? 'skill-card-gold-active' : ''}`}
              title={`${skill.name} — ${skill.description}`}
            >
              <div className="skill-card-icon">
                <TechIcon
                  name={skill.icon}
                  size={32}
                  className={isHighlighted ? 'text-charcoal' : 'text-gold'}
                />
              </div>
              <span className="skill-card-name">{skill.name}</span>
              <span className="skill-card-desc">{skill.description}</span>
            </div>
          );
        })}
      </div>

      {/* Decorative Dot Grid like in reference */}
      <div className="skills-footer-decor">
        <div className="dot-grid">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
      </div>
    </section>
  );
};
