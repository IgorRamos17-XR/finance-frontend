function FiltroRelatorio({
  dataInicio,
  setDataInicio,
  dataFim,
  setDataFim,
  aoFiltrar,
  aoLimpar,
}) {
  return (
    <div className="row mb-4">
      <div className="col-md-4">
        <label className="form-label">Data Inicial</label>

        <input
          type="date"
          className="form-control"
          value={dataInicio}
          onChange={(e) => setDataInicio(e.target.value)}
        />
      </div>

      <div className="col-md-4">
        <label className="form-label">Data Final</label>

        <input
          type="date"
          className="form-control"
          value={dataFim}
          onChange={(e) => setDataFim(e.target.value)}
        />
      </div>

      <div className="col-md-4 d-flex flex-column justify-content-end">
        <button className="btn btn-primary w-100" onClick={aoFiltrar}>
          Filtrar Relatório
        </button>

        <button
          className="btn btn-outline-secondary w-100 mt-2"
          onClick={aoLimpar}
        >
          Limpar Filtro
        </button>
      </div>
    </div>
  );
}

export default FiltroRelatorio;
