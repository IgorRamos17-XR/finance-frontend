import { useState } from "react";
import despesasService from "../services/despesasService";

function useDespesas() {
  const [despesas, setDespesas] = useState([]);

  const [descricaoDespesa, setDescricaoDespesa] = useState("");
  const [valorDespesa, setValorDespesa] = useState("");
  const [categoriaDespesa, setCategoriaDespesa] = useState("");
  const [dataDespesa, setDataDespesa] = useState("");
  const [recorrenteDespesa, setRecorrenteDespesa] = useState(false);
  const [frequenciaRecorrenciaDespesa, setFrequenciaRecorrenciaDespesa] =
    useState("");
  const [proximaRecorrenciaDespesa, setProximaRecorrenciaDespesa] =
    useState("");

  const [editandoDespesaId, setEditandoDespesaId] = useState(null);

  const [carregandoDespesa, setCarregandoDespesa] = useState(false);
  const [filtroDespesa, setFiltroDespesa] = useState("");
  const [ordemDespesas, setOrdemDespesas] = useState("desc");
  const [paginaDespesas, setPaginaDespesas] = useState(1);
  const itensPorPaginaDespesas = 5;

  function alterarFiltroDespesa(valor) {
    setFiltroDespesa(valor);
    setPaginaDespesas(1);
  }

  function alterarOrdemDespesas(valor) {
    setOrdemDespesas(valor);
    setPaginaDespesas(1);
  }

  function limparFormularioDespesa() {
    setDescricaoDespesa("");
    setValorDespesa(null);
    setCategoriaDespesa("");
    setDataDespesa("");
    setEditandoDespesaId(null);
    setRecorrenteDespesa(false);
    setFrequenciaRecorrenciaDespesa("");
    setProximaRecorrenciaDespesa("");
  }

  async function editarDespesa(id, atualizarDados, mostrarMensagem) {
    if (
      !descricaoDespesa ||
      !valorDespesa ||
      !categoriaDespesa ||
      !dataDespesa
    ) {
      mostrarMensagem("Preencha todos os campos da despesa.", "danger");
      return;
    }

    if (Number(valorDespesa) <= 0) {
      mostrarMensagem("O valor da despesa deve ser maior que zero.", "danger");
      return;
    }

    setCarregandoDespesa(true);

    try {
      await despesasService.editar(id, {
        descricao: descricaoDespesa,
        valor: Number(valorDespesa),
        categoria: categoriaDespesa,
        data: dataDespesa,
        recorrente: recorrenteDespesa,
        frequenciaRecorrencia: recorrenteDespesa
          ? frequenciaRecorrenciaDespesa
          : null,
        proximaRecorrencia: recorrenteDespesa
          ? proximaRecorrenciaDespesa
          : null,
      });

      mostrarMensagem("Despesa atualizada com sucesso!", "success");

      limparFormularioDespesa();
      await atualizarDados();
    } catch {
      mostrarMensagem("Erro ao atualizar despesa", "danger");
    } finally {
      setCarregandoDespesa(false);
    }
  }

  async function excluirDespesa(id, atualizarDados, mostrarMensagem) {
    try {
      await despesasService.excluir(id);

      mostrarMensagem("Despesa excluída com sucesso!", "success");

      await atualizarDados();
    } catch {
      mostrarMensagem("Erro ao excluir despesa", "danger");
    }
  }

  const despesasFiltradas = despesas
    .filter((despesa) =>
      despesa.descricao.toLowerCase().includes(filtroDespesa.toLowerCase()),
    )
    .sort((a, b) =>
      ordemDespesas === "desc"
        ? new Date(b.data) - new Date(a.data)
        : new Date(a.data) - new Date(b.data),
    );

  const totalPaginasDespesas = Math.ceil(
    despesasFiltradas.length / itensPorPaginaDespesas,
  );

  const inicioDespesas = (paginaDespesas - 1) * itensPorPaginaDespesas;
  const fimDespesas = inicioDespesas + itensPorPaginaDespesas;

  const despesasPaginadas = despesasFiltradas.slice(
    inicioDespesas,
    fimDespesas,
  );

  async function cadastrarDespesa(e, atualizarDados, mostrarMensagem) {
    e.preventDefault();

    if (
      !descricaoDespesa ||
      !valorDespesa ||
      !categoriaDespesa ||
      !dataDespesa
    ) {
      mostrarMensagem("Preencha todos os campos da despesa.", "danger");
      return;
    }

    if (Number(valorDespesa) <= 0) {
      mostrarMensagem("O valor da despesa deve ser maior que zero.", "danger");
      return;
    }

    setCarregandoDespesa(true);

    try {
      await despesasService.cadastrar({
        descricao: descricaoDespesa,
        valor: Number(valorDespesa),
        categoria: categoriaDespesa,
        data: dataDespesa,
        recorrente: recorrenteDespesa,
        frequenciaRecorrencia: recorrenteDespesa
          ? frequenciaRecorrenciaDespesa
          : null,
        proximaRecorrencia: recorrenteDespesa
          ? proximaRecorrenciaDespesa
          : null,
      });

      mostrarMensagem("Despesa cadastrada com sucesso!", "success");

      limparFormularioDespesa();
      await atualizarDados();
    } catch {
      mostrarMensagem("Erro ao cadastrar despesa", "danger");
    } finally {
      setCarregandoDespesa(false);
    }
  }

  return {
    despesas,
    setDespesas,
    descricaoDespesa,
    setDescricaoDespesa,
    valorDespesa,
    setValorDespesa,
    categoriaDespesa,
    setCategoriaDespesa,
    dataDespesa,
    setDataDespesa,
    editandoDespesaId,
    setEditandoDespesaId,
    carregandoDespesa,
    setCarregandoDespesa,
    filtroDespesa,
    setFiltroDespesa: alterarFiltroDespesa,
    ordemDespesas,
    setOrdemDespesas: alterarOrdemDespesas,
    despesasFiltradas,
    limparFormularioDespesa,
    editarDespesa,
    excluirDespesa,
    cadastrarDespesa,
    paginaDespesas,
    setPaginaDespesas,
    totalPaginasDespesas,
    despesasPaginadas,
    recorrenteDespesa,
    setRecorrenteDespesa,
    frequenciaRecorrenciaDespesa,
    setFrequenciaRecorrenciaDespesa,
    proximaRecorrenciaDespesa,
    setProximaRecorrenciaDespesa,
  };
}

export default useDespesas;
