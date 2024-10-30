import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import WeeklyMeme from './WeeklyMeme';
import HistoricalMemes from './HistoricalMemes';
import './App.css';

const App = () => (
  <Router>
    <div className="app-container">
      {/* Barra de Navegación */}
      <nav className="navbar">
        <Link to="/">Inicio</Link>
        <Link to="/weekly">Semanal</Link>
        <Link to="/historical">Histórico</Link>
      </nav>

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weekly" element={<WeeklyMeme />} />
        <Route path="/historical" element={<HistoricalMemes />} />
      </Routes>
    </div>
  </Router>
);

export default App;
