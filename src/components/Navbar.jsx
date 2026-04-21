import { useState } from 'react';
import '../components.css/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        
        <h2 className="logo">Alejo-carmona</h2>

        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#">Inicio</a>
          <a href="#">Proyectos</a>
          <a href="#">Skills</a>
          <a href="#">Contacto</a>
        </nav>

        <div 
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </header>
  );
};

export default Navbar;