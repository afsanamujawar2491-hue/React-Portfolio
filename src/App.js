
import React, { Suspense } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutMe = React.lazy(() => import('./About'));
const Projects = React.lazy(() => import('./Project'));
const Skills = React.lazy(() => import('./Skills'));
const Resume = React.lazy(() => import('./Resume'));
const Contact = React.lazy(() => import('./Contact'));
<<<<<<< HEAD
const Qualification = React.lazy(() => import('./Qualification'));

=======
>>>>>>> 82ba57e965c4db5f24733b8ec4519f231c92d328

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div style={{ textAlign: 'center', marginTop: '2rem' }}>Loading...</div>}>
        <section id="about"><AboutMe /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
<<<<<<< HEAD
        <section id="qualification"><Qualification /></section>
        <section id="resume"><Resume /></section>
        <section id="contact"><Contact /></section>

=======
        <section id="resume"><Resume /></section>
        <section id="contact"><Contact /></section>
>>>>>>> 82ba57e965c4db5f24733b8ec4519f231c92d328
      </Suspense>
      <Footer/>
    </>
  );
}

export default App;
