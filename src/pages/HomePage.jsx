import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="home-page">
      <div className="home-card">
        <div className="home-icon">💰</div>

        <span className="home-badge">Gestão financeira inteligente</span>

        <h1>Bem-vindo ao Controle de Finanças</h1>

        <p>
          Organize receitas, acompanhe despesas, visualize gráficos e tenha mais
          clareza sobre seu dinheiro em um só lugar.
        </p>

        <Link to="/login" className="home-btn">
          Acessar sistema →
        </Link>

        <div className="home-beneficios">
          <div>
            <strong>📊 Dashboard</strong>
            <span>Resumo visual das finanças</span>
          </div>

          <div>
            <strong>📁 Relatórios</strong>
            <span>Análises por período</span>
          </div>

          <div>
            <strong>🔐 Seguro</strong>
            <span>Acesso com autenticação</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;