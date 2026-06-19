import { formatarMoeda } from "../utils/formatadores";

function TopCategorias({ categorias }) {
  if (!categorias?.length) {
    return null;
  }

  return (
    <div className="card mt-4">
      <div className="card-body">
        <h4>Top Categorias de Despesas</h4>

        <ul className="list-group">
          {categorias.map((categoria, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between"
            >
              <span>{categoria.categoria}</span>

              <strong>{formatarMoeda(categoria.total)}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TopCategorias;
