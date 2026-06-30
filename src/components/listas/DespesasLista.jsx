import EmptyState from "../EmptyState";
import PainelFiltros from "../PainelFiltros";
import Paginacao from "../Paginacao";
import ResumoLista from "../ResumoLista";
import TituloSecao from "../TituloSecao";

function DespesasLista({
  filtroDespesa,
  setFiltroDespesa,
  despesas,
  despesasFiltradas,
  despesasPaginadas,
  paginaDespesas,
  setPaginaDespesas,
  totalPaginasDespesas,
  ordemDespesas,
  setOrdemDespesas,
  formatarMoeda,
  formatarData,
  setDescricaoDespesa,
  setValorDespesa,
  setCategoriaDespesa,
  setDataDespesa,
  setEditandoDespesaId,
  setRecorrenteDespesa,
  setFrequenciaRecorrenciaDespesa,
  setProximaRecorrenciaDespesa,
  excluirDespesa,
}) {
  const totalDespesas = despesasFiltradas.reduce(
    (total, despesa) => total + Number(despesa.valor),
    0,
  );

  const maiorDespesa = despesasFiltradas.reduce(
    (maior, despesa) => Math.max(maior, Number(despesa.valor)),
    0,
  );

  return (
    <>
      <TituloSecao
        tipo="despesa"
        icone="🛒"
        titulo="Minhas Despesas"
        subtitulo="Acompanhe seus gastos e mantenha o controle financeiro."
      />

      <PainelFiltros
        titulo="Filtro de Despesas"
        placeholder="Buscar despesa..."
        filtro={filtroDespesa}
        setFiltro={setFiltroDespesa}
        ordem={ordemDespesas}
        setOrdem={setOrdemDespesas}
        total={despesasFiltradas.length}
        tipo="Despesas"
      />

      <ResumoLista
        tipo="despesa"
        totalItens={despesasFiltradas.length}
        valorTotal={formatarMoeda(totalDespesas)}
        maiorValor={formatarMoeda(maiorDespesa)}
        cor="text-danger"
      />

      {Array.isArray(despesas) && despesas.length === 0 && (
        <EmptyState
          icone="🛒"
          titulo="Nenhuma despesa cadastrada"
          descricao="Cadastre sua primeira despesa para acompanhar melhor seus gastos."
          acaoTexto="Cadastrar despesa"
          aoClicar={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        />
      )}

      {Array.isArray(despesas) &&
        despesas.length > 0 &&
        despesasFiltradas.length === 0 && (
          <EmptyState
            icone="🔎"
            titulo="Nenhuma despesa encontrada"
            descricao="Não encontramos despesas com esse termo. Tente limpar a busca ou usar outra palavra."
            acaoTexto="Limpar busca"
            aoClicar={() => setFiltroDespesa("")}
          />
        )}

      {Array.isArray(despesasPaginadas) &&
        despesasPaginadas.map((despesa) => (
          <div
            key={despesa.id}
            className="movimento-card movimento-despesa fade-up"
          >
            <div className="movimento-topo">
              <div className="movimento-icone">🛒</div>

              <div>
                <h5>{despesa.descricao}</h5>
                <span className="movimento-data">
                  {formatarData(despesa.data)}
                </span>
              </div>
            </div>

            <div className="movimento-info">
              <strong className="movimento-valor">
                {formatarMoeda(despesa.valor)}
              </strong>

              <div className="movimento-badges">
                <span className="movimento-badge">{despesa.categoria}</span>

                {despesa.recorrente && (
                  <span className="movimento-badge-recorrente">
                    🔁 {despesa.frequenciaRecorrencia}
                  </span>
                )}
              </div>
            </div>

            <div className="movimento-acoes">
              <button
                className="movimento-btn movimento-btn-editar"
                onClick={() => {
                  setDescricaoDespesa(despesa.descricao);
                  setValorDespesa(despesa.valor);
                  setCategoriaDespesa(despesa.categoria);
                  setDataDespesa(despesa.data.split("T")[0]);

                  setRecorrenteDespesa(despesa.recorrente);

                  setFrequenciaRecorrenciaDespesa(
                    despesa.frequenciaRecorrencia || "",
                  );

                  setProximaRecorrenciaDespesa(
                    despesa.proximaRecorrencia
                      ? despesa.proximaRecorrencia.split("T")[0]
                      : "",
                  );

                  setEditandoDespesaId(despesa.id);

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
                onClick={() => excluirDespesa(despesa.id)}
              >
                🗑 Excluir
              </button>
            </div>
          </div>
        ))}
      <Paginacao
        paginaAtual={paginaDespesas}
        totalPaginas={totalPaginasDespesas}
        aoMudarPagina={setPaginaDespesas}
      />
    </>
  );
}

export default DespesasLista;
