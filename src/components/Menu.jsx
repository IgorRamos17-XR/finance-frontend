import { NavLink } from "react-router-dom";
import useTemaContext from "../hooks/useTemaContext";

function Menu() {
  const { temaEscuro, alternarTema } = useTemaContext();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded mb-4 px-3">
      <span className="navbar-brand fw-bold">Controle Financeiro</span>

      <span className="badge bg-secondary me-3">
        {temaEscuro ? "Tema escuro" : "Tema claro"}
      </span>

      <div className="navbar-nav">
        <NavLink
          to="/app"
          className={({ isActive }) =>
            isActive ? "nav-link active fw-bold" : "nav-link"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/perfil"
          className={({ isActive }) =>
            isActive ? "nav-link active fw-bold" : "nav-link"
          }
        >
          Meu Perfil
        </NavLink>

        <NavLink
          to="/configuracoes"
          className={({ isActive }) =>
            isActive ? "nav-link active fw-bold" : "nav-link"
          }
        >
          Configurações
        </NavLink>

        <NavLink
          to="/relatorios"
          className={({ isActive }) =>
            isActive ? "nav-link active fw-bold" : "nav-link"
          }
        >
          Relatórios
        </NavLink>

        <button
          type="button"
          className="btn btn-sm btn-outline-secondary ms-auto"
          onClick={alternarTema}
        >
          {temaEscuro ? "Tema claro" : "Tema escuro"}
        </button>
      </div>
    </nav>
  );
}

export default Menu;
