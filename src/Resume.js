import React from 'react';

const Resume = () => (
  <div style={{ textAlign: 'center' }}>
    <h2>Resume</h2>
    <p>Download my resume for detailed experience and skills.</p>

    <a 
      href="/Resume – Afsana Mujawar.pdf" 
      download="Resume – Afsana Mujawar.pdf"
      className="button"
    >
      Download Resume
    </a>
  </div>
);

export default Resume;