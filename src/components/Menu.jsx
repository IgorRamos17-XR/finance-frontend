import { NavLink } from "react-router-dom";
import useTemaContext from "../hooks/useTemaContext";
import { FiHome, FiUser, FiSettings, FiBarChart2 } from "react-icons/fi";

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
          <FiHome size={18} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/perfil"
          className={({ isActive }) =>
            isActive ? "menu-link menu-link-active" : "menu-link"
          }
        >
          <FiUser size={18} />
          <span>Meu Perfil</span>
        </NavLink>

        <NavLink
          to="/configuracoes"
          className={({ isActive }) =>
            isActive ? "menu-link menu-link-active" : "menu-link"
          }
        >
           <FiSettings size={18} />
  <span>Configurações</span>
        </NavLink>

        <NavLink
          to="/relatorios"
          className={({ isActive }) =>
            isActive ? "menu-link menu-link-active" : "menu-link"
          }
        >
          <FiBarChart2 size={18} />
  <span>Relatórios</span>
        </NavLink>
      </div>

      <button type="button" className="menu-tema-btn" onClick={alternarTema}>
        {temaEscuro ? "☀️ Tema claro" : "🌙 Tema escuro"}
      </button>
    </nav>
  );
}

export default Menu;
