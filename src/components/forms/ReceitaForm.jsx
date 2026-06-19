function ReceitaForm({
    editandoId,
    descricao,
    setDescricao,
    valor,
    setValor,
    categoria,
    setCategoria,
    data,
    setData,
    cadastrarReceita,
    editarReceita,
    limparFormularioReceita,
    carregandoReceita,
}) {
    return (
        <>
        <h3 className="mb-3">
            {editandoId ? "Editar Receita" : "Nova Receita"}
        </h3>

        <form onSubmit={cadastrarReceita}>
            <div className="mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Descrição"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
            />
            </div>

            <div className="mb-3">
            <input
                type="number"
                className="form-control"
                placeholder="Valor"
                value={valor ?? ""}
                min="0.01"
                step="0.01"
                onChange={(e) => setValor(e.target.value)}
            />
            </div>

            <div className="mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
            />
            </div>

            <div className="mb-3">
            <input
                type="date"
                className="form-control"
                value={data}
                onChange={(e) => setData(e.target.value)}
            />
            </div>

            {editandoId ? (
            <>
                <button
                type="button"
                onClick={() => editarReceita(editandoId)}
                className="btn btn-warning w-100 mb-2"
                disabled={carregandoReceita}
                >
                {carregandoReceita ? "Atualizando..." : "Atualizar Receita"}
                </button>

                <button
                type="button"
                onClick={limparFormularioReceita}
                className="btn btn-secondary w-100"
                >
                Cancelar Edição
                </button>
            </>
            ) : (
            <>
                <button
                type="submit"
                className="btn btn-success w-100"
                disabled={carregandoReceita}
                >
                {carregandoReceita ? "Salvando..." : "Salvar Receita"}
                </button>

                <button
                type="button"
                className="btn btn-outline-secondary w-100 mt-2"
                onClick={limparFormularioReceita}
                >
                Limpar Campos
                </button>
            </>
            )}
        </form>
        </>
    );
    }

    export default ReceitaForm;