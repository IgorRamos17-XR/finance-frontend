import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="text-center mt-5">
      <h1>404</h1>

      <h3>Página não encontrada</h3>

      <p>
        A página que você tentou acessar não existe.
      </p>

      <Link to="/" className="btn btn-primary">
        Voltar para Home
      </Link>
    </div>
  );
}

export default NotFoundPage;