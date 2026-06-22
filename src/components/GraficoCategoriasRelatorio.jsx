import { Bar } from "react-chartjs-2";

function GraficoCategoriasRelatorio({
  categorias,
  data,
  options,
}) {
  if (!categorias?.length) {
    return null;
  }

  return (
    <div className="mt-4">
      <h4 className="mb-3">Despesas por Categoria</h4>

      <Bar data={data} options={options} />
    </div>
  );
}

export default GraficoCategoriasRelatorio;