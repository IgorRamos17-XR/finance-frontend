import { formatarMoeda } from "./formatadores";

export function exportarRelatorioCSV(
  dashboard,
  categorias = [],
  dataInicio,
  dataFim,
) {
  const linhas = [
    ["Campo", "Valor"],
    ["Gerado em", new Date().toLocaleDateString("pt-BR")],

    [
      "Período",
      dataInicio && dataFim
        ? `${dataInicio} até ${dataFim}`
        : "Relatório geral",
    ],
    ["Total de Receitas", formatarMoeda(dashboard.totalReceitas)],
    ["Total de Despesas", formatarMoeda(dashboard.totalDespesas)],
    ["Saldo Atual", formatarMoeda(dashboard.saldo)],
    [],
    ["Categorias de Despesas", ""],
    ["Categoria", "Total"],
    ...categorias.map((item) => [item.categoria, formatarMoeda(item.total)]),
  ];

  const conteudoCSV = linhas.map((linha) => linha.join(";")).join("\n");

  const blob = new Blob([conteudoCSV], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "relatorio-financeiro.csv";
  link.click();

  URL.revokeObjectURL(url);
}
