import "./Projects.css";

const projects = [
  {
    title: "Micro-frontends",
    description:
      "Arquitetura de frontend modular baseada em micro-frontends, com foco em escalabilidade e separação de aplicações.",
    tech: "React, Micro-frontends, JavaScript",
    github: "https://github.com/KaykyRibeir/micro-frontends.git",
    image: "https://placehold.co/600x300/0f172a/e2e8f0?text=Micro-frontends"
  },
  {
    title: "Diário de Bordo PWA",
    description:
      "Aplicação Progressive Web App para registro de atividades com suporte offline e armazenamento local no navegador.",
    tech: "React, PWA, LocalStorage",
    github: "https://github.com/KaykyRibeir/diario-de-bordo-pwa.git",
    image: "https://placehold.co/600x300/0f172a/e2e8f0?text=Diario+de+Bordo+PWA"
  },
  {
    title: "Todo Recoil EBAC",
    description:
      "Sistema de tarefas com gerenciamento de estado global utilizando Recoil e boas práticas em React.",
    tech: "React, Recoil, JavaScript",
    github: "https://github.com/KaykyRibeir/todo-recoil-ebac.git",
    image: "https://placehold.co/600x300/0f172a/e2e8f0?text=Todo+Recoil"
  },
  {
    title: "CI/CD Next.js",
    description:
      "Projeto focado em automação de deploy e integração contínua utilizando Next.js e GitHub Actions.",
    tech: "Next.js, CI/CD, GitHub Actions",
    github: "https://github.com/KaykyRibeir/ci-cd-nextjs.git",
    image: "https://placehold.co/600x300/0f172a/e2e8f0?text=CI+CD+Next.js"
  },
  {
    title: "Lista de Tarefas EBAC",
    description:
      "Aplicação de lista de tarefas desenvolvida para prática de React, componentização e estado.",
    tech: "React, JavaScript, CSS",
    github: "https://github.com/KaykyRibeir/lista-de-tarefas-EBAC.git",
    image: "https://placehold.co/600x300/0f172a/e2e8f0?text=Lista+de+Tarefas"
  },
  {
    title: "Portfólio Pessoal",
    description:
      "Portfólio desenvolvido para apresentação de projetos e habilidades em desenvolvimento Front-End.",
    tech: "React, CSS, Vite",
    github: "https://github.com/KaykyRibeir/portfolio.git",
    image: "https://placehold.co/600x300/0f172a/e2e8f0?text=Portfolio"
  },
  {
    title: "Blog Next.js EBAC",
    description:
      "Blog com Next.js focado em SEO, performance e renderização otimizada.",
    tech: "Next.js, React, SEO",
    github: "https://github.com/KaykyRibeir/blog-nextjs-ebac.git",
    image: "https://placehold.co/600x300/0f172a/e2e8f0?text=Blog+Next.js"
  },
  {
    title: "Portal de Viagens EBAC",
    description:
      "Portal responsivo de viagens com foco em experiência do usuário e organização de conteúdo.",
    tech: "React, CSS, Responsividade",
    github: "https://github.com/KaykyRibeir/portal-viagens-ebac.git",
    image: "https://placehold.co/600x300/0f172a/e2e8f0?text=Portal+de+Viagens"
  }
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projetos</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">

            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <small>{project.tech}</small>

            <div style={{ marginTop: "10px" }}>
              <a href={project.github} target="_blank" rel="noreferrer">
                Ver no GitHub
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;