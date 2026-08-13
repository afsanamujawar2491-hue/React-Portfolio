import React from 'react';
import project1Img from './assets/project1.webp';
import project2Img from './assets/project2.png';
import project3Img from './assets/project3.png';

const projects = [
  {
    id: 1,
    title: 'Event Planning App',
    description:
      'Manage your events easily with packages for weddings, birthday parties, and corporate events.',
    image: project1Img,
    technology_used:"HTML,CSS,JAVA Script",
  },
  {
    id: 2,
    title: 'New year website',
    description: 'A new year based theme website which gives you creating your own wishes card or custom wishes,or Random quotes and Random Resolutions.',
    image: project2Img,
    technology_used:"HTML,CSS,JAVA Script,React JS",
  },
  {
    id: 3,
    title: 'MY Protfolio',
    description: 'This app gives information About me,my work,my skills and my contact information',
    image: project3Img,
    technology_used:"CSS,React JS",
  },
  {
    id: 4,
    title: 'Friendzo',
    description: 'Social media platform allowing users to register, login, create posts, upload media, like, comment, share content, and manage profiles through a responsive web interface.',
    image: project3Img,
    technology_used:"React.js, Spring Boot, Java, MySQL",
  },
   {
    id: 5,
    title: 'RuralLearn – Gamified Learning Platform for Rural Education',
    description: 'Gamified e-learning platform for rural school students featuring secure authentication, interactive quizzes, rewards, badges, streaks, and leaderboards to enhance engagement. Includes a teacher admin dashboard for managing students, monitoring progress, and tracking performance through a responsive web interface.',
    image: project3Img,
    technology_used:"React.js, Spring Boot, Java, MySQL",
  },
  
  
];

const Projects = () => (
  <section className="projects-section">
    <h2 className="projects-title">🚀 My Projects</h2>
    <div className="projects-container">
      {projects.map(({ id, title, description, image,technology_used }) => (
        <div key={id} className="project-card">
          <img loading="lazy" src={image} alt={`Screenshot of ${title}`}style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
          <h3>{title}</h3>
          <p>{description}</p>
          <p>Technologies:{technology_used}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
