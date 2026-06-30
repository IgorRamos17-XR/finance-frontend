function PainelRecorrencias({ receitas, despesas, formatarMoeda, formatarData }) {
  const receitasRecorrentes = Array.isArray(receitas)
    ? receitas
        .filter((receita) => receita.recorrente)
        .map((receita) => ({
          id: `receita-${receita.id}`,
          tipo: "receita",
          icone: "💵",
          descricao: receita.descricao,
          valor: receita.valor,
          categoria: receita.categoria,
          frequencia: receita.frequenciaRecorrencia,
          proxima: receita.proximaRecorrencia,
        }))
    : [];

  const despesasRecorrentes = Array.isArray(despesas)
    ? despesas
        .filter((despesa) => despesa.recorrente)
        .map((despesa) => ({
          id: `despesa-${despesa.id}`,
          tipo: "despesa",
          icone: "🛒",
          descricao: despesa.descricao,
          valor: despesa.valor,
          categoria: despesa.categoria,
          frequencia: despesa.frequenciaRecorrencia,
          proxima: despesa.proximaRecorrencia,
        }))
    : [];

  const recorrencias = [...receitasRecorrentes, ...despesasRecorrentes].sort(
    (a, b) => new Date(a.proxima) - new Date(b.proxima),
  );

  if (recorrencias.length === 0) {
    return null;
  }

  return (
    <section className="recorrencias-card fade-up">
      <div className="recorrencias-header">
        <div className="recorrencias-icon">🔁</div>

        <div>
          <h3>Painel de Recorrências</h3>
          <p>Próximas receitas e despesas recorrentes.</p>
        </div>
      </div>

      <div className="recorrencias-lista">
        {recorrencias.map((item) => (
          <div
            key={item.id}
            className={`recorrencia-item recorrencia-${item.tipo}`}
          >
            <div className="recorrencia-topo">
              <div className="recorrencia-icone">{item.icone}</div>

              <div>
                <strong>{item.descricao}</strong>
                <span>{item.categoria}</span>
              </div>
            </div>

            <div className="recorrencia-info">
              <span>{formatarMoeda(item.valor)}</span>
              <small>🔁 {item.frequencia}</small>
              <small>📅 {item.proxima ? formatarData(item.proxima) : "Sem data"}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PainelRecorrencias;