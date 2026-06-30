import EmptyState from "../EmptyState";
import PainelFiltros from "../PainelFiltros";
import Paginacao from "../Paginacao";
import ResumoLista from "../ResumoLista";
import TituloSecao from "../TituloSecao";

function ReceitasLista({
  filtroReceita,
  setFiltroReceita,
  receitas,
  receitasFiltradas,
  receitasPaginadas,
  paginaReceitas,
  setPaginaReceitas,
  totalPaginasReceitas,
  ordemReceitas,
  setOrdemReceitas,
  formatarMoeda,
  formatarData,
  setDescricao,
  setValor,
  setCategoria,
  setData,
  setEditandoId,
  setRecorrente,
  setFrequenciaRecorrencia,
  setProximaRecorrencia,
  excluirReceita,
}) {
  const totalReceitas = receitasFiltradas.reduce(
    (total, receita) => total + Number(receita.valor),
    0,
  );

  const maiorReceita = receitasFiltradas.reduce(
    (maior, receita) => Math.max(maior, Number(receita.valor)),
    0,
  );

  return (
    <>
      <TituloSecao
        tipo="receita"
        icone="💵"
        titulo="Minhas Receitas"
        subtitulo="Acompanhe todas as entradas financeiras cadastradas."
      />
      <PainelFiltros
        titulo="Filtro de Receitas"
        placeholder="Buscar receita..."
        filtro={filtroReceita}
        setFiltro={setFiltroReceita}
        ordem={ordemReceitas}
        setOrdem={setOrdemReceitas}
        total={receitasFiltradas.length}
        tipo="Receitas"
      />

      <ResumoLista
        tipo="receita"
        totalItens={receitasFiltradas.length}
        valorTotal={formatarMoeda(totalReceitas)}
        maiorValor={formatarMoeda(maiorReceita)}
        cor="text-success"
      />

      {Array.isArray(receitas) && receitas.length === 0 && (
        <EmptyState
          icone="💵"
          titulo="Nenhuma receita cadastrada"
          descricao="Cadastre sua primeira receita para começar a acompanhar suas entradas financeiras."
          acaoTexto="Cadastrar receita"
          aoClicar={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        />
      )}

      {Array.isArray(receitas) &&
        receitas.length > 0 &&
        receitasFiltradas.length === 0 && (
          <EmptyState
            icone="🔎"
            titulo="Nenhuma receita encontrada"
            descricao="Não encontramos receitas com esse termo. Tente limpar a busca ou usar outra palavra."
            acaoTexto="Limpar busca"
            aoClicar={() => setFiltroReceita("")}
          />
        )}

      {Array.isArray(receitasPaginadas) &&
        receitasPaginadas.map((receita) => (
          <div
            key={receita.id}
            className="movimento-card movimento-receita fade-up"
          >
            <div className="movimento-topo">
              <div className="movimento-icone">💵</div>

              <div>
                <h5>{receita.descricao}</h5>
                <span className="movimento-data">
                  {formatarData(receita.data)}
                </span>
              </div>
            </div>

            <div className="movimento-info">
              <strong className="movimento-valor">
                {formatarMoeda(receita.valor)}
              </strong>

              <div className="movimento-badges">
                <span className="movimento-badge">{receita.categoria}</span>

                {receita.recorrente && (
                  <span className="movimento-badge-recorrente">
                    🔁 {receita.frequenciaRecorrencia}
                  </span>
                )}
              </div>
            </div>

            <div className="movimento-acoes">
              <button
                className="movimento-btn movimento-btn-editar"
                onClick={() => {
                  setDescricao(receita.descricao);
                  setValor(receita.valor);
                  setCategoria(receita.categoria);
                  setData(receita.data.split("T")[0]);
                  setRecorrente(receita.recorrente);

                  setFrequenciaRecorrencia(receita.frequenciaRecorrencia || "");

                  setProximaRecorrencia(
                    receita.proximaRecorrencia
                      ? receita.proximaRecorrencia.split("T")[0]
                      : "",
                  );
                  setEditandoId(receita.id);

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
                onClick={() => excluirReceita(receita.id)}
              >
                🗑 Excluir
              </button>
            </div>
          </div>
        ))}
      <Paginacao
        paginaAtual={paginaReceitas}
        totalPaginas={totalPaginasReceitas}
        aoMudarPagina={setPaginaReceitas}
      />
    </>
  );
}

export default ReceitasLista;
