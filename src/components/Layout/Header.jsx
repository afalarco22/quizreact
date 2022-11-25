import React from "react";
import logo from '../../Img/logo.jpg'
import Logo from "../helpers/Logo";

export default function Header() {
  return (
    <header className="encabezado">
      <Logo />
      <h4>María SuculentaS</h4>
      <nav className="navbar navbar-expand-lg barra-navegacion ">
        <article className="container-fluid">
          <aside className="collapse navbar-collapse contenedor-enlaces" id="navbarNav">
            <ul className="navbar-nav lista">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Proveedores
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Clientes
                </a>
              </li>
              
            </ul>
          </aside>
        </article>
      </nav>
    </header>
  );
}
