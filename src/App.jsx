import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.main}>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;