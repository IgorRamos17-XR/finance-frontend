import { Bar } from "react-chartjs-2";

function GraficoCategoriasRelatorio({ categorias, data, options }) {
  if (!categorias?.length) {
    return (
      <p className="text-muted">
        Nenhuma categoria encontrada para exibir no gráfico.
      </p>
    );
  }

  return <Bar data={data} options={options} />;
}

export default GraficoCategoriasRelatorio;