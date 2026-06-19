
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { formatarMoeda, formatarData } from "../utils/formatadores";

function BotaoExportarPDF({ dashboard, receitas = [], despesas = [] }) {
  function exportarPDF() {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Relatório Financeiro", 14, 20);

    doc.setFontSize(11);
    doc.text(`Gerado em: ${formatarData(new Date().toISOString())}`, 14, 28);

    autoTable(doc, {
      startY: 38,
      head: [["Resumo", "Valor"]],
      body: [
        ["Total de Receitas", formatarMoeda(dashboard.totalReceitas)],
        ["Total de Despesas", formatarMoeda(dashboard.totalDespesas)],
        ["Saldo Atual", formatarMoeda(dashboard.saldo)],
      ],
    });

    autoTable(doc, {
      startY: doc.lastAutoTable.finalY + 12,
      head: [["Receitas", "Categoria", "Data", "Valor"]],
      body: receitas.map((receita) => [
        receita.descricao,
        receita.categoria,
        formatarData(receita.data),
        formatarMoeda(receita.valor),
      ]),
    });

    autoTable(doc, {
      startY: doc.lastAutoTable.finalY + 12,
      head: [["Despesas", "Categoria", "Data", "Valor"]],
      body: despesas.map((despesa) => [
        despesa.descricao,
        despesa.categoria,
        formatarData(despesa.data),
        formatarMoeda(despesa.valor),
      ]),
    });

    doc.save("relatorio-financeiro.pdf");
  }

  return (
    <button type="button" className="btn btn-danger" onClick={exportarPDF}>
      Exportar PDF
    </button>
  );
}

export default BotaoExportarPDF;
