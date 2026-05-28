import styles from "./Skills.module.css";

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
    <section id="skills" className={styles.skillsSection}>
      <h2>Habilidades</h2>

      <p>
        Tecnologias e competências desenvolvidas durante o curso na EBAC.
      </p>

      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <span key={index} className={styles.skillBadge}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;