import { FiCalendar, FiDollarSign, FiEdit3, FiFolder } from "react-icons/fi";

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
  recorrente,
  setRecorrente,
  frequenciaRecorrencia,
  setFrequenciaRecorrencia,
  proximaRecorrencia,
  setProximaRecorrencia,
  cadastrarReceita,
  editarReceita,
  limparFormularioReceita,
  carregandoReceita,
}) {
  return (
    <div className="form-finance-card form-receita-card fade-up">
      <div className="form-finance-header">
        <div className="form-finance-icon">💵</div>

        <div>
          <h3>{editandoId ? "Editar Receita" : "Nova Receita"}</h3>
          <p>
            {editandoId
              ? "Atualize as informações da sua receita."
              : "Cadastre uma nova entrada financeira."}
          </p>
        </div>
      </div>

      <form onSubmit={cadastrarReceita} className="form-finance">
        <div className="form-finance-campo">
          <label>Descrição</label>
          <div className="form-finance-input">
            <FiEdit3 size={18} />
            <input
              type="text"
              placeholder="Ex: Salário, freela, venda..."
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>
        </div>

        <div className="form-finance-campo">
          <label>Valor</label>
          <div className="form-finance-input">
            <FiDollarSign size={18} />
            <input
              type="number"
              placeholder="Ex: 1500.00"
              value={valor ?? ""}
              min="0.01"
              step="0.01"
              onChange={(e) => setValor(e.target.value)}
            />
          </div>
        </div>

        <div className="form-finance-campo">
          <label>Categoria</label>
          <div className="form-finance-input">
            <FiFolder size={18} />
            <input
              type="text"
              placeholder="Ex: Trabalho, investimentos..."
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            />
          </div>
        </div>

        <div className="form-finance-campo">
          <label>Data</label>
          <div className="form-finance-input">
            <FiCalendar size={18} />
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </div>
        </div>

        <div className="form-recorrencia-box">
          <label className="form-recorrencia-check">
            <input
              type="checkbox"
              checked={recorrente}
              onChange={(e) => setRecorrente(e.target.checked)}
            />

            <span>Receita recorrente</span>
          </label>

          {recorrente && (
            <div className="form-recorrencia-campos">
              <div className="form-finance-campo">
                <label>Frequência</label>

                <select
                  value={frequenciaRecorrencia}
                  onChange={(e) => setFrequenciaRecorrencia(e.target.value)}
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
                  value={proximaRecorrencia}
                  onChange={(e) => setProximaRecorrencia(e.target.value)}
                />
              </div>
            </div>
          )}
        </div>

        {editandoId ? (
          <div className="form-finance-acoes">
            <button
              type="button"
              onClick={() => editarReceita(editandoId)}
              className="form-btn form-btn-editar"
              disabled={carregandoReceita}
            >
              {carregandoReceita ? "Atualizando..." : "Atualizar Receita"}
            </button>

            <button
              type="button"
              onClick={limparFormularioReceita}
              className="form-btn form-btn-limpar"
            >
              Cancelar Edição
            </button>
          </div>
        ) : (
          <div className="form-finance-acoes">
            <button
              type="submit"
              className="form-btn form-btn-receita"
              disabled={carregandoReceita}
            >
              {carregandoReceita ? "Salvando..." : "Salvar Receita"}
            </button>

            <button
              type="button"
              className="form-btn form-btn-limpar"
              onClick={limparFormularioReceita}
            >
              Limpar Campos
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default ReceitaForm;
