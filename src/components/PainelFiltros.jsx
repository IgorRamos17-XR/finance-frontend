function PainelFiltros({
  titulo,
  placeholder,
  filtro,
  setFiltro,
  ordem,
  setOrdem,
  total,
  tipo,
}) {
  return (
    <div className="painel-filtros">
      <div className="painel-filtros-header">
        <div>
          <h4>{titulo}</h4>
          <p>{total} item(ns) encontrado(s)</p>
        </div>

        <span className="painel-filtros-badge">{tipo}</span>
      </div>

      <div className="painel-filtros-grid">
        <div className="painel-filtro-campo">
          <label>Pesquisar</label>
          <input
            type="text"
            placeholder={placeholder}
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          />
        </div>

        <div className="painel-filtro-campo">
          <label>Ordenação</label>
          <select value={ordem} onChange={(e) => setOrdem(e.target.value)}>
            <option value="desc">Mais recentes primeiro</option>
            <option value="asc">Mais antigas primeiro</option>
          </select>
        </div>
      </div>

      {filtro && (
        <button
          type="button"
          className="painel-filtros-limpar"
          onClick={() => setFiltro("")}
        >
          Limpar filtros
        </button>
      )}
    </div>
  );
}

export default PainelFiltros;