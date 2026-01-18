import React, { Suspense } from 'react';

import project1 from './assets/images/project1.webp';
import project2 from './assets/images/project2.png';
const ProjectCard = React.lazy(() => import('./ProjectCard'));

const projects = [
      { id: 1, title: 'Event planner website', description: 'This website is for planning your wedding,birthday,personalevents and corporate events', image: project1, link: '#' },
  { id: 2, title: 'New Year Greetings', description: 'This website allows you to create a greeting crds,random resolutions and quotes', image: project2, link: '#' },

];

const Projects = () => (
  <section id="projects" className="section">
    <h2>Projects</h2>
    <Suspense fallback={<p>Loading projects...</p>}>
      <div className="projects-grid">
        {projects.map(project => <ProjectCard key={project.id} {...project} />)}
      </div>
    </Suspense>
  </section>
);

export default Projects;
