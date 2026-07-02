function InteligenciaFinanceira({ despesas, metas, dashboard }) {
  const totalReceitas = Number(dashboard.totalReceitas || 0);
  const saldo = Number(dashboard.saldo || 0);

  const despesasRecorrentes = despesas.filter((despesa) => despesa.recorrente);

  const totalDespesasRecorrentes = despesasRecorrentes.reduce(
    (total, despesa) => total + Number(despesa.valor),
    0,
  );

  const percentualRecorrentes =
    totalReceitas > 0
      ? Math.round((totalDespesasRecorrentes / totalReceitas) * 100)
      : 0;

  const gastosPorCategoria = despesas.reduce((acumulador, despesa) => {
    const categoria = despesa.categoria || "Sem categoria";
    acumulador[categoria] =
      (acumulador[categoria] || 0) + Number(despesa.valor);
    return acumulador;
  }, {});

  const maiorCategoria =
    Object.entries(gastosPorCategoria).sort((a, b) => b[1] - a[1])[0] || null;

  const metasConcluidas = metas.filter((meta) => meta.concluida).length;

  const recomendacoes = [];

  if (saldo > 0) {
    recomendacoes.push({
      tipo: "positivo",
      icone: "📈",
      titulo: "Saldo positivo",
      texto: "Seu saldo está positivo. Isso indica um bom controle financeiro.",
    });
  }

  if (saldo < 0) {
    recomendacoes.push({
      tipo: "alerta",
      icone: "🚨",
      titulo: "Saldo negativo",
      texto: "Suas despesas superaram suas receitas. Revise seus gastos prioritários.",
    });
  }

  if (percentualRecorrentes >= 50) {
    recomendacoes.push({
      tipo: "alerta",
      icone: "🔁",
      titulo: "Recorrências elevadas",
      texto: `Suas despesas recorrentes representam ${percentualRecorrentes}% das receitas.`,
    });
  }

  if (maiorCategoria) {
    recomendacoes.push({
      tipo: "info",
      icone: "🔥",
      titulo: "Categoria de maior gasto",
      texto: `Sua maior categoria de gasto é ${maiorCategoria[0]}.`,
    });
  }

  if (metas.length > 0) {
    recomendacoes.push({
      tipo: "meta",
      icone: "🎯",
      titulo: "Progresso das metas",
      texto: `Você concluiu ${metasConcluidas} de ${metas.length} meta(s).`,
    });
  }

  if (recomendacoes.length === 0) {
    recomendacoes.push({
      tipo: "info",
      icone: "💡",
      titulo: "Continue registrando",
      texto: "Cadastre mais receitas, despesas e metas para receber recomendações inteligentes.",
    });
  }

  return (
    <section className="inteligencia-card fade-up">
      <div className="inteligencia-header">
        <div className="inteligencia-icon">🧠</div>

        <div>
          <h3>Inteligência Financeira</h3>
          <p>Recomendações automáticas baseadas nos seus dados.</p>
        </div>
      </div>

      <div className="inteligencia-lista">
        {recomendacoes.map((item, index) => (
          <div
            key={index}
            className={`inteligencia-item inteligencia-${item.tipo}`}
          >
            <div className="inteligencia-item-icon">{item.icone}</div>

            <div>
              <strong>{item.titulo}</strong>
              <p>{item.texto}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InteligenciaFinanceira;