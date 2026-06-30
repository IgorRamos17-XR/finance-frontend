function InsightsFinanceiros({ dashboard, metas }) {
  const totalReceitas = Number(dashboard.totalReceitas || 0);
  const totalDespesas = Number(dashboard.totalDespesas || 0);
  const saldo = Number(dashboard.saldo || 0);

  const percentualGasto =
    totalReceitas > 0 ? Math.round((totalDespesas / totalReceitas) * 100) : 0;

  const metasAtivas = Array.isArray(metas)
    ? metas.filter((meta) => !meta.concluida).length
    : 0;

  const insights = [];

  if (saldo > 0) {
    insights.push({
      tipo: "positivo",
      icone: "✅",
      titulo: "Saldo positivo",
      texto: "Seu saldo está positivo. Continue mantendo esse controle financeiro.",
    });
  }

  if (saldo < 0) {
    insights.push({
      tipo: "alerta",
      icone: "⚠️",
      titulo: "Saldo negativo",
      texto: "Suas despesas estão maiores que suas receitas. Revise seus gastos.",
    });
  }

  if (percentualGasto >= 70) {
    insights.push({
      tipo: "alerta",
      icone: "📉",
      titulo: "Atenção aos gastos",
      texto: `Suas despesas representam ${percentualGasto}% das suas receitas.`,
    });
  }

  if (percentualGasto < 70 && totalReceitas > 0) {
    insights.push({
      tipo: "positivo",
      icone: "📈",
      titulo: "Boa margem financeira",
      texto: `Você está usando ${percentualGasto}% das suas receitas em despesas.`,
    });
  }

  if (metasAtivas > 0) {
    insights.push({
      tipo: "meta",
      icone: "🎯",
      titulo: "Metas em andamento",
      texto: `Você possui ${metasAtivas} meta(s) ativa(s). Continue acompanhando seu progresso.`,
    });
  }

  const hoje = new Date();

const metasProximasVencimento = Array.isArray(metas)
  ? metas.filter((meta) => {
      if (meta.concluida) return false;

      const dataLimite = new Date(meta.dataLimite);
      const diferencaDias = Math.ceil(
        (dataLimite - hoje) / (1000 * 60 * 60 * 24),
      );

      return diferencaDias >= 0 && diferencaDias <= 15;
    })
  : [];

if (metasProximasVencimento.length > 0) {
  insights.push({
    tipo: "alerta",
    icone: "⏰",
    titulo: "Meta próxima do vencimento",
    texto: `${metasProximasVencimento.length} meta(s) vencem nos próximos 15 dias.`,
  });
}

const metasVencidas = Array.isArray(metas)
  ? metas.filter((meta) => {
      if (meta.concluida) return false;

      const dataLimite = new Date(meta.dataLimite);
      return dataLimite < hoje;
    })
  : [];

if (metasVencidas.length > 0) {
  insights.push({
    tipo: "alerta",
    icone: "🚨",
    titulo: "Metas vencidas",
    texto: `${metasVencidas.length} meta(s) passaram da data limite. Revise seus objetivos.`,
  });
}

  if (insights.length === 0) {
    insights.push({
      tipo: "neutro",
      icone: "💡",
      titulo: "Comece registrando seus dados",
      texto: "Cadastre receitas, despesas e metas para receber análises financeiras.",
    });
  }

  return (
    <section className="insights-card fade-up">
      <div className="insights-header">
        <div className="insights-icon">💡</div>

        <div>
          <h3>Insights Financeiros</h3>
          <p>Análises automáticas com base nos seus dados.</p>
        </div>
      </div>

      <div className="insights-lista">
        {insights.map((insight, index) => (
          <div
            key={index}
            className={`insight-item insight-${insight.tipo}`}
          >
            <div className="insight-item-icon">{insight.icone}</div>

            <div>
              <strong>{insight.titulo}</strong>
              <p>{insight.texto}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default InsightsFinanceiros;