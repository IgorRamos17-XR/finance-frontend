import { useCallback, useState } from "react";
import dashboardService from "../services/dashboardService";

function useReports(mostrarMensagem) {
  const [dashboard, setDashboard] = useState({
    totalReceitas: 0,
    totalDespesas: 0,
    saldo: 0,
  });

  const [carregando, setCarregando] = useState(false);
  const [categorias, setCategorias] = useState([]);

  const carregarRelatorio = useCallback(async () => {
    setCarregando(true);

    try {
      const response = await dashboardService.resumo();
      setDashboard(response);

      const categoriasResponse = await dashboardService.despesasPorCategoria();

      setCategorias(categoriasResponse || []);
    } catch {
      mostrarMensagem("Erro ao carregar relatório", "danger");
    } finally {
      setCarregando(false);
    }
  }, [mostrarMensagem]);

  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");

  const dadosGraficoRelatorio = {
    labels: ["Receitas", "Despesas", "Saldo"],
    datasets: [
      {
        label: "Resumo Financeiro",
        data: [
          dashboard.totalReceitas,
          dashboard.totalDespesas,
          dashboard.saldo,
        ],
      },
    ],
  };

  const opcoesGraficoRelatorio = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const filtrarRelatorio = useCallback(async () => {
    if (!dataInicio || !dataFim) {
      mostrarMensagem("Selecione a data inicial e final.", "danger");
      return;
    }

    setCarregando(true);

    try {
      const response = await dashboardService.resumoPorPeriodo(
        dataInicio,
        dataFim,
      );

      setDashboard(response);

      const categoriasResponse =
        await dashboardService.despesasPorCategoriaPeriodo(dataInicio, dataFim);

      setCategorias(categoriasResponse || []);

      mostrarMensagem("Relatório filtrado com sucesso!", "success");
    } catch {
      mostrarMensagem("Erro ao filtrar relatório", "danger");
    } finally {
      setCarregando(false);
    }
  }, [dataInicio, dataFim, mostrarMensagem]);

  const limparFiltroRelatorio = useCallback(async () => {
    setDataInicio("");
    setDataFim("");

    await carregarRelatorio();
  }, [carregarRelatorio]);

  const dadosGraficoCategoriasRelatorio = {
    labels: categorias.map((item) => item.categoria),
    datasets: [
      {
        label: "Despesas por Categoria",
        data: categorias.map((item) => item.total),
      },
    ],
  };

  const opcoesGraficoCategoriasRelatorio = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return {
    dashboard,
    carregando,
    carregarRelatorio,
    dadosGraficoRelatorio,
    opcoesGraficoRelatorio,
    dataInicio,
    setDataInicio,
    dataFim,
    setDataFim,
    filtrarRelatorio,
    limparFiltroRelatorio,
    categorias,
    dadosGraficoCategoriasRelatorio,
    opcoesGraficoCategoriasRelatorio,
  };
}

export default useReports;
