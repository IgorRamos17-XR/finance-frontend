import { useCallback, useState } from "react";
import dashboardService from "../services/dashboardService";
import { formatarMoeda } from "../utils/formatadores";
import tratarErroApi from "../utils/tratarErroApi";

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
    } catch (error) {
      mostrarMensagem(
        tratarErroApi(error, "Erro ao carregar relatório."),
        "danger",
      );
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

        backgroundColor: ["#22c55e", "#ef4444", "#2563eb"],
        borderRadius: 10,
        borderSkipped: false,
      },
    ],
  };

  const opcoesGraficoRelatorio = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => formatarMoeda(context.raw),
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "#e5e7eb",
        },
        ticks: {
          callback: (value) => formatarMoeda(value),
        },
      },
      x: {
        grid: {
          display: false,
        },
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
    } catch (error) {
      mostrarMensagem(
        tratarErroApi(error, "Erro ao filtrar relatório."),
        "danger",
      );
    } finally {
      setCarregando(false);
    }
  }, [dataInicio, dataFim, mostrarMensagem]);

  const limparFiltroRelatorio = useCallback(async () => {
    setDataInicio("");
    setDataFim("");

    await carregarRelatorio();
  }, [carregarRelatorio]);

  const coresCategoriasRelatorio = [
    "#2563eb",
    "#dc2626",
    "#16a34a",
    "#f97316",
    "#7c3aed",
    "#0891b2",
    "#db2777",
    "#65a30d",
  ];

  const dadosGraficoCategoriasRelatorio = {
    labels: (categorias || []).map((item) => item.categoria),
    datasets: [
      {
        label: "Despesas por Categoria",
        data: (categorias || []).map((item) => item.total),
        backgroundColor: coresCategoriasRelatorio,
        borderRadius: 10,
        borderSkipped: false,
      },
    ],
  };

  const opcoesGraficoCategoriasRelatorio = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => formatarMoeda(context.raw),
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          color: "#e5e7eb",
        },
        ticks: {
          callback: (value) => formatarMoeda(value),
        },
      },
      y: {
        grid: {
          display: false,
        },
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
