// src/components/AboutMe.jsx
import React from 'react';

import profile from './assets/profile.jpg';

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="profile-pic">
        <img
          //src="./ass/images/profile.jpg"
          src={profile}
          alt="Profile"
          loading="lazy"
        />
      </div>
      <div className="about-description">
        <h2>About Me</h2>
        <p>
          Hi! I'm a passionate web developer specializing in React and modern frontend technologies.
          I love creating performant and visually appealing websites that provide great user experiences.
        </p>
        <p>
          My expertise includes building responsive designs, implementing animations, and optimizing web performance.
          I enjoy turning complex ideas into simple, functional, and visually engaging applications.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
