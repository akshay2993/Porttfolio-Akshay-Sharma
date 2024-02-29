import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container container">
        {/*<h1 className="footer__title">Sharma</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>
        </ul>*/}

        <div className="footer__social">
          <a
            href="https://www.instagram.com/akshay_01_/"
            className="footer__social-icon"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://github.com/akshay2993"
            className="footer__social-icon"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/akshay-sharmaaa/"
            className="footer__social-icon"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; AkshaySharma. All rigths reserved
        </span>
      </div>
    </div>
  );
};
export default Footer;
