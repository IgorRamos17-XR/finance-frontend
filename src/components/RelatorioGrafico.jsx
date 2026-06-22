import { Bar } from "react-chartjs-2";

function RelatorioGrafico({ data, options }) {
  return <Bar data={data} options={options} />;
}

export default RelatorioGrafico;