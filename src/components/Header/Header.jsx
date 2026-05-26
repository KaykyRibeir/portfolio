function Header() {
  return (
    <header style={{ padding: "20px" }}>
      <h2>Meu Portfólio</h2>

      <nav>
        <a href="#about">Sobre</a> |{" "}
        <a href="#projects">Projetos</a> |{" "}
        <a href="#skills">Skills</a> |{" "}
        <a href="#contact">Contato</a>
      </nav>
    </header>
  );
}

export default Header;