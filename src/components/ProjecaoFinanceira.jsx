function ProjecaoFinanceira({ receitas, despesas, dashboard, formatarMoeda }) {
  const saldoAtual = Number(dashboard.saldo || 0);

  const receitasRecorrentes = Array.isArray(receitas)
    ? receitas.filter((receita) => receita.recorrente)
    : [];

  const despesasRecorrentes = Array.isArray(despesas)
    ? despesas.filter((despesa) => despesa.recorrente)
    : [];

  const totalReceitasRecorrentes = receitasRecorrentes.reduce(
    (total, receita) => total + Number(receita.valor),
    0,
  );

  const totalDespesasRecorrentes = despesasRecorrentes.reduce(
    (total, despesa) => total + Number(despesa.valor),
    0,
  );

  const saldoMensalPrevisto =
    totalReceitasRecorrentes - totalDespesasRecorrentes;

  const saldoEm3Meses = saldoAtual + saldoMensalPrevisto * 3;

  const status =
    saldoEm3Meses >= saldoAtual
      ? "Tendência positiva"
      : "Tendência de queda";

  return (
    <section className="projecao-card fade-up">
      <div className="projecao-header">
        <div className="projecao-icon">🔮</div>

        <div>
          <h3>Projeção Financeira</h3>
          <p>Estimativa baseada nas receitas e despesas recorrentes.</p>
        </div>
      </div>

      <div className="projecao-grid">
        <div className="projecao-item">
          <span>💰 Saldo atual</span>
          <strong>{formatarMoeda(saldoAtual)}</strong>
        </div>

        <div className="projecao-item">
          <span>📆 Saldo mensal previsto</span>
          <strong>{formatarMoeda(saldoMensalPrevisto)}</strong>
        </div>

        <div className="projecao-item projecao-destaque">
          <span>🔮 Saldo em 3 meses</span>
          <strong>{formatarMoeda(saldoEm3Meses)}</strong>
        </div>

        <div className="projecao-item">
          <span>📊 Tendência</span>
          <strong>{status}</strong>
        </div>
      </div>
    </section>
  );
}

export default ProjecaoFinanceira;