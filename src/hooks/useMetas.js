import { useState } from "react";
import metasService from "../services/metasService";
import tratarErroApi from "../utils/tratarErroApi";

function useMetas() {
  const [metas, setMetas] = useState([]);

  const [descricaoMeta, setDescricaoMeta] = useState("");
  const [valorObjetivo, setValorObjetivo] = useState("");
  const [valorAtual, setValorAtual] = useState("");
  const [dataLimite, setDataLimite] = useState("");
  const [editandoMetaId, setEditandoMetaId] = useState(null);
  const [carregandoMeta, setCarregandoMeta] = useState(false);

  function limparFormularioMeta() {
    setDescricaoMeta("");
    setValorObjetivo("");
    setValorAtual("");
    setDataLimite("");
    setEditandoMetaId(null);
  }

  async function cadastrarMeta(e, atualizarMetas, mostrarMensagem) {
    e.preventDefault();

    if (!descricaoMeta || !valorObjetivo || !dataLimite) {
      mostrarMensagem("Preencha descrição, valor objetivo e data limite.", "danger");
      return;
    }

    if (Number(valorObjetivo) <= 0) {
      mostrarMensagem("O valor objetivo deve ser maior que zero.", "danger");
      return;
    }

    setCarregandoMeta(true);

    try {
      await metasService.cadastrar({
        descricao: descricaoMeta,
        valorObjetivo: Number(valorObjetivo),
        dataLimite,
      });

      mostrarMensagem("Meta cadastrada com sucesso!", "success");
      limparFormularioMeta();
      await atualizarMetas();
    } 
    catch (error) {
      mostrarMensagem(
        tratarErroApi(error, "Erro ao cadastrar meta."),
        "danger",
      );
    } 
    finally {
      setCarregandoMeta(false);
    }
  }

  async function editarMeta(id, atualizarMetas, mostrarMensagem) {
    if (!descricaoMeta || !valorObjetivo || !dataLimite) {
      mostrarMensagem("Preencha descrição, valor objetivo e data limite.", "danger");
      return;
    }

    if (Number(valorObjetivo) <= 0) {
      mostrarMensagem("O valor objetivo deve ser maior que zero.", "danger");
      return;
    }

    setCarregandoMeta(true);

    try {
      await metasService.editar(id, {
        descricao: descricaoMeta,
        valorObjetivo: Number(valorObjetivo),
        valorAtual: Number(valorAtual || 0),
        dataLimite,
        concluida: Number(valorAtual || 0) >= Number(valorObjetivo),
      });

      mostrarMensagem("Meta atualizada com sucesso!", "success");
      limparFormularioMeta();
      await atualizarMetas();
    } 
    catch (error) {
  mostrarMensagem(
    tratarErroApi(error, "Erro ao atualizar meta."),
    "danger",
  );
}
     finally {
      setCarregandoMeta(false);
    }
  }

  async function excluirMeta(id, atualizarMetas, mostrarMensagem) {
    try {
      await metasService.excluir(id);
      mostrarMensagem("Meta excluída com sucesso!", "success");
      await atualizarMetas();
    } 
    catch (error) {
      mostrarMensagem(
        tratarErroApi(error, "Erro ao excluir meta."),
        "danger",
      );
    }
  }

  return {
    metas,
    setMetas,
    descricaoMeta,
    setDescricaoMeta,
    valorObjetivo,
    setValorObjetivo,
    valorAtual,
    setValorAtual,
    dataLimite,
    setDataLimite,
    editandoMetaId,
    setEditandoMetaId,
    carregandoMeta,
    cadastrarMeta,
    editarMeta,
    excluirMeta,
    limparFormularioMeta,
  };
}

export default useMetas;