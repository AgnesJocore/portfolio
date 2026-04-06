import React from 'react';
import '../styles/Hero.css';
import resumeFile from '../assets/Resume.pdf';

const Home = () => {
  return (
    <div className="home">
      <section className="hero" id="home">

        {/* Background decorative blobs */}
        <div className="blob blob-1" />
        <div className="blob blob-2" />

        <div className="hero-inner">

          {/* LEFT SIDE - Text Content */}
          <div className="hero-left">

            {/* Available Badge */}
            <div className="available-badge">
              <span className="badge-dot" />
              Available for work
            </div>

            <h1 className="hero-title">
              Hello, I'm<br />
              <span className="highlight">Agnes</span>
              <span className="highlight-dot">.</span>
            </h1>

            <p className="hero-role">UI/UX Designer & Frontend Developer</p>

            <p className="hero-about">
              I build intuitive, visually refined digital experiences — combining 
              thoughtful design with clean, responsive code to create products that 
              are both beautiful and functional.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta">
              <a
                href={resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View Resume
              </a>
              <a href="#projects" className="btn-secondary">
                See My Work →
              </a>
            </div>

           
          </div>

          {/* RIGHT SIDE - Visual Card */}
          <div className="hero-right">
            <div className="hero-card">
              <div className="hero-card-inner">

                {/* Avatar Circle */}
                <div className="avatar-circle">
                  <span className="avatar-initials">AJ</span>
                </div>

                {/* Name + Role inside card */}
                <h2 className="card-name">Agnes Joseph</h2>
                <p className="card-role">UI/UX Designer & Dev</p>

                {/* Skill Tags */}
                <div className="card-tags">
                  <span className="card-tag">Figma</span>
                  <span className="card-tag">React</span>
                  <span className="card-tag">CSS</span>
                  <span className="card-tag">Prototyping</span>
                </div>

                {/* GitHub link */}
                <a
                  href="https://github.com/AgnesJocore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-github"
                >
                  View GitHub →
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;