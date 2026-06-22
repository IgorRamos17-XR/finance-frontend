function PeriodoImpressao({
  dataInicio,
  dataFim,
}) {
  return (
    <div className="d-none d-print-block mb-4">
      <strong>Período:</strong>{" "}
      {dataInicio && dataFim
        ? `${dataInicio} até ${dataFim}`
        : "Relatório Geral"}
    </div>
  );
}

export default PeriodoImpressao;