import "./Contact.css";

function Contact() {
  return (
    <section id="contact">
      <h2>Contato</h2>

      <p>Entre em contato comigo pelos canais abaixo:</p>

      <div className="contact-links">
        <a
          href="https://github.com/KaykyRibeir"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a href="mailto:kaykycmr410@gmail.com">
          Email
        </a>

        <a
          href="https://wa.me/553599579595"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </section>
  );
}

export default Contact;