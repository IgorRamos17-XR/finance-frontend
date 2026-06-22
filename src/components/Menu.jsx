import { NavLink } from "react-router-dom";
import useTemaContext from "../hooks/useTemaContext";

function Menu() {
  const { temaEscuro, alternarTema } = useTemaContext();

  return (
    <nav className="menu-financeiro">
      <div className="menu-logo">
        <span className="menu-logo-icon">💰</span>
        <div>
          <strong>Controle Financeiro</strong>
          <small>{temaEscuro ? "Tema escuro ativo" : "Tema claro ativo"}</small>
        </div>
      </div>

      <div className="menu-links">
        <NavLink
          to="/app"
          className={({ isActive }) =>
            isActive ? "menu-link menu-link-active" : "menu-link"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/perfil"
          className={({ isActive }) =>
            isActive ? "menu-link menu-link-active" : "menu-link"
          }
        >
          Meu Perfil
        </NavLink>

        <NavLink
          to="/configuracoes"
          className={({ isActive }) =>
            isActive ? "menu-link menu-link-active" : "menu-link"
          }
        >
          Configurações
        </NavLink>

        <NavLink
          to="/relatorios"
          className={({ isActive }) =>
            isActive ? "menu-link menu-link-active" : "menu-link"
          }
        >
          Relatórios
        </NavLink>
      </div>

      <button type="button" className="menu-tema-btn" onClick={alternarTema}>
        {temaEscuro ? "☀️ Tema claro" : "🌙 Tema escuro"}
      </button>
    </nav>
  );
}

export default Menu;