function DashboardExecutivo({
  dashboard,
  despesas,
  metas,
  receitas,
  formatarMoeda,
  formatarData,
}) {
  const totalReceitas = Number(dashboard.totalReceitas || 0);
  const saldo = Number(dashboard.saldo || 0);

  const taxaEconomia =
    totalReceitas > 0 ? Math.round((saldo / totalReceitas) * 100) : 0;

  const gastosPorCategoria = despesas.reduce((acumulador, despesa) => {
    const categoria = despesa.categoria || "Sem categoria";
    acumulador[categoria] =
      (acumulador[categoria] || 0) + Number(despesa.valor);
    return acumulador;
  }, {});

  const maiorCategoria =
    Object.entries(gastosPorCategoria).sort((a, b) => b[1] - a[1])[0]?.[0] ||
    "Nenhuma";

  const metasConcluidas = metas.filter((meta) => meta.concluida).length;

  const recorrencias = [...receitas, ...despesas]
    .filter((item) => item.recorrente && item.proximaRecorrencia)
    .sort(
      (a, b) =>
        new Date(a.proximaRecorrencia) - new Date(b.proximaRecorrencia),
    );

  const proximaRecorrencia = recorrencias[0];

  return (
    <section className="executivo-card fade-up">
      <div className="executivo-header">
        <div className="executivo-icon">💼</div>

        <div>
          <h3>Dashboard Executivo</h3>
          <p>Indicadores estratégicos para uma visão rápida das finanças.</p>
        </div>
      </div>

      <div className="executivo-grid">
        <div className="executivo-item">
          <span>💰 Saldo atual</span>
          <strong>{formatarMoeda(saldo)}</strong>
        </div>

        <div className="executivo-item">
          <span>📈 Taxa de economia</span>
          <strong>{taxaEconomia}%</strong>
        </div>

        <div className="executivo-item">
          <span>🔥 Maior categoria</span>
          <strong>{maiorCategoria}</strong>
        </div>

        <div className="executivo-item">
          <span>🎯 Metas concluídas</span>
          <strong>
            {metasConcluidas}/{metas.length}
          </strong>
        </div>

        <div className="executivo-item executivo-item-destaque">
          <span>🔁 Próxima recorrência</span>
          <strong>
            {proximaRecorrencia
              ? proximaRecorrencia.descricao
              : "Nenhuma"}
          </strong>
          {proximaRecorrencia && (
            <small>
              {formatarData(proximaRecorrencia.proximaRecorrencia)}
            </small>
          )}
        </div>
      </div>
    </section>
  );
}

export default DashboardExecutivo;