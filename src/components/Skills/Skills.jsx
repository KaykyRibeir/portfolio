import "./Skills.css";

const skills = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
];

function Skills() {
  return (
    <section id="skills">
      <h2>Habilidades</h2>

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