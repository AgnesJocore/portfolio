import { useState } from 'react';
import '../styles/Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Furniture Shopping App',
    category: 'UI/UX',
    image: '/images/furniture.png', 
    viewLink: 'https://www.figma.com/proto/fNWwaOIDgdyhULSn0Jcvxk/Furniture?node-id=65-61&p=f&t=F3tlmuJ3jJJUmUE6-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=65%3A61',
  },
  {
    id: 2,
    title: 'Perfume Shopping App',
    category: 'UI/UX',
    image: '/images/Drop.png', 
    viewLink: 'https://www.figma.com/proto/zIQE6pnA7CkoLPjf9KPJFX/Drop?node-id=88-6&p=f&t=N5InnkgK71vDzJi6-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=88%3A6&show-proto-sidebar=1',
  },
  {
    id: 3,
    title: 'KNOT Designing App',
    category: 'UI/UX',
    image: '/images/knot.png', 
    viewLink: 'https://www.figma.com/proto/JAvVAamg9kqempC3NIQg06/KNOT?node-id=90-22&p=f&t=LEKBNyBA9Ficp1Bq-0&scaling=scale-down&content-scaling=fixed&page-id=90%3A22',
  },
  {
    id: 4,
    title: 'Cooking Recipe App',
    category: 'UI/UX',
    image: '/images/cooking.png', 
    viewLink: 'https://www.figma.com/proto/sPwUMnI7yZ7Z4YdlIfIuVq/cooking-recipe?node-id=0-1&p=f&t=7lG9Y8WneDfSqr6e-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2039%3A3',
  },
  {
    id: 5,
    title: 'Recipe Finder Web',
    category: 'React',
    image: '/images/recipe-web.png', 
    viewLink: 'https://recipe-finder-three-amber.vercel.app',
  },
  {
    id: 6,
    title: 'Useless Web App',
    category: 'React',
    image: '/images/useless.png', 
    viewLink: 'https://useless-project-green.vercel.app/',
  },
  {
    id: 7,
    title: 'Home Tutoring Poster Design',
    category: 'Graphic Design', 
    image: '/images/design.png', 
    viewLink: 'https://www.figma.com/proto/RbToUYHhCdRoFI86isFgdN/Home-Tutoring?node-id=0-3&p=f&t=uk29TSNsv7jA7qBo-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
  },
  {
    id: 8,
    title: 'Plant-Emotion',
    category: 'UI/UX', 
    image: '/images/image.png', 
    viewLink: 'https://www.figma.com/proto/DPHlLRksJrAX8mGNPQehcM/Plant-Emotion?node-id=8-57&p=f&t=uk29TSNsv7jA7qBo-0&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=8%3A57',
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const filters = ['All', 'UI/UX', 'React', 'Graphic Design'];

  // Filter projects based on category
  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  // Only show 3 projects if showAll is false
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  // Handle filter click - reset showAll to false
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setShowAll(false);
  };

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        {/* Header Section */}
        <div className="projects-header">
          <h2 className="projects-title">My Projects</h2>
          
          <div className="filter-chips">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`chip ${activeFilter === filter ? 'chip-active' : ''}`}
                onClick={() => handleFilterClick(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Section - 3 cards per row */}
        <div className="projects-grid">
          {displayedProjects.map((project) => (
            <article key={project.id} className="project-card">
              <a href={project.viewLink} target="_blank" rel="noopener noreferrer" className="card-link">
                <div className="image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="hover-overlay">
                    <span>View Project →</span>
                  </div>
                </div>
                
                <div className="card-details">
                  <h3>{project.title}</h3>
                  <span className="category">{project.category}</span>
                </div>
              </a>
            </article>
          ))}
        </div>

        {/* View All Button - Only show if there are more than 3 projects */}
        {filteredProjects.length > 3 && !showAll && (
          <div className="view-all-wrapper">
            <button className="view-all-btn" onClick={() => setShowAll(true)}>
              View All Works
            </button>
          </div>
        )}
      </div>
    </section>
  );
}