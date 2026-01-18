import React from 'react';

import profileImg from './assets/images/profile.jpg';

const About = () => (
  <section id="about" className="section">
    <h2>About Me</h2>
    <div className="about-content">
      <img src={profileImg} alt="Profile" loading="lazy" />
      <p>
        Hello! I’m a passionate web developer with experience in React, JavaScript, and CSS.
        I love building interactive and responsive websites that provide excellent user experiences.
      </p>
    </div>
  </section>
);

export default About;
