function SaudeFinanceira({ dashboard, metas }) {
  const totalReceitas = Number(dashboard.totalReceitas || 0);
  const totalDespesas = Number(dashboard.totalDespesas || 0);
  const saldo = Number(dashboard.saldo || 0);

  const percentualGasto =
    totalReceitas > 0 ? (totalDespesas / totalReceitas) * 100 : 100;

  const metasConcluidas = Array.isArray(metas)
    ? metas.filter((meta) => meta.concluida).length
    : 0;

  const totalMetas = Array.isArray(metas) ? metas.length : 0;

  const percentualMetas =
    totalMetas > 0 ? (metasConcluidas / totalMetas) * 100 : 0;

  let nota = 100;

  if (totalReceitas <= 0) nota -= 30;
  if (saldo < 0) nota -= 35;
  if (percentualGasto > 80) nota -= 25;
  if (percentualGasto > 100) nota -= 20;
  if (totalMetas > 0 && percentualMetas < 30) nota -= 10;

  nota = Math.max(0, Math.min(100, Math.round(nota)));

  const nivel =
    nota >= 85
      ? "Excelente"
      : nota >= 70
        ? "Boa"
        : nota >= 50
          ? "Atenção"
          : "Crítica";

  const icone = nota >= 85 ? "🟢" : nota >= 70 ? "🔵" : nota >= 50 ? "🟡" : "🔴";

  const mensagem =
    nota >= 85
      ? "Sua saúde financeira está excelente. Continue mantendo bons hábitos."
      : nota >= 70
        ? "Sua saúde financeira está boa, mas ainda há espaço para melhorar."
        : nota >= 50
          ? "Sua saúde financeira exige atenção. Reveja seus gastos e metas."
          : "Sua saúde financeira está crítica. Priorize reduzir despesas e recuperar saldo.";

  return (
    <section className="saude-card fade-up">
      <div className="saude-header">
        <div className="saude-icon">❤️</div>

        <div>
          <h3>Saúde Financeira</h3>
          <p>Avaliação geral da sua situação financeira.</p>
        </div>
      </div>

      <div className="saude-conteudo">
        <div className="saude-nota">
          <span>{icone}</span>
          <strong>{nota}/100</strong>
          <p>{nivel}</p>
        </div>

        <div className="saude-barra">
          <div
            className="saude-barra-progresso"
            style={{ width: `${nota}%` }}
          ></div>
        </div>

        <p className="saude-mensagem">{mensagem}</p>
      </div>
    </section>
  );
}

export default SaudeFinanceira;