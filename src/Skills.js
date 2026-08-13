import React from 'react';

<<<<<<< HEAD
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
=======
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
>>>>>>> 82ba57e965c4db5f24733b8ec4519f231c92d328
