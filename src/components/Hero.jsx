import '../components.css/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        
        <div className="hero-text">
          <h1>
            Hola, soy <span>Alejo Carmona</span> 👋
          </h1>

          <h2>Full Stack Developer</h2>

          <p>
            Me especializo en crear interfaces modernas, rápidas y enfocadas en la experiencia del usuario.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Ver proyectos</button>
            <button className="btn-secondary">Contacto</button>
          </div>
        </div>

        <div className="hero-image">
          <img 
            src="https://i.pravatar.cc/300" 
            alt="foto perfil" 
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
