import { useState } from "react";
import receitasService from "../services/receitasService";

function useReceitas() {
  const [receitas, setReceitas] = useState([]);

  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [data, setData] = useState("");
  const [editandoId, setEditandoId] = useState(null);
  const [carregandoReceita, setCarregandoReceita] = useState(false);
  const [filtroReceita, setFiltroReceita] = useState("");
  const [ordemReceitas, setOrdemReceitas] = useState("desc");

  const receitasFiltradas = receitas
    .filter((receita) =>
      receita.descricao.toLowerCase().includes(filtroReceita.toLowerCase()),
    )
    .sort((a, b) =>
      ordemReceitas === "desc"
        ? new Date(b.data) - new Date(a.data)
        : new Date(a.data) - new Date(b.data),
    );

  function limparFormularioReceita() {
    setDescricao("");
    setValor(null);
    setCategoria("");
    setData("");
    setEditandoId(null);
  }

  async function cadastrarReceita(e, atualizarDados, mostrarMensagem) {
    e.preventDefault();

    if (!descricao || !valor || !categoria || !data) {
      mostrarMensagem("Preencha todos os campos da receita.", "danger");
      return;
    }

    if (Number(valor) <= 0) {
      mostrarMensagem("O valor da receita deve ser maior que zero.", "danger");
      return;
    }

    setCarregandoReceita(true);

    try {
      await receitasService.cadastrar({
        descricao,
        valor: Number(valor),
        categoria,
        data,
      });

      mostrarMensagem("Receita cadastrada com sucesso!", "success");

      limparFormularioReceita();
      await atualizarDados();
    } catch {
      mostrarMensagem("Erro ao cadastrar receita", "danger");
    } finally {
      setCarregandoReceita(false);
    }
  }

  async function editarReceita(id, atualizarDados, mostrarMensagem) {
    if (!descricao || !valor || !categoria || !data) {
      mostrarMensagem("Preencha todos os campos da receita.", "danger");
      return;
    }

    if (Number(valor) <= 0) {
      mostrarMensagem("O valor da receita deve ser maior que zero.", "danger");
      return;
    }

    setCarregandoReceita(true);

    try {
      await receitasService.editar(id, {
        descricao,
        valor: Number(valor),
        categoria,
        data,
      });

      mostrarMensagem("Receita atualizada com sucesso!", "success");

      limparFormularioReceita();
      await atualizarDados();
    } catch {
      mostrarMensagem("Erro ao atualizar receita", "danger");
    } finally {
      setCarregandoReceita(false);
    }
  }

  async function excluirReceita(id, atualizarDados, mostrarMensagem) {
    try {
      await receitasService.excluir(id);

      mostrarMensagem("Receita excluída com sucesso!", "success");

      await atualizarDados();
    } catch {
      mostrarMensagem("Erro ao excluir receita", "danger");
    }
  }

  return {
    receitas,
    setReceitas,
    descricao,
    setDescricao,
    valor,
    setValor,
    categoria,
    setCategoria,
    data,
    setData,
    editandoId,
    setEditandoId,
    carregandoReceita,
    setCarregandoReceita,
    filtroReceita,
    setFiltroReceita,
    ordemReceitas,
    setOrdemReceitas,
    receitasFiltradas,
    limparFormularioReceita,
    cadastrarReceita,
    editarReceita,
    excluirReceita,
  };
}

export default useReceitas;
