import React from "react";

export default function Header() {
  return (
    <header className="encabezado">
      <nav className="navbar navbar-expand-lg barra-navegacion ">
        <article className="container-fluid">
          <aside className="collapse navbar-collapse contenedor-enlaces" id="navbarNav">
            <ul className="navbar-nav lista">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
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
