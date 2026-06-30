import EmptyState from "../EmptyState";
import TituloSecao from "../TituloSecao";

function MetasLista({
  metas,
  formatarMoeda,
  formatarData,
  setDescricaoMeta,
  setValorObjetivo,
  setValorAtual,
  setDataLimite,
  setEditandoMetaId,
  excluirMeta,
}) {
  return (
    <>
      <TituloSecao
        tipo="meta"
        icone="🎯"
        titulo="Minhas Metas"
        subtitulo="Acompanhe seus objetivos financeiros e o progresso de cada um."
      />

      {Array.isArray(metas) && metas.length === 0 && (
        <EmptyState
          icone="🎯"
          titulo="Nenhuma meta cadastrada"
          descricao="Cadastre sua primeira meta financeira para acompanhar seus objetivos."
          acaoTexto="Cadastrar meta"
          aoClicar={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        />
      )}

      {Array.isArray(metas) &&
        metas.map((meta) => {
          const valorAtual = Number(meta.valorAtual || 0);
          const valorObjetivo = Number(meta.valorObjetivo || 0);

          const percentual =
            valorObjetivo > 0
              ? Math.min(100, Math.round((valorAtual / valorObjetivo) * 100))
              : 0;

          const valorRestante = Math.max(valorObjetivo - valorAtual, 0);

          const metaConcluida = percentual >= 100 || meta.concluida;

          const classeProgresso = metaConcluida
            ? "meta-progresso-barra meta-progresso-concluida"
            : percentual >= 70
              ? "meta-progresso-barra meta-progresso-alta"
              : "meta-progresso-barra";

          return (
            <div key={meta.id} className="meta-card fade-up">
              <div className="meta-card-topo">
                <div className="meta-icone">🎯</div>

                <div>
                  <h5>{meta.descricao}</h5>
                  <span>Prazo: {formatarData(meta.dataLimite)}</span>
                </div>
              </div>

              <div className="meta-valores">
                <strong>{formatarMoeda(meta.valorAtual)}</strong>
                <span>de {formatarMoeda(meta.valorObjetivo)}</span>
              </div>

              <div className="meta-progresso">
                <div
                  className={classeProgresso}
                  style={{ width: `${percentual}%` }}
                ></div>
              </div>

              <p className="meta-percentual">{percentual}% concluído</p>
              <p
                className={
                  metaConcluida
                    ? "meta-status meta-status-concluida"
                    : "meta-status"
                }
              >
                {metaConcluida
                  ? "Meta concluída 🎉"
                  : `Faltam ${formatarMoeda(valorRestante)} para concluir`}
              </p>

              <div className="movimento-acoes">
                <button
                  className="movimento-btn movimento-btn-editar"
                  onClick={() => {
                    setDescricaoMeta(meta.descricao);
                    setValorObjetivo(meta.valorObjetivo);
                    setValorAtual(meta.valorAtual);
                    setDataLimite(meta.dataLimite.split("T")[0]);
                    setEditandoMetaId(meta.id);

                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  ✏️ Editar
                </button>

                <button
                  className="movimento-btn movimento-btn-excluir"
                  onClick={() => excluirMeta(meta.id)}
                >
                  🗑 Excluir
                </button>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default MetasLista;
