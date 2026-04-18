import '../components/Navbar.css';
const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <h2 className="logo">Alejo.dev</h2>

        <nav>
          <a href="#home">Inicio</a>
          <a href="#about">Sobre mí</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;