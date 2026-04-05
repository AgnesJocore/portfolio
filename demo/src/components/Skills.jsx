import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skills = [
    {
      title: 'UI/UX Design',
      icon: '🎨',
      description: 'Crafting intuitive and beautiful user experiences',
      tags: ['UI Design', 'Wireframing', 'Prototyping', 'Figma', 'User Research'],
    },
    {
      title: 'Web Development',
      icon: '💻',
      description: 'Building modern, responsive web applications',
      tags: ['React', 'HTML5', 'CSS3', 'JavaScript'],
    },
    {
      title: 'Personal Skills',
      icon: '🤝',
      description: 'Bringing teams together to deliver great results',
      tags: ['Team Management', 'Adaptability', 'Consistency', 'Communication'],
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        {/* Section Header */}
        <div className="skills-header">
          <p className="skills-label">What I bring to the table</p>
          <h2 className="skills-title">Skills & Expertise</h2>
        </div>

        {/* Cards Grid */}
        <div className="skills-grid">
          {skills.map((category, index) => (
            <div key={index} className="skill-card">

              {/* Top Row: Icon + Title */}
              <div className="skill-card-top">
                <span className="skill-icon">{category.icon}</span>
                <div className="skill-number">0{index + 1}</div>
              </div>

              {/* Title */}
              <h3 className="skill-category">{category.title}</h3>

              {/* Description */}
              <p className="skill-description">{category.description}</p>

              {/* Divider */}
              <div className="skill-divider" />

              {/* Skill Tags */}
              <div className="skill-tags">
                {category.tags.map((tag, idx) => (
                  <span key={idx} className="skill-tag">{tag}</span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;