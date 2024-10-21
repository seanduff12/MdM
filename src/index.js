import React from 'react';
import ReactDOM from 'react-dom/client'; // Asegúrate de usarlo
import App from './App'; // Si App es tu componente principal
import './index.css';

// Renderiza el componente App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const Index = () => {
  return (
    <div className="index-container">
      <h1>Ministerio de Memes</h1>
      <section className="section">
        <h2>Visión</h2>
        <p>
          En el Ministerio de Memes, nuestro objetivo es fomentar el bienestar digital,
          la creatividad colectiva y la expansión del humor como medio de comunicación universal.
        </p>
      </section>

      <section className="section">
        <h2>Misión</h2>
        <p>
          Como guardianes del entretenimiento en la era digital, nos dedicamos a la creación,
          curaduría y promoción de memes de calidad que respeten la diversidad cultural.
        </p>
      </section>

      <section className="section">
        <h2>Estructura</h2>
        <ul>
          <li>Dirección de Memes Clásicos</li>
          <li>Subsecretaría de Tendencias y Virales</li>
          <li>Departamento de Memes Locales y Regionales</li>
          <li>Área de Innovación Memética</li>
          <li>Comisión de Ética y Responsabilidad Memética</li>
        </ul>
      </section>

      <section className="section">
        <h2>Valores</h2>
        <ul>
          <li><b>Creatividad:</b> El meme es una forma de arte moderno.</li>
          <li><b>Inmediatez:</b> La velocidad es nuestra prioridad.</li>
          <li><b>Diversidad:</b> Promovemos inclusión y pluralismo.</li>
          <li><b>Responsabilidad:</b> Somos conscientes del impacto social.</li>
        </ul>
      </section>

      <section className="section">
        <h2>Eslóganes del Ministerio</h2>
        <p>"Una imagen vale más que mil palabras; un meme vale más que mil explicaciones."</p>
        <p>"Donde el humor y la actualidad se encuentran en una imagen."</p>
        <p>"Generando sonrisas, un meme a la vez."</p>
      </section>
    </div>
  );
};

export default Index;


