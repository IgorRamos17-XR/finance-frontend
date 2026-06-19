function FormulariosFinanceiros({
  receitaForm,
  despesaForm,
}) {
  return (
    <div className="row">
      <div className="col-md-6">
        {receitaForm}
      </div>

      <div className="col-md-6">
        {despesaForm}
      </div>
    </div>
  );
}

export default FormulariosFinanceiros;