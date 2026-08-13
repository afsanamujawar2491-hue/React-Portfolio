import React from "react";

const educationData = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Pune University",
   
  },
  {
    degree: "Diploma in Computer Technology",
    institution: "MSBTE",
    
  }
];

function Qualification() {
  return (
    <div className="education-container">
      <h1 className="title">🎓 Education</h1>

      {educationData.map((edu, index) => (
        <div className="education-card" key={index}>
          <h2>{edu.degree}</h2>
          <h3>{edu.institution}</h3>
          <p className="duration">{edu.duration}</p>
          <p className="grade">{edu.grade}</p>

          {edu.subjects && (
            <div className="subjects">
              <h4>Relevant Subjects:</h4>
              <ul>
                {edu.subjects.map((sub, i) => (
                  <li key={i}>{sub}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Qualification;