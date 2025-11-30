import React from "react";
import "../assets/css/Footer.css";

const Footer = () => {
  return (
    <footer className="page-footer blue darken-3 my-5 yellow">
      <div className="container">
        <div className="row">
          <h5 className="white-text">
            <ul>
              <li>
                <a className="white-text text-lighten-3">
                  Correo empresarial: contacto.empresa@email.com
                </a>
              </li>
              <li>
                <a className="white-text text-lighten-3">
                  Número de contacto: +56 9 5555 5555
                </a>
              </li>
            </ul>
          </h5>
        </div>
      </div>
      <div className="footer-copyright">
      <div className="container">© 2025 Abel Aravena</div>
    </div>
    </footer>
  );
};

export default Footer;
