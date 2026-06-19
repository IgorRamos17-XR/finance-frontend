import RelatorioCard from "./RelatorioCard";
import { formatarMoeda } from "../utils/formatadores";

function RelatorioCards({ dashboard }) {
  return (
    <div className="row">
      <RelatorioCard
        titulo="Total de Receitas"
        valor={formatarMoeda(dashboard.totalReceitas)}
      />

      <RelatorioCard
        titulo="Total de Despesas"
        valor={formatarMoeda(dashboard.totalDespesas)}
      />

      <RelatorioCard
        titulo="Saldo Atual"
        valor={formatarMoeda(dashboard.saldo)}
      />
    </div>
  );
}

export default RelatorioCards;