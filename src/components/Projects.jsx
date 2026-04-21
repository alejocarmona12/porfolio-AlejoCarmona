import '../components.css/Seccion.css';
const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Proyectos</h2>

      <div className="projects-grid">
        <div className="card">
          <h3>App Clima</h3>
          <p>App hecha con React consumiendo API.</p>
        </div>

        <div className="card">
          <h3>Todo App</h3>
          <p>Lista de tareas con localStorage.</p>
        </div>

        <div className="card">
          <h3>Portfolio</h3>
          <p>Mi sitio personal.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;