import styles from "./About.module.css";
import foto from "../../assets/foto.jpg"; // você vai precisar adicionar essa imagem

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <img src={foto} alt="Minha foto" className={styles.photo} />

        <div className={styles.text}>
          <h2>Sobre Mim</h2>

          <p>
            Olá! Eu sou desenvolvedor em formação, focado em React e desenvolvimento web.
            Estou construindo projetos para evoluir minhas habilidades e montar meu portfólio.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;