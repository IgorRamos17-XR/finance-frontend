import { exportarRelatorioCSV } from "../utils/exportarCSV";

function BotaoExportarCSV({ dashboard, categorias }) {
  return (
    <button
      type="button"
      className="btn btn-outline-success mb-3"
      onClick={() => exportarRelatorioCSV(dashboard, categorias)}
    >
      Exportar CSV
    </button>
  );
}

export default BotaoExportarCSV;