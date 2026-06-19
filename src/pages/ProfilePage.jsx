import { Link } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

function ProfilePage() {
  const { usuario, sair } = useAuthContext();

  return (
    <div className="text-center">
      <h2 className="mb-3">Meu Perfil</h2>

      <div className="card p-3 shadow-sm mb-3">
        <p>
          <strong>Nome:</strong> {usuario?.nome}
        </p>

        <p>
          <strong>Email:</strong> {usuario?.email}
        </p>
      </div>

      <Link to="/app" className="btn btn-primary">
        Voltar ao Dashboard
      </Link>

      <button type="button" className="btn btn-danger ms-2" onClick={sair}>
        Sair
      </button>
    </div>
  );
}

export default ProfilePage;
