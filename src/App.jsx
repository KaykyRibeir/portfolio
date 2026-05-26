import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <h1>Meu Portfólio</h1>

      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;