import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="text-center">
      <h2>Bem-vindo ao Controle de Finanças</h2>

      <p className="text-muted">
        Organize suas receitas, despesas e acompanhe seu saldo.
      </p>

      <Link to="/app" className="btn btn-primary">
        Acessar sistema
      </Link>
    </div>
  );
}

export default HomePage;
