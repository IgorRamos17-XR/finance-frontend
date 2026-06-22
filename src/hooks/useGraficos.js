
import { formatarMoeda, formatarData } from "../utils/formatadores";

function useGraficos({ receitas, despesas, despesasPorCategoria, dashboard }) {
  const coresCategorias = [
    "#2563eb",
    "#dc2626",
    "#16a34a",
    "#f97316",
    "#7c3aed",
    "#0891b2",
    "#db2777",
    "#65a30d",
  ];

  const dadosGraficoCategorias = {
    labels: Array.isArray(despesasPorCategoria)
      ? despesasPorCategoria.map((item) => item.categoria)
      : [],
    datasets: [
      {
        label: "Despesas por Categoria",
        data: Array.isArray(despesasPorCategoria)
          ? despesasPorCategoria.map((item) => item.total)
          : [],
        backgroundColor: coresCategorias,
        borderColor: "#ffffff",
        borderWidth: 2,
      },
    ],
  };

  const dadosGraficoResumo = {
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
        borderRadius: 8,
      },
    ],
  };

  const opcoesGraficoResumo = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: { label: (context) => formatarMoeda(context.raw) },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { callback: (value) => formatarMoeda(value) },
      },
    },
  };

  const opcoesGraficoCategorias = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "right" },
      tooltip: {
        callbacks: {
          label: (context) => {
            const total = context.dataset.data.reduce(
              (soma, valor) => soma + Number(valor),
              0,
            );
            const porcentagem =
              total > 0 ? ((context.raw / total) * 100).toFixed(1) : 0;
            return `${context.label}: ${formatarMoeda(context.raw)} (${porcentagem}%)`;
          },
        },
      },
    },
  };

  const datasMovimentacoes = [
    ...new Set([
      ...receitas.map((receita) => receita.data.split("T")[0]),
      ...despesas.map((despesa) => despesa.data.split("T")[0]),
    ]),
  ].sort();

  const dadosGraficoEvolucao = {
    labels: datasMovimentacoes.map((data) => formatarData(data)),
    datasets: [
      {
        label: "Receitas",
        data: datasMovimentacoes.map((data) =>
          receitas
            .filter((receita) => receita.data.split("T")[0] === data)
            .reduce((total, receita) => total + Number(receita.valor), 0),
        ),
        borderColor: "#22c55e",
        backgroundColor: "#22c55e",
        tension: 0.35,
        pointRadius: 5,
      },
      {
        label: "Despesas",
        data: datasMovimentacoes.map((data) =>
          despesas
            .filter((despesa) => despesa.data.split("T")[0] === data)
            .reduce((total, despesa) => total + Number(despesa.valor), 0),
        ),
        borderColor: "#ef4444",
        backgroundColor: "#ef4444",
        tension: 0.35,
        pointRadius: 5,
      },
    ],
  };

  const opcoesGraficoEvolucao = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom" },
      tooltip: {
        callbacks: {
          label: (context) =>
            `${context.dataset.label}: ${formatarMoeda(context.raw)}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { callback: (value) => formatarMoeda(value) },
      },
    },
  };

  const temDadosResumo =
    dashboard.totalReceitas > 0 ||
    dashboard.totalDespesas > 0 ||
    dashboard.saldo !== 0;

  return {
    dadosGraficoCategorias,
    dadosGraficoResumo,
    opcoesGraficoResumo,
    opcoesGraficoCategorias,
    datasMovimentacoes,
    dadosGraficoEvolucao,
    opcoesGraficoEvolucao,
    temDadosResumo,
  };
}

export default useGraficos;
