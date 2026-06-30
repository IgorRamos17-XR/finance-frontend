function ResumoMetas({ metas, formatarMoeda }) {
  const totalMetas = metas.length;

  const metasConcluidas = metas.filter((meta) => meta.concluida).length;

  const valorObjetivoTotal = metas.reduce(
    (total, meta) => total + Number(meta.valorObjetivo),
    0,
  );

  const valorAtualTotal = metas.reduce(
    (total, meta) => total + Number(meta.valorAtual),
    0,
  );

  const percentualGeral =
    valorObjetivoTotal > 0
      ? Math.min(100, Math.round((valorAtualTotal / valorObjetivoTotal) * 100))
      : 0;

  return (
    <section className="resumo-metas-card fade-up">
      <div className="resumo-metas-header">
        <div className="resumo-metas-icon">🎯</div>

        <div>
          <h3>Metas Financeiras</h3>
          <p>Acompanhe o progresso geral dos seus objetivos.</p>
        </div>
      </div>

      <div className="resumo-metas-grid">
        <div>
          <span>Total de metas</span>
          <strong>{totalMetas}</strong>
        </div>

        <div>
          <span>Concluídas</span>
          <strong>{metasConcluidas}</strong>
        </div>

        <div>
          <span>Valor objetivo</span>
          <strong>{formatarMoeda(valorObjetivoTotal)}</strong>
        </div>

        <div>
          <span>Valor atual</span>
          <strong>{formatarMoeda(valorAtualTotal)}</strong>
        </div>
      </div>

      <div className="resumo-metas-progresso-area">
        <div className="resumo-metas-progresso-info">
          <span>Progresso geral</span>
          <strong>{percentualGeral}%</strong>
        </div>

        <div className="resumo-metas-progresso">
          <div
            className="resumo-metas-progresso-barra"
            style={{ width: `${percentualGeral}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default ResumoMetas;