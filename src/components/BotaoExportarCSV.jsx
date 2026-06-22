import { exportarRelatorioCSV } from "../utils/exportarCSV";

function BotaoExportarCSV({ dashboard, categorias, dataInicio, dataFim }) {
  return (
    <button
      type="button"
      className="btn-relatorio btn-relatorio-csv"
      onClick={() =>
        exportarRelatorioCSV(dashboard, categorias, dataInicio, dataFim)
      }
    >
      📄 Exportar CSV
    </button>
  );
}

export default BotaoExportarCSV;