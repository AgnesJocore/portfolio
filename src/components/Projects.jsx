import { useState } from 'react';
import '../styles/Projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Furniture Shopping App',
    category: 'UI/UX',
    image: '/images/furniture.png', 
    viewLink: 'https://www.figma.com/proto/fNWwaOIDgdyhULSn0Jcvxk/Furniture?node-id=0-1&p=f&t=qUN4zqTsWM6UciUL-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=65%3A61',
  },
  {
    id: 2,
    title: 'Perfume Brand Identity',
    category: 'UI/UX',
    image: '/images/Drop.png', 
    viewLink: 'https://www.figma.com/proto/zIQE6pnA7CkoLPjf9KPJFX/Drop?node-id=88-6&p=f&t=XudJ9izs5NZFtv1C-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=88%3A6&show-proto-sidebar=1',
  },
  {
    id: 3,
    title: 'KNOT Dating App',
    category: 'UI/UX',
    image: '/images/knot.png', 
    viewLink: 'https://www.figma.com/proto/JAvVAamg9kqempC3NIQg06/KNOT?node-id=92-37',
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
    title: 'Tution Poster Design',
    category: 'Graphic Design', 
    image: '/images/image.png', 
    viewLink: 'https://www.figma.com/proto/JAvVAamg9kqempC3NIQg06/Tution?node-id=235-2&t=m65JH5yj6WcAkaN1-0&scaling=contain&content-scaling=fixed&page-id=0%3A1',
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