import { formatarData } from "../utils/formatadores";

function useGraficos({ receitas, despesas, despesasPorCategoria, dashboard }) {
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
      },
    ],
  };

  const opcoesGraficoResumo = {
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

const opcoesGraficoCategorias = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
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
          .reduce((total, receita) => total + Number(receita.valor), 0)
      ),
    },
    {
      label: "Despesas",
      data: datasMovimentacoes.map((data) =>
        despesas
          .filter((despesa) => despesa.data.split("T")[0] === data)
          .reduce((total, despesa) => total + Number(despesa.valor), 0)
      ),
    },
  ],
};

const opcoesGraficoEvolucao = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
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
