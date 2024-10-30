import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './App.css';

const Home = () => (
  <div className="home">
    {/* Sección de Visión y Misión */}
    <section className="section vision-mission">
      <h2>Visión</h2>
      <p>
        En el Ministerio de Memes, nuestro objetivo es fomentar el bienestar digital, 
        la creatividad colectiva y la expansión del humor como medio de comunicación universal.
      </p>
      <h2>Misión</h2>
      <p>
        Como guardianes del entretenimiento digital, nos dedicamos a la creación y curaduría de memes 
        de calidad, generando risas contagiosas.
      </p>
    </section>

    {/* Carousel de Memes */}
    <section className="carousel-section">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        dynamicHeight
        className="meme-carousel"
      >
        <div>
          <img src="/images/meme1.jpeg" alt="Meme 1" />
        </div>
        <div>
          <img src="/images/meme2.jpeg" alt="Meme 2" />
        </div>
        <div>
          <img src="/images/meme3.jpeg" alt="Meme 3" />
        </div>
        <div>
          <img src="/images/meme4.jpeg" alt="Meme 3" />
        </div>
        <div>
          <img src="/images/meme5.jpeg" alt="Meme 3" />
        </div>
        <div>
          <img src="/images/meme6.jpeg" alt="Meme 3" />
        </div>
        <div>
          <img src="/images/meme7.jpeg" alt="Meme 3" />
        </div>
      </Carousel>
    </section>

    {/* Sección de Estructura */}
    <section className="section structure">
      <h2>Estructura</h2>
      <ul>
        <li><b>Dirección de Memes Clásicos:</b> Rescata los memes icónicos como el "Doge".</li>
        <li><b>Subsecretaría de Tendencias y Virales:</b> Analiza las tendencias globales.</li>
        <li><b>Departamento de Memes Locales y Regionales:</b> Adapta el humor internacional a nuestro contexto.</li>
        <li><b>Área de Innovación Memética:</b> Experimenta con nuevos formatos como memes en 3D.</li>
        <li><b>Comisión de Ética y Responsabilidad Memética:</b> Asegura que el contenido sea inclusivo y respetuoso.</li>
      </ul>
    </section>

    {/* Sección de Valores */}
    <section className="section values">
      <h2>Valores</h2>
      <ul>
        <li><b>Creatividad:</b> No hay límites para la imaginación.</li>
        <li><b>Inmediatez:</b> El meme correcto en el momento adecuado.</li>
        <li><b>Diversidad:</b> Fomentamos un espacio donde todos puedan reírse.</li>
        <li><b>Responsabilidad:</b> Somos conscientes del impacto social del humor.</li>
      </ul>
    </section>

    {/* Sección de Eslóganes */}
    <section className="section slogans">
      <h2>Eslóganes del Ministerio</h2>
      <p>"Una imagen vale más que mil palabras; un meme vale más que mil explicaciones."</p>
      <p>"Donde el humor y la actualidad se encuentran en una imagen."</p>
      <p>"Generando sonrisas, un meme a la vez."</p>
    </section>
  </div>
);

export default Home;