import Dashboard from "./Dashboard";
import Graficos from "./Graficos";
import CarregandoDados from "./CarregandoDados";

function PainelFinanceiro({
  carregandoDados,
  dashboard,
  formatarMoeda,
  inicioFiltro,
  setInicioFiltro,
  fimFiltro,
  setFimFiltro,
  buscarDashboardPorPeriodo,
  limparFiltroDashboard,
  temDadosResumo,
  dadosGraficoResumo,
  opcoesGraficoResumo,
  datasMovimentacoes,
  dadosGraficoEvolucao,
  opcoesGraficoEvolucao,
  despesasPorCategoria,
  dadosGraficoCategorias,
  opcoesGraficoCategorias,
}) {
  return (
    <>
      <CarregandoDados carregando={carregandoDados} />

      <Dashboard
        dashboard={dashboard}
        formatarMoeda={formatarMoeda}
        inicioFiltro={inicioFiltro}
        setInicioFiltro={setInicioFiltro}
        fimFiltro={fimFiltro}
        setFimFiltro={setFimFiltro}
        buscarDashboardPorPeriodo={buscarDashboardPorPeriodo}
        limparFiltroDashboard={limparFiltroDashboard}
      />

      <Graficos
        temDadosResumo={temDadosResumo}
        dadosGraficoResumo={dadosGraficoResumo}
        opcoesGraficoResumo={opcoesGraficoResumo}
        datasMovimentacoes={datasMovimentacoes}
        dadosGraficoEvolucao={dadosGraficoEvolucao}
        opcoesGraficoEvolucao={opcoesGraficoEvolucao}
        despesasPorCategoria={despesasPorCategoria}
        dadosGraficoCategorias={dadosGraficoCategorias}
        opcoesGraficoCategorias={opcoesGraficoCategorias}
        formatarMoeda={formatarMoeda}
      />
    </>
  );
}

export default PainelFinanceiro;