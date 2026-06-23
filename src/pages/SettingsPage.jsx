import useAuthContext from "../hooks/useAuthContext";
import useTemaContext from "../hooks/useTemaContext";
import { Link } from "react-router-dom";

function SettingsPage() {
  const { usuario } = useAuthContext();
  const { temaEscuro, alternarTema } = useTemaContext();

  return (
  <div className="card shadow-sm">
    <div className="card-body">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Configurações</h2>

        <Link
          to="/app"
          className="btn btn-outline-primary"
        >
          ← Voltar ao Dashboard
        </Link>
      </div>

      <div className="mb-4">
        <h5>Conta</h5>

        <p className="text-muted mb-1">
          Nome: <strong>{usuario?.nome}</strong>
        </p>

        <p className="text-muted">
          Email: <strong>{usuario?.email}</strong>
        </p>
      </div>

      <div className="mb-4">
        <h5>Aparência</h5>

        <button
          className="btn btn-outline-dark"
          onClick={alternarTema}
        >
          {temaEscuro
            ? "☀️ Ativar tema claro"
            : "🌙 Ativar tema escuro"}
        </button>
      </div>
    </div>
  </div>
);
}

export default SettingsPage;