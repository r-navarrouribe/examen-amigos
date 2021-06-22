import { NavLink } from "react-router-dom"

export const Cabecera = () => {
    return (
    <header className="cabecera">
      <h1>Examen Listado Amigos</h1>
      <nav>
        <ul className="menu">
          <li>
            <NavLink to="/principal" activeClassName="actual">
              Principal
            </NavLink>
          </li>
          <li>
            <NavLink to="/lista" activeClassName="actual">
              Lista
            </NavLink>
          </li>
          <li>
            <NavLink to="/acerca-de" activeClassName="actual">
              Acerca De
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};