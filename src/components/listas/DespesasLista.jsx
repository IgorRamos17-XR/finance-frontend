function DespesasLista({
    filtroDespesa,
    setFiltroDespesa,
    despesas,
    despesasFiltradas,
    ordemDespesas,
    setOrdemDespesas,
    formatarMoeda,
    formatarData,
    setDescricaoDespesa,
    setValorDespesa,
    setCategoriaDespesa,
    setDataDespesa,
    setEditandoDespesaId,
    excluirDespesa,
}) {
  return (
    <>
        <h3 className="mb-4">Minhas Despesas</h3>

        <input
            type="text"
            className="form-control mb-3"
            placeholder="Buscar despesa..."
            value={filtroDespesa}
            onChange={(e) => setFiltroDespesa(e.target.value)}
        />

        {filtroDespesa && (
            <button
            type="button"
            className="btn btn-outline-secondary w-100 mb-3"
            onClick={() => setFiltroDespesa("")}
            >
            Limpar busca
            </button>
        )}

        <p className="text-muted">
            {despesasFiltradas.length} despesa(s) encontrada(s)
        </p>

        <select
            className="form-control mb-3"
            value={ordemDespesas}
            onChange={(e) => setOrdemDespesas(e.target.value)}
        >
            <option value="desc">
            Mais recentes primeiro
            </option>

            <option value="asc">
            Mais antigas primeiro
            </option>
        </select>

        {Array.isArray(despesas) && despesas.length === 0 && (
            <p className="text-muted">
            Nenhuma despesa cadastrada.
            </p>
        )}

        {Array.isArray(despesas) &&
            despesas.length > 0 &&
            despesasFiltradas.length === 0 && (
            <p className="text-muted">
                Nenhuma despesa encontrada com esse filtro.
            </p>
            )}

        {Array.isArray(despesas) &&
            despesasFiltradas.map((despesa) => (
            <div key={despesa.id} className="receita-item">
                <h5>{despesa.descricao}</h5>

                <p>
                <strong>Valor:</strong>{" "}
                {formatarMoeda(despesa.valor)}
                </p>

                <p>
                <strong>Categoria:</strong>{" "}
                {despesa.categoria}
                </p>

                <p>
                <strong>Data:</strong>{" "}
                {formatarData(despesa.data)}
                </p>

                <button
                className="btn btn-primary me-2"
                onClick={() => {
                    setDescricaoDespesa(despesa.descricao);
                    setValorDespesa(despesa.valor);
                    setCategoriaDespesa(despesa.categoria);
                    setDataDespesa(despesa.data.split("T")[0]);
                    setEditandoDespesaId(despesa.id);

                    window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                    });
                }}
                >
                Editar
                </button>

                <button
                className="btn btn-danger"
                onClick={() => excluirDespesa(despesa.id)}
                >
                Excluir
                </button>
            </div>
            ))}
        </>
    );
}

export default DespesasLista;