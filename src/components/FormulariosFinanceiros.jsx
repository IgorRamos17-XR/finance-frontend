function FormulariosFinanceiros({ receitaForm, despesaForm, metaForm }) {
  return (
    <div className="row">
      <div className="col-md-4">{receitaForm}</div>

      <div className="col-md-4">{despesaForm}</div>

      <div className="col-md-4">{metaForm}</div>
    </div>
  );
}

export default FormulariosFinanceiros;