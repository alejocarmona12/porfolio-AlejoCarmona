import '../sections/hero.css';
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <h1>Hola, soy Alejo 👋</h1>

        <h2>
          Frontend Developer especializado en React
        </h2>

        <p>
          Construyo aplicaciones web modernas enfocadas en
          performance, escalabilidad y experiencia de usuario.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            Ver proyectos
          </a>

          <a href="/cv.pdf" className="btn-secondary">
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;