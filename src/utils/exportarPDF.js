import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { formatarMoeda } from "./formatadores";

export function exportarRelatorioPDF(
  dashboard,
  categorias = [],
  dataInicio,
  dataFim,
) {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Relatório Financeiro", 14, 20);
  doc.setFontSize(10);
  doc.text(`Gerado em: ${new Date().toLocaleDateString("pt-BR")}`, 14, 27);
  doc.text(
    dataInicio && dataFim
      ? `Período: ${dataInicio} até ${dataFim}`
      : "Período: Relatório geral",
    14,
    33,
  );

  autoTable(doc, {
    startY: 40,
    head: [["Campo", "Valor"]],
    body: [
      ["Total Receitas", formatarMoeda(dashboard.totalReceitas)],
      ["Total Despesas", formatarMoeda(dashboard.totalDespesas)],
      ["Saldo Atual", formatarMoeda(dashboard.saldo)],
    ],
  });

  autoTable(doc, {
    startY: doc.lastAutoTable.finalY + 15,
    head: [["Categoria", "Total"]],
    body: categorias.map((item) => [item.categoria, formatarMoeda(item.total)]),
  });

  doc.save("relatorio-financeiro.pdf");
}
