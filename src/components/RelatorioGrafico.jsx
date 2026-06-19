import { Bar } from "react-chartjs-2";

function RelatorioGrafico({ data, options }) {
  return (
    <div className="mt-4">
      <h4 className="mb-3">Resumo Visual</h4>

      <Bar data={data} options={options} />
    </div>
  );
}

export default RelatorioGrafico;