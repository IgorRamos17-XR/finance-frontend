import { useState } from "react";
import dashboardService from "../services/dashboardService";
import tratarErroApi from "../utils/tratarErroApi";

function useDashboard() {
  const [despesasPorCategoria, setDespesasPorCategoria] = useState([]);

  const [inicioFiltro, setInicioFiltro] = useState("");
  const [fimFiltro, setFimFiltro] = useState("");

  const [dashboard, setDashboard] = useState({
    totalReceitas: 0,
    totalDespesas: 0,
    saldo: 0,
  });

  async function buscarDashboardPorPeriodo(mostrarMensagem) {
    if (!inicioFiltro || !fimFiltro) {
      mostrarMensagem("Selecione as duas datas.", "danger");
      return;
    }

    try {
      const response = await dashboardService.resumoPorPeriodo(
        inicioFiltro,
        fimFiltro,
      );

      setDashboard(response);
    } catch (error) {
      mostrarMensagem(
        tratarErroApi(error, "Erro ao buscar resumo por período."),
        "danger",
      );
    }
  }

  async function limparFiltroDashboard(atualizarDados) {
    setInicioFiltro("");
    setFimFiltro("");

    await atualizarDados();
  }

  return {
    despesasPorCategoria,
    setDespesasPorCategoria,
    inicioFiltro,
    setInicioFiltro,
    fimFiltro,
    setFimFiltro,
    dashboard,
    setDashboard,
    buscarDashboardPorPeriodo,
    limparFiltroDashboard,
  };
}

export default useDashboard;