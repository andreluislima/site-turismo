import { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoImage from "../../assets/img/logo2.svg";
import "./NavBar.scss";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  const navPages = [
    {
      item: "pacotes",
      img: "/assets/img/icons/navbar/icons-mala.png",
      path: "/pacotes",
    },
    {
      item: "soluções de viagem",
      img: "/assets/img/icons/navbar/icons-lampada.png",
      path: "/solucoes",
    },
    {
      item: "passagens",
      img: "/assets/img/icons/navbar/icons-ingressos.png",
      path: "/passagens",
    },
    {
      item: "passeios",
      img: "/assets/img/icons/navbar/icons-mundo.png",
      path: "/passeios",
    },
    {
      item: "sobre",
      img: "/assets/img/icons/navbar/icons-pessoa.png",
      path: "/sobre",
    },
  ];

  return (
    <nav className="navbar navbar-expand-md fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img className="logo" src={LogoImage} alt="Logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-md-0 mx-5">
            {navPages.map((page) => (
              <li className="nav-item" key={page.path} onClick={closeMenu}>
                <div className="nav-content nav-spacing">
                  <NavLink
                    to={page.path}
                    className={({ isActive }) =>
                      isActive ? "nav-link active-link" : "nav-link"
                    }
                  >
                    <img src={page.img} alt={page.item} />
                    <span className="d-block">{page.item}</span>
                  </NavLink>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}