import React from 'react';

const skills = ['React', 'JavaScript', 'CSS', 'HTML', 'Swift', 'Objective C', 'Git'];

const Skills = () => (
  <div className="skills-section">
    <h1 className="title">💻 Skills</h1>
    {/* <div className="divider"></div> */}

    <div className="skills-container">
      {skills.map((skill) => (
        <div key={skill} className="skill-card">
          {skill}
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
