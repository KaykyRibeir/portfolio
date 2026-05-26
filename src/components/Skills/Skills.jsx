import "./Skills.css";

const skills = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "Responsividade",
  "APIs REST",
  "Python (básico)",
];

function Skills() {
  return (
    <section id="skills">
      <h2>Habilidades</h2>

      <p>
        Tecnologias e competências desenvolvidas durante o curso na EBAC.
      </p>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;