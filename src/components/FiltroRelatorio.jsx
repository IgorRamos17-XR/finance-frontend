function FiltroRelatorio({
  dataInicio,
  setDataInicio,
  dataFim,
  setDataFim,
  aoFiltrar,
  aoLimpar,
}) {
  return (
    <div className="filtro-relatorio-card">
      <div className="filtro-relatorio-header">
        <div>
          <h4>Filtrar período</h4>
          <p>Escolha um intervalo para analisar seus dados.</p>
        </div>
      </div>

      <div className="filtro-relatorio-grid">
        <div className="filtro-campo">
          <label>Data inicial</label>
          <input
            type="date"
            value={dataInicio}
            onChange={(e) => setDataInicio(e.target.value)}
          />
        </div>

        <div className="filtro-campo">
          <label>Data final</label>
          <input
            type="date"
            value={dataFim}
            onChange={(e) => setDataFim(e.target.value)}
          />
        </div>

        <div className="filtro-botoes">
          <button type="button" className="btn-filtro-aplicar" onClick={aoFiltrar}>
            🔎 Filtrar
          </button>

          <button type="button" className="btn-filtro-limpar" onClick={aoLimpar}>
            ✖ Limpar
          </button>
        </div>
      </div>
    </div>
  );
}

export default FiltroRelatorio;