import { FiCalendar, FiDollarSign, FiEdit3, FiTarget } from "react-icons/fi";

function MetaForm({
  editandoMetaId,
  descricaoMeta,
  setDescricaoMeta,
  valorObjetivo,
  setValorObjetivo,
  valorAtual,
  setValorAtual,
  dataLimite,
  setDataLimite,
  cadastrarMeta,
  editarMeta,
  limparFormularioMeta,
  carregandoMeta,
}) {
  return (
    <div className="form-finance-card form-meta-card fade-up">
      <div className="form-finance-header">
        <div className="form-finance-icon">🎯</div>

        <div>
          <h3>{editandoMetaId ? "Editar Meta" : "Nova Meta"}</h3>
          <p>
            {editandoMetaId
              ? "Atualize o progresso da sua meta financeira."
              : "Cadastre um novo objetivo financeiro."}
          </p>
        </div>
      </div>

      <form onSubmit={cadastrarMeta} className="form-finance">
        <div className="form-finance-campo">
          <label>Descrição</label>

          <div className="form-finance-input">
            <FiEdit3 size={18} />

            <input
              type="text"
              placeholder="Ex: Comprar notebook"
              value={descricaoMeta}
              onChange={(e) => setDescricaoMeta(e.target.value)}
            />
          </div>
        </div>

        <div className="form-finance-campo">
          <label>Valor objetivo</label>

          <div className="form-finance-input">
            <FiTarget size={18} />

            <input
              type="number"
              placeholder="Ex: 5000"
              value={valorObjetivo ?? ""}
              min="0.01"
              step="0.01"
              onChange={(e) => setValorObjetivo(e.target.value)}
            />
          </div>
        </div>

        {editandoMetaId && (
          <div className="form-finance-campo">
            <label>Valor atual</label>

            <div className="form-finance-input">
              <FiDollarSign size={18} />

              <input
                type="number"
                placeholder="Quanto já foi economizado?"
                value={valorAtual ?? ""}
                min="0"
                step="0.01"
                onChange={(e) => setValorAtual(e.target.value)}
              />
            </div>
          </div>
        )}

        <div className="form-finance-campo">
          <label>Data limite</label>

          <div className="form-finance-input">
            <FiCalendar size={18} />

            <input
              type="date"
              value={dataLimite}
              onChange={(e) => setDataLimite(e.target.value)}
            />
          </div>
        </div>

        {editandoMetaId ? (
          <div className="form-finance-acoes">
            <button
              type="button"
              onClick={() => editarMeta(editandoMetaId)}
              className="form-btn form-btn-editar"
              disabled={carregandoMeta}
            >
              {carregandoMeta ? "Atualizando..." : "Atualizar Meta"}
            </button>

            <button
              type="button"
              onClick={limparFormularioMeta}
              className="form-btn form-btn-limpar"
            >
              Cancelar Edição
            </button>
          </div>
        ) : (
          <div className="form-finance-acoes">
            <button
              type="submit"
              className="form-btn form-btn-meta"
              disabled={carregandoMeta}
            >
              {carregandoMeta ? "Salvando..." : "Salvar Meta"}
            </button>

            <button
              type="button"
              className="form-btn form-btn-limpar"
              onClick={limparFormularioMeta}
            >
              Limpar Campos
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default MetaForm;
