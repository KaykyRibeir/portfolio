function Header() {
  return (
    <header style={{
      padding: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      background: "#111827",
      borderBottom: "1px solid #1f2937",
      position: "sticky",
      top: 0,
      zIndex: 10
    }}>
      <h2 style={{ color: "white" }}>Portfólio</h2>

      <nav style={{ display: "flex", gap: "15px" }}>
        <a href="#home" style={{ color: "#e2e8f0" }}>Home</a>
        <a href="#about" style={{ color: "#e2e8f0" }}>Sobre</a>
        <a href="#projects" style={{ color: "#e2e8f0" }}>Projetos</a>
        <a href="#skills" style={{ color: "#e2e8f0" }}>Skills</a>
        <a href="#contact" style={{ color: "#e2e8f0" }}>Contato</a>
      </nav>
    </header>
  );
}

export default Header;