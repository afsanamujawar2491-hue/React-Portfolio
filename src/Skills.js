import React from 'react';

const skills = ['React', 'JavaScript', 'CSS', 'HTML', 'Git'];

const Skills = () => (
  <section id="skills" className="section">
    <h2>Skills</h2>
    <ul className="skills-list">
      {skills.map(skill => <li key={skill}>{skill}</li>)}
    </ul>
  </section>
);

export default Skills;
