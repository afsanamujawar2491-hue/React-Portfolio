
import React, { Suspense } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutMe = React.lazy(() => import('./About'));
const Projects = React.lazy(() => import('./Project'));
const Skills = React.lazy(() => import('./Skills'));
const Resume = React.lazy(() => import('./Resume'));
const Contact = React.lazy(() => import('./Contact'));

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div style={{ textAlign: 'center', marginTop: '2rem' }}>Loading...</div>}>
        <section id="about"><AboutMe /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="resume"><Resume /></section>
        <section id="contact"><Contact /></section>
      </Suspense>
      <Footer/>
    </>
  );
}

export default App;
