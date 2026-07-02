import ResumoMetas from "./ResumoMetas";
import DashboardExecutivo from "./DashboardExecutivo";
import InteligenciaFinanceira from "./InteligenciaFinanceira";
import ProjecaoFinanceira from "./ProjecaoFinanceira";
import PainelRecorrencias from "./PainelRecorrencias";
import CalendarioFinanceiro from "./CalendarioFinanceiro";
import InsightsFinanceiros from "./InsightsFinanceiros";
import EstatisticasFinanceiras from "./EstatisticasFinanceiras";
import SaudeFinanceira from "./SaudeFinanceira";

function PainelAnalitico({
  dashboard,
  receitas,
  despesas,
  metas,
  formatarMoeda,
  formatarData,
}) {
  return (
    <>
      <DashboardExecutivo
        dashboard={dashboard}
        receitas={receitas}
        despesas={despesas}
        metas={metas}
        formatarMoeda={formatarMoeda}
        formatarData={formatarData}
      />

      <InteligenciaFinanceira
        dashboard={dashboard}
        despesas={despesas}
        metas={metas}
      />

      <ProjecaoFinanceira
        dashboard={dashboard}
        receitas={receitas}
        despesas={despesas}
        formatarMoeda={formatarMoeda}
      />

      <PainelRecorrencias
        receitas={receitas}
        despesas={despesas}
        formatarMoeda={formatarMoeda}
        formatarData={formatarData}
      />

      <CalendarioFinanceiro
        receitas={receitas}
        despesas={despesas}
        metas={metas}
        formatarMoeda={formatarMoeda}
      />

      <ResumoMetas metas={metas} formatarMoeda={formatarMoeda} />

      <InsightsFinanceiros dashboard={dashboard} metas={metas} />

      <EstatisticasFinanceiras
        receitas={receitas}
        despesas={despesas}
        dashboard={dashboard}
        formatarMoeda={formatarMoeda}
      />

      <SaudeFinanceira dashboard={dashboard} metas={metas} />
    </>
  );
}

export default PainelAnalitico;