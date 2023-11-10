import React from 'react';
import './App.css';

const Header = () => (
  <header>
    <h1>Your Name</h1>
    <p>Web Developer</p>
  </header>
);

const AboutMe = () => (
  <section>
    <h2>About Me</h2>
    <p>
      Welcome to my portfolio! I am a passionate web developer with expertise in
      React, JavaScript, and other web technologies.
    </p>
  </section>
);

const Projects = () => (
  <section>
    <h2>Projects</h2>
    <div className="project">
      <h3>Project 1</h3>
      <p>Description of project 1.</p>
    </div>
    <div className="project">
      <h3>Project 2</h3>
      <p>Description of project 2.</p>
    </div>
    {/* Add more projects as needed */}
  </section>
);

const Contact = () => (
  <section>
    <h2>Contact</h2>
    <p>Email: your.email@example.com</p>
    <p>LinkedIn: linkedin.com/in/yourname</p>
    <p>GitHub: github.com/yourusername</p>
  </section>
);

const App = () => (
  <div className="App">
    <Header />
    <AboutMe />
    <Projects />
    <Contact />
  </div>
);

export default App;


