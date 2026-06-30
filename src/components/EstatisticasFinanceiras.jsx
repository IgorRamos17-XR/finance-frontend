function EstatisticasFinanceiras({
  receitas,
  despesas,
  dashboard,
  formatarMoeda,
}) {
  const maiorReceita = receitas.length
    ? Math.max(...receitas.map((receita) => Number(receita.valor)))
    : 0;

  const maiorDespesa = despesas.length
    ? Math.max(...despesas.map((despesa) => Number(despesa.valor)))
    : 0;

  const mediaReceitas = receitas.length
    ? receitas.reduce((total, receita) => total + Number(receita.valor), 0) /
      receitas.length
    : 0;

  const mediaDespesas = despesas.length
    ? despesas.reduce((total, despesa) => total + Number(despesa.valor), 0) /
      despesas.length
    : 0;

  const taxaEconomia =
    Number(dashboard.totalReceitas) > 0
      ? Math.round((Number(dashboard.saldo) / Number(dashboard.totalReceitas)) * 100)
      : 0;

  const gastosPorCategoria = despesas.reduce((acumulador, despesa) => {
    const categoria = despesa.categoria || "Sem categoria";

    acumulador[categoria] =
      (acumulador[categoria] || 0) + Number(despesa.valor);

    return acumulador;
  }, {});

  const categoriaMaiorGasto =
    Object.entries(gastosPorCategoria).sort((a, b) => b[1] - a[1])[0]?.[0] ||
    "Nenhuma";

  return (
    <section className="estatisticas-card fade-up">
      <div className="estatisticas-header">
        <div className="estatisticas-icon">📊</div>

        <div>
          <h3>Estatísticas Financeiras</h3>
          <p>Resumo inteligente dos seus principais indicadores.</p>
        </div>
      </div>

      <div className="estatisticas-grid">
        <div className="estatistica-item">
          <span>🏆 Maior receita</span>
          <strong>{formatarMoeda(maiorReceita)}</strong>
        </div>

        <div className="estatistica-item">
          <span>💸 Maior despesa</span>
          <strong>{formatarMoeda(maiorDespesa)}</strong>
        </div>

        <div className="estatistica-item">
          <span>📈 Média receitas</span>
          <strong>{formatarMoeda(mediaReceitas)}</strong>
        </div>

        <div className="estatistica-item">
          <span>📉 Média despesas</span>
          <strong>{formatarMoeda(mediaDespesas)}</strong>
        </div>

        <div className="estatistica-item">
          <span>🎯 Taxa de economia</span>
          <strong>{taxaEconomia}%</strong>
        </div>

        <div className="estatistica-item">
          <span>🔥 Maior categoria</span>
          <strong>{categoriaMaiorGasto}</strong>
        </div>
      </div>
    </section>
  );
}

export default EstatisticasFinanceiras;