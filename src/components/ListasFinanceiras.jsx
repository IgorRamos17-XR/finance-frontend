function ListasFinanceiras({
  receitasLista,
  despesasLista,
}) {
  return (
    <div className="row">
      <div className="col-md-6">
        {receitasLista}
      </div>

      <div className="col-md-6">
        {despesasLista}
      </div>
    </div>
  );
}

export default ListasFinanceiras;