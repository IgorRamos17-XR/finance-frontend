function useFormularioProps({
  receita,
  despesa,
  meta,
  atualizarDados,
  mostrarMensagem,
}) {
  const receitaProps = {
    editandoId: receita.editandoId,
    descricao: receita.descricao,
    setDescricao: receita.setDescricao,
    valor: receita.valor,
    setValor: receita.setValor,
    categoria: receita.categoria,
    setCategoria: receita.setCategoria,
    data: receita.data,
    setData: receita.setData,
    recorrente: receita.recorrente,
    setRecorrente: receita.setRecorrente,
    frequenciaRecorrencia: receita.frequenciaRecorrencia,
    setFrequenciaRecorrencia: receita.setFrequenciaRecorrencia,
    proximaRecorrencia: receita.proximaRecorrencia,
    setProximaRecorrencia: receita.setProximaRecorrencia,
    cadastrarReceita: (e) =>
      receita.cadastrarReceita(e, atualizarDados, mostrarMensagem),
    editarReceita: (id) =>
      receita.editarReceita(id, atualizarDados, mostrarMensagem),
    limparFormularioReceita: receita.limparFormularioReceita,
    carregandoReceita: receita.carregandoReceita,
  };

  const despesaProps = {
    editandoDespesaId: despesa.editandoDespesaId,
    descricaoDespesa: despesa.descricaoDespesa,
    setDescricaoDespesa: despesa.setDescricaoDespesa,
    valorDespesa: despesa.valorDespesa,
    setValorDespesa: despesa.setValorDespesa,
    categoriaDespesa: despesa.categoriaDespesa,
    setCategoriaDespesa: despesa.setCategoriaDespesa,
    dataDespesa: despesa.dataDespesa,
    setDataDespesa: despesa.setDataDespesa,
    recorrenteDespesa: despesa.recorrenteDespesa,
    setRecorrenteDespesa: despesa.setRecorrenteDespesa,
    frequenciaRecorrenciaDespesa: despesa.frequenciaRecorrenciaDespesa,
    setFrequenciaRecorrenciaDespesa:
      despesa.setFrequenciaRecorrenciaDespesa,
    proximaRecorrenciaDespesa: despesa.proximaRecorrenciaDespesa,
    setProximaRecorrenciaDespesa: despesa.setProximaRecorrenciaDespesa,
    cadastrarDespesa: (e) =>
      despesa.cadastrarDespesa(e, atualizarDados, mostrarMensagem),
    editarDespesa: (id) =>
      despesa.editarDespesa(id, atualizarDados, mostrarMensagem),
    limparFormularioDespesa: despesa.limparFormularioDespesa,
    carregandoDespesa: despesa.carregandoDespesa,
  };

  const metaProps = {
    editandoMetaId: meta.editandoMetaId,
    descricaoMeta: meta.descricaoMeta,
    setDescricaoMeta: meta.setDescricaoMeta,
    valorObjetivo: meta.valorObjetivo,
    setValorObjetivo: meta.setValorObjetivo,
    valorAtual: meta.valorAtual,
    setValorAtual: meta.setValorAtual,
    dataLimite: meta.dataLimite,
    setDataLimite: meta.setDataLimite,
    cadastrarMeta: (e) =>
      meta.cadastrarMeta(e, atualizarDados, mostrarMensagem),
    editarMeta: (id) =>
      meta.editarMeta(id, atualizarDados, mostrarMensagem),
    limparFormularioMeta: meta.limparFormularioMeta,
    carregandoMeta: meta.carregandoMeta,
  };

  return {
    receitaProps,
    despesaProps,
    metaProps,
  };
}

export default useFormularioProps;