import "./Projects.css";

const projects = [
  {
    title: "Diário de Bordo PWA",
    description: "App para registro de atividades com suporte offline.",
    tech: "React, PWA, CSS",
  },
  {
    title: "API de Tarefas",
    description: "API com autenticação e CRUD de tarefas.",
    tech: "FastAPI, Python",
  },
  {
    title: "Portfólio Pessoal",
    description: "Site para exibir projetos e habilidades.",
    tech: "React, CSS",
  },
];

function Projects() {
  return (
    <section id="projects" style={{ padding: "40px" }}>
      <h2>Projetos</h2>

      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <small>{project.tech}</small>
        </div>
      ))}
    </section>
  );
}

export default Projects;