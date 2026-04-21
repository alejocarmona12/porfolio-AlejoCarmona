import '../components.css/Seccion.css';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="skills-grid">
        <div className="skill-card">
          <i className="devicon-react-original colored"></i>
          <p>React</p>
        </div>

        <div className="skill-card">
          <i className="devicon-javascript-plain colored"></i>
          <p>JavaScript</p>
        </div>

        <div className="skill-card">
          <i className="devicon-html5-plain colored"></i>
          <p>HTML</p>
        </div>

        <div className="skill-card">
          <i className="devicon-css3-plain colored"></i>
          <p>CSS</p>
        </div>

        <div className="skill-card">
          <i className="devicon-nodejs-plain colored"></i>
          <p>Node.js</p>
        </div>

        <div className="skill-card">
          <i className="devicon-mongodb-plain colored"></i>
          <p>MongoDB</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;