function useListaProps({
  receita,
  despesa,
  meta,
  atualizarDados,
  mostrarMensagem,
  confirmar,
  formatarMoeda,
  formatarData,
}) {
  const receitasProps = {
    filtroReceita: receita.filtroReceita,
    setFiltroReceita: receita.setFiltroReceita,
    receitas: receita.receitas,
    receitasFiltradas: receita.receitasFiltradas,
    receitasPaginadas: receita.receitasPaginadas,
    paginaReceitas: receita.paginaReceitas,
    setPaginaReceitas: receita.setPaginaReceitas,
    totalPaginasReceitas: receita.totalPaginasReceitas,
    ordemReceitas: receita.ordemReceitas,
    setOrdemReceitas: receita.setOrdemReceitas,
    formatarMoeda,
    formatarData,
    setDescricao: receita.setDescricao,
    setValor: receita.setValor,
    setCategoria: receita.setCategoria,
    setData: receita.setData,
    setEditandoId: receita.setEditandoId,
    setRecorrente: receita.setRecorrente,
    setFrequenciaRecorrencia: receita.setFrequenciaRecorrencia,
    setProximaRecorrencia: receita.setProximaRecorrencia,
    excluirReceita: (id) =>
      confirmar({
        titulo: "Excluir receita",
        mensagem: "Tem certeza que deseja excluir esta receita?",
        textoConfirmar: "Excluir",
        aoConfirmar: () =>
          receita.excluirReceita(id, atualizarDados, mostrarMensagem),
      }),
  };

  const despesasProps = {
    filtroDespesa: despesa.filtroDespesa,
    setFiltroDespesa: despesa.setFiltroDespesa,
    despesas: despesa.despesas,
    despesasFiltradas: despesa.despesasFiltradas,
    despesasPaginadas: despesa.despesasPaginadas,
    paginaDespesas: despesa.paginaDespesas,
    setPaginaDespesas: despesa.setPaginaDespesas,
    totalPaginasDespesas: despesa.totalPaginasDespesas,
    ordemDespesas: despesa.ordemDespesas,
    setOrdemDespesas: despesa.setOrdemDespesas,
    formatarMoeda,
    formatarData,
    setDescricaoDespesa: despesa.setDescricaoDespesa,
    setValorDespesa: despesa.setValorDespesa,
    setCategoriaDespesa: despesa.setCategoriaDespesa,
    setDataDespesa: despesa.setDataDespesa,
    setEditandoDespesaId: despesa.setEditandoDespesaId,
    setRecorrenteDespesa: despesa.setRecorrenteDespesa,
    setFrequenciaRecorrenciaDespesa:
      despesa.setFrequenciaRecorrenciaDespesa,
    setProximaRecorrenciaDespesa: despesa.setProximaRecorrenciaDespesa,
    excluirDespesa: (id) =>
      confirmar({
        titulo: "Excluir despesa",
        mensagem: "Tem certeza que deseja excluir esta despesa?",
        textoConfirmar: "Excluir",
        aoConfirmar: () =>
          despesa.excluirDespesa(id, atualizarDados, mostrarMensagem),
      }),
  };

  const metasProps = {
    metas: meta.metas,
    formatarMoeda,
    formatarData,
    setDescricaoMeta: meta.setDescricaoMeta,
    setValorObjetivo: meta.setValorObjetivo,
    setValorAtual: meta.setValorAtual,
    setDataLimite: meta.setDataLimite,
    setEditandoMetaId: meta.setEditandoMetaId,
    excluirMeta: (id) =>
      confirmar({
        titulo: "Excluir meta",
        mensagem: "Tem certeza que deseja excluir esta meta?",
        textoConfirmar: "Excluir",
        aoConfirmar: () =>
          meta.excluirMeta(id, atualizarDados, mostrarMensagem),
      }),
  };

  return {
    receitasProps,
    despesasProps,
    metasProps,
  };
}

export default useListaProps;