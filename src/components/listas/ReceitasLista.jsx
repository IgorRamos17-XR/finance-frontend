function ReceitasLista({
    filtroReceita,
    setFiltroReceita,
    receitas,
    receitasFiltradas,
    ordemReceitas,
    setOrdemReceitas,
    formatarMoeda,
    formatarData,
    setDescricao,
    setValor,
    setCategoria,
    setData,
    setEditandoId,
    excluirReceita,
}) {
return (
        <>
        <h3 className="mb-4">Minhas Receitas</h3>

        <input
            type="text"
            className="form-control mb-3"
            placeholder="Buscar receita..."
            value={filtroReceita}
            onChange={(e) => setFiltroReceita(e.target.value)}
        />

        {filtroReceita && (
            <button
            type="button"
            className="btn btn-outline-secondary w-100 mb-3"
            onClick={() => setFiltroReceita("")}
            >
            Limpar busca
            </button>
        )}

        <p className="text-muted">
            {receitasFiltradas.length} receita(s) encontrada(s)
        </p>

        <select
            className="form-control mb-3"
            value={ordemReceitas}
            onChange={(e) => setOrdemReceitas(e.target.value)}
        >
            <option value="desc">
            Mais recentes primeiro
            </option>

            <option value="asc">
            Mais antigas primeiro
            </option>
        </select>

        {Array.isArray(receitas) && receitas.length === 0 && (
            <p className="text-muted">
            Nenhuma receita cadastrada.
            </p>
        )}

        {Array.isArray(receitas) &&
            receitas.length > 0 &&
            receitasFiltradas.length === 0 && (
            <p className="text-muted">
                Nenhuma receita encontrada com esse filtro.
            </p>
            )}

        {Array.isArray(receitas) &&
            receitasFiltradas.map((receita) => (
            <div key={receita.id} className="receita-item">
                <h5>{receita.descricao}</h5>

                <p>
                <strong>Valor:</strong>{" "}
                {formatarMoeda(receita.valor)}
                </p>

                <p>
                <strong>Categoria:</strong>{" "}
                {receita.categoria}
                </p>

                <p>
                <strong>Data:</strong>{" "}
                {formatarData(receita.data)}
                </p>

                <button
                className="btn btn-primary me-2"
                onClick={() => {
                    setDescricao(receita.descricao);
                    setValor(receita.valor);
                    setCategoria(receita.categoria);
                    setData(receita.data.split("T")[0]);
                    setEditandoId(receita.id);

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
                onClick={() => excluirReceita(receita.id)}
                >
                Excluir
                </button>
            </div>
            ))}
        </>
    );
    }

export default ReceitasLista;