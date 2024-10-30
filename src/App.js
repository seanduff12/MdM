import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      {/* Encabezado Hero */}
      <header className="hero">
        <h1>Ministerio de Memes</h1>
        <p>Donde el humor y la creatividad convergen.</p>
        <button className="hero-button">Explorar Memes</button>
      </header>

      {/* Sección de Información */}
      <section className="info-section">
        <div className="info-text">
          <h2>Sobre Nosotros</h2>
          <p>
            Nos dedicamos a promover la creatividad colectiva y el entretenimiento digital, 
            curando los memes más icónicos de cada generación.
          </p>
        </div>
        <div className="info-image">
          <img src="/images/info-meme.jpeg" alt="Meme representativo" />
        </div>
      </section>

      {/* Sección de Proyectos (Memes Históricos) */}
      <section className="projects-section">
        <h2>Memes Históricos</h2>
        <div className="project-cards">
          <div className="project-card">
            <img src="/images/meme1.jpeg" alt="Meme 1" />
            <h3>Meme Icónico 1</h3>
          </div>
          <div className="project-card">
            <img src="/images/meme2.jpeg" alt="Meme 2" />
            <h3>Meme Icónico 2</h3>
          </div>
          <div className="project-card">
            <img src="/images/meme3.jpeg" alt="Meme 3" />
            <h3>Meme Icónico 3</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;

