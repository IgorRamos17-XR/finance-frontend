import { exportarRelatorioPDF } from "../utils/exportarPDF";

function BotaoExportarPDF({
  dashboard,
  categorias,
  dataInicio,
  dataFim,
}) {
  return (
    <button
      type="button"
      className="btn btn-danger"
      onClick={() =>
        exportarRelatorioPDF(
          dashboard,
          categorias,
          dataInicio,
          dataFim
        )
      }
    >
      Exportar PDF
    </button>
  );
}

export default BotaoExportarPDF;