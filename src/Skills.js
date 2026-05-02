import React from 'react';

const skills = ['React', 'JavaScript', 'CSS', 'HTML', 'Swift','Objective C' ,'Git','Java','SQL','Spring Boot','Boosttrap'];

const Skills = () => (
   <section className="projects-section">
    <h2 className="projects-title">My Skills</h2>
  
  <div className="skills-container">
  
    {skills.map((skill, i) => (
      <div key={i} className="skill-card">{skill}</div>
    ))}
  </div>
  </section>
);

export default Skills;
