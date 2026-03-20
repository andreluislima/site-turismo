import { useState } from "react";
import LogoImage from "../../assets/img/logo2.svg"
import "./NabBar.scss";
export default function NavBar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu(){
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu(){
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
    <>
      <nav className="navbar navbar-expand-md fixed-top">
        <a className="navbar-brand">
          <img className="logo" src={LogoImage} alt="Logo" />
        </a>

        {/* <app-toggle class="mx-4" [isOpen]="isMenuOpen" (toggle)="toggleMenu()"> </app-toggle> */}

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto mb-md-0 mx-5">
            <li
              className="nav-item"
              // *ngFor="let page of navPages"
              // routerLinkActive="active-link"
              // [routerLinkActiveOptions]="{ exact: false }"
              // (click)="closeMenu()"
            >
              <div className="nav-content nav-spacing">
                <a className="nav-link">
                  <img className="" alt="" />
                  <span className="d-block">{/* {{ page.item }} */}</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
