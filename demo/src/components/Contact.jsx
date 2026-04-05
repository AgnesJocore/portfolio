import '../styles/Contact.css';

export default function Contact() {
  const currentYear = new Date().getFullYear(); // Dynamic year

  return (
    <footer className="contact-section">
      <div className="contact-container">
        {/* Name & Tagline */}
        <div className="header-group">
          <h2 className="contact-name">AGNES JOSEPH</h2>
          <p className="contact-tagline">
            Crafting intuitive digital experiences with purpose
          </p>
        </div>

        {/* Contact Information - Side-by-side grid */}
        <div className="contact-info-grid">
          <a 
            href="mailto:agnes321joseph@gmail.com" 
            className="contact-item email"
          >
            <span className="icon">📧</span>
            <span className="label">Email</span>
            <span className="value">agnes321joseph@gmail.com</span>
          </a>
          <a 
            href="tel:+918304898639" 
            className="contact-item phone"
          >
            <span className="icon">📱</span>
            <span className="label">Phone</span>
            <span className="value">+91 8304898639</span>
          </a>
        </div>

        {/* GitHub CTA */}
        <div className="social-links">
          <a 
            href="https://github.com/AgnesJocore" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link github-btn"
          >
            <span>View GitHub</span> <span className="arrow">→</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="copyright-wrapper">
          <p className="copyright">
            © {currentYear} Agnes Joseph. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}