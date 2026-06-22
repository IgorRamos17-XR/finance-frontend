import { formatarMoeda } from "../utils/formatadores";

function TopCategorias({ categorias }) {
  if (!categorias?.length) {
    return null;
  }

  return (
    <div className="relatorio-chart-card mt-4">
      <div className="relatorio-card-header">
        <div>
          <h4>Top Categorias de Despesas</h4>
          <p>Categorias com maiores gastos no período</p>
        </div>
      </div>

      <div className="top-categorias-lista">
        {categorias.map((categoria, index) => (
          <div key={index} className="top-categoria-item">
            <div>
              <span className="top-categoria-posicao">{index + 1}</span>
              <strong>{categoria.categoria}</strong>
            </div>

            <span>{formatarMoeda(categoria.total)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopCategorias;