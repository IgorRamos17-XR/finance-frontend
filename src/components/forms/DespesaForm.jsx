function DespesaForm({
        editandoDespesaId,
        descricaoDespesa,
        setDescricaoDespesa,
        valorDespesa,
        setValorDespesa,
        categoriaDespesa,
        setCategoriaDespesa,
        dataDespesa,
        setDataDespesa,
        cadastrarDespesa,
        editarDespesa,
        limparFormularioDespesa,
        carregandoDespesa,
        }) {
        return (
            <>
            <h3 className="mb-3">
                {editandoDespesaId
                ? "Editar Despesa"
                : "Nova Despesa"}
            </h3>

            <form onSubmit={cadastrarDespesa}>
                <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Descrição da despesa"
                    value={descricaoDespesa}
                    onChange={(e) =>
                    setDescricaoDespesa(e.target.value)
                    }
                />
                </div>

                <div className="mb-3">
                <input
                    type="number"
                    className="form-control"
                    placeholder="Valor da despesa"
                    value={valorDespesa ?? ""}
                    min="0.01"
                    step="0.01"
                    onChange={(e) =>
                    setValorDespesa(e.target.value)
                    }
                />
                </div>

                <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Categoria da despesa"
                    value={categoriaDespesa}
                    onChange={(e) =>
                    setCategoriaDespesa(e.target.value)
                    }
                />
                </div>

                <div className="mb-3">
                <input
                    type="date"
                    className="form-control"
                    value={dataDespesa}
                    onChange={(e) =>
                    setDataDespesa(e.target.value)
                    }
                />
                </div>

                {editandoDespesaId ? (
                <>
                    <button
                    type="button"
                    onClick={() =>
                        editarDespesa(editandoDespesaId)
                    }
                    className="btn btn-warning w-100 mb-2"
                    disabled={carregandoDespesa}
                    >
                    {carregandoDespesa
                        ? "Atualizando..."
                        : "Atualizar Despesa"}
                    </button>

                    <button
                    type="button"
                    onClick={limparFormularioDespesa}
                    className="btn btn-secondary w-100"
                    >
                    Cancelar Edição
                    </button>
                </>
                ) : (
                <>
                    <button
                    type="submit"
                    className="btn btn-danger w-100"
                    disabled={carregandoDespesa}
                    >
                    {carregandoDespesa
                        ? "Salvando..."
                        : "Salvar Despesa"}
                    </button>

                    <button
                    type="button"
                    className="btn btn-outline-secondary w-100 mt-2"
                    onClick={limparFormularioDespesa}
                    >
                    Limpar Campos
                    </button>
                </>
                )}
            </form>
            </>
        );
        }

export default DespesaForm;