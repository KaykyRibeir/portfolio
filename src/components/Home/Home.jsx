import styles from "./Home.module.css";

function Home() {
  return (
    <section id="home" className={styles.homeSection}>
      <h1 className={styles.title}>Kayky Ribeiro</h1>

      <p className={styles.subtitle}>
        Estudante da EBAC (Full Stack) com foco em desenvolvimento Front-End com React
        e Back-End com Python.
      </p>

      <p className={styles.text}>
        Este portfólio reúne projetos desenvolvidos durante minha formação,
        incluindo aplicações web, APIs e estudos em arquitetura moderna.
      </p>
    </section>
  );
}

export default Home;