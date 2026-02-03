import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-text">¿Te interesa mi perfil? ¡Hablemos!</p>
      <a href="mailto:tuemail@gmail.com" className="email-button">
        tuemail@gmail.com
      </a>
      <p className="copyright">
        © {new Date().getFullYear()} Tu Nombre. Casi todos los derechos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
