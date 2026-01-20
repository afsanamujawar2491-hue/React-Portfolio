import React from 'react';

const skills = ['React', 'JavaScript', 'CSS', 'HTML', 'Swift','Objective C' ,'Git'];

const Skills = () => (
  <div className="skills-container">
    {skills.map((skill, i) => (
      <div key={i} className="skill-card">{skill}</div>
    ))}
  </div>
);

export default Skills;
