import SkeletonLista from "./SkeletonLista";

function ListasFinanceiras({
  receitasLista,
  despesasLista,
  metasLista,
  carregando,
}) {
  if (carregando) {
    return (
      <div className="row g-4 align-items-start">
        <div className="col-lg-4 col-md-12">
          <SkeletonLista />
        </div>

        <div className="col-lg-4 col-md-12">
          <SkeletonLista />
        </div>

        <div className="col-lg-4 col-md-12">
          <SkeletonLista />
        </div>
      </div>
    );
  }

  return (
    <div className="row g-4 align-items-start">
      <div className="col-lg-4 col-md-12">{receitasLista}</div>

      <div className="col-lg-4 col-md-12">{despesasLista}</div>

      <div className="col-lg-4 col-md-12">{metasLista}</div>
    </div>
  );
}

export default ListasFinanceiras;