import { FiCalendar, FiDollarSign, FiEdit3, FiFolder } from "react-icons/fi";

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
  recorrenteDespesa,
  setRecorrenteDespesa,
  frequenciaRecorrenciaDespesa,
  setFrequenciaRecorrenciaDespesa,
  proximaRecorrenciaDespesa,
  setProximaRecorrenciaDespesa,
  cadastrarDespesa,
  editarDespesa,
  limparFormularioDespesa,
  carregandoDespesa,
}) {
  return (
    <div className="form-finance-card form-despesa-card fade-up">
      <div className="form-finance-header">
        <div className="form-finance-icon">🛒</div>

        <div>
          <h3>{editandoDespesaId ? "Editar Despesa" : "Nova Despesa"}</h3>
          <p>
            {editandoDespesaId
              ? "Atualize as informações da sua despesa."
              : "Cadastre uma nova saída financeira."}
          </p>
        </div>
      </div>

      <form onSubmit={cadastrarDespesa} className="form-finance">
        <div className="form-finance-campo">
          <label>Descrição</label>
          <div className="form-finance-input">
            <FiEdit3 size={18} />
            <input
              type="text"
              placeholder="Ex: Mercado, aluguel, transporte..."
              value={descricaoDespesa}
              onChange={(e) => setDescricaoDespesa(e.target.value)}
            />
          </div>
        </div>

        <div className="form-finance-campo">
          <label>Valor</label>
          <div className="form-finance-input">
            <FiDollarSign size={18} />
            <input
              type="number"
              placeholder="Ex: 250.00"
              value={valorDespesa ?? ""}
              min="0.01"
              step="0.01"
              onChange={(e) => setValorDespesa(e.target.value)}
            />
          </div>
        </div>

        <div className="form-finance-campo">
          <label>Categoria</label>
          <div className="form-finance-input">
            <FiFolder size={18} />
            <input
              type="text"
              placeholder="Ex: Alimentação, casa..."
              value={categoriaDespesa}
              onChange={(e) => setCategoriaDespesa(e.target.value)}
            />
          </div>
        </div>

        <div className="form-finance-campo">
          <label>Data</label>
          <div className="form-finance-input">
            <FiCalendar size={18} />
            <input
              type="date"
              value={dataDespesa}
              onChange={(e) => setDataDespesa(e.target.value)}
            />
          </div>
        </div>

        <div className="form-recorrencia-box">
          <label className="form-recorrencia-check">
            <input
              type="checkbox"
              checked={recorrenteDespesa}
              onChange={(e) => setRecorrenteDespesa(e.target.checked)}
            />

            <span>Despesa recorrente</span>
          </label>

          {recorrenteDespesa && (
            <div className="form-recorrencia-campos">
              <div className="form-finance-campo">
                <label>Frequência</label>

                <select
                  value={frequenciaRecorrenciaDespesa}
                  onChange={(e) =>
                    setFrequenciaRecorrenciaDespesa(e.target.value)
                  }
                >
                  <option value="">Selecione</option>
                  <option value="Semanal">Semanal</option>
                  <option value="Mensal">Mensal</option>
                  <option value="Anual">Anual</option>
                </select>
              </div>

              <div className="form-finance-campo">
                <label>Próxima recorrência</label>

                <input
                  type="date"
                  value={proximaRecorrenciaDespesa}
                  onChange={(e) => setProximaRecorrenciaDespesa(e.target.value)}
                />
              </div>
            </div>
          )}
        </div>

        {editandoDespesaId ? (
          <div className="form-finance-acoes">
            <button
              type="button"
              onClick={() => editarDespesa(editandoDespesaId)}
              className="form-btn form-btn-editar"
              disabled={carregandoDespesa}
            >
              {carregandoDespesa ? "Atualizando..." : "Atualizar Despesa"}
            </button>

            <button
              type="button"
              onClick={limparFormularioDespesa}
              className="form-btn form-btn-limpar"
            >
              Cancelar Edição
            </button>
          </div>
        ) : (
          <div className="form-finance-acoes">
            <button
              type="submit"
              className="form-btn form-btn-despesa"
              disabled={carregandoDespesa}
            >
              {carregandoDespesa ? "Salvando..." : "Salvar Despesa"}
            </button>

            <button
              type="button"
              className="form-btn form-btn-limpar"
              onClick={limparFormularioDespesa}
            >
              Limpar Campos
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default DespesaForm;
