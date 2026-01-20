import React from 'react';

const Footer = () => (
  <footer className="footer">
    <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
  </footer>
);

export default Footer;
