import { FiTrendingUp, FiTrendingDown, FiDollarSign } from "react-icons/fi";

function Dashboard({
  dashboard,
  formatarMoeda,
  inicioFiltro,
  setInicioFiltro,
  fimFiltro,
  setFimFiltro,
  buscarDashboardPorPeriodo,
  limparFiltroDashboard,
}) {
  return (
    <section className="dashboard-resumo">
      <div className="dashboard-cards-grid">
        <div className="dashboard-card dashboard-card-receita">
          <div className="dashboard-card-icon">
            <FiTrendingUp size={28} />
          </div>

          <div>
            <p>Total de Receitas</p>
            <strong>{formatarMoeda(dashboard.totalReceitas)}</strong>
            <span>Entradas registradas</span>
          </div>
        </div>

        <div className="dashboard-card dashboard-card-despesa">
          <div className="dashboard-card-icon">
            <FiTrendingDown size={28} />
          </div>

          <div>
            <p>Total de Despesas</p>
            <strong>{formatarMoeda(dashboard.totalDespesas)}</strong>
            <span>Saídas registradas</span>
          </div>
        </div>

        <div
          className={
            dashboard.saldo >= 0
              ? "dashboard-card dashboard-card-saldo"
              : "dashboard-card dashboard-card-negativo"
          }
        >
          <div className="dashboard-card-icon">
            <FiDollarSign size={28} />
          </div>

          <div>
            <p>Saldo Atual</p>
            <strong>{formatarMoeda(dashboard.saldo)}</strong>
            <span>{dashboard.saldo >= 0 ? "Saldo positivo" : "Saldo negativo"}</span>
          </div>
        </div>
      </div>

      <div className="dashboard-filtro-card">
        <div className="dashboard-filtro-info">
          <h4>Filtrar dashboard</h4>
          <p>Escolha um período para analisar seu resumo financeiro.</p>
        </div>

        <div className="dashboard-filtro-grid">
          <div className="dashboard-filtro-campo">
            <label>Data inicial</label>
            <input
              type="date"
              value={inicioFiltro}
              onChange={(e) => setInicioFiltro(e.target.value)}
            />
          </div>

          <div className="dashboard-filtro-campo">
            <label>Data final</label>
            <input
              type="date"
              value={fimFiltro}
              onChange={(e) => setFimFiltro(e.target.value)}
            />
          </div>

          <div className="dashboard-filtro-botoes">
            <button
              type="button"
              className="dashboard-btn-filtrar"
              onClick={buscarDashboardPorPeriodo}
            >
              🔎 Filtrar
            </button>

            <button
              type="button"
              className="dashboard-btn-limpar"
              onClick={limparFiltroDashboard}
            >
              ✖ Limpar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;