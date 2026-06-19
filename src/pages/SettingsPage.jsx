import useAuthContext from "../hooks/useAuthContext";
import useTemaContext from "../hooks/useTemaContext";

function SettingsPage() {
  const { usuario } = useAuthContext();
  const { temaEscuro, alternarTema } = useTemaContext();

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h2 className="mb-4">Configurações</h2>

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

          <button className="btn btn-outline-dark" onClick={alternarTema}>
            {temaEscuro ? "Ativar tema claro" : "Ativar tema escuro"} Tema Escuro
          </button>
        </div>

        <div>
          <h5>Dados</h5>

          <button className="btn btn-outline-primary" disabled>
            Exportar dados em breve
          </button>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;