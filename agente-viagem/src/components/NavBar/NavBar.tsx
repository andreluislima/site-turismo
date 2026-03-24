import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import logo from "../../assets/img/logo2.svg";
import "./NavBar.scss";

const navItems = [
  { label: "Pacotes", path: "/pacotes" },
  { label: "Soluções", path: "/solucoes" },
  { label: "Passagens", path: "/passagens" },
  { label: "Passeios", path: "/passeios" },
  { label: "Sobre", path: "/sobre" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const location = useLocation();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // Fecha ao trocar de rota
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // Fecha ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        closeMenu();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Fecha com ESC
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Evita scroll do body quando menu mobile está aberto
  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  return (
    <nav className="navbar fixed-top">
      <div className="nav-container">
        <Link className="navbar-brand" to="/" onClick={closeMenu}>
          <img className="logo" src={logo} alt="Logo" />
        </Link>

        <button
          ref={buttonRef}
          className={`menu-toggle ${isOpen ? "is-open" : ""}`}
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-controls="mobile-menu"
        >
          <span />
          <span />
          <span />
        </button>

        <div
          ref={menuRef}
          id="mobile-menu"
          className={`menu-wrapper ${isOpen ? "open" : ""}`}
        >
          <ul className="navbar-nav">
            {navItems.map((item) => (
              <li className="nav-item" key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}