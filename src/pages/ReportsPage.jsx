import { useEffect } from "react";
import useMensagem from "../hooks/useMensagem";
import useReports from "../hooks/useReports";
import RelatorioGrafico from "../components/RelatorioGrafico";
import FiltroRelatorio from "../components/FiltroRelatorio";
import AcoesRelatorio from "../components/AcoesRelatorio";
import LoadingRelatorio from "../components/LoadingRelatorio";
import RelatorioCards from "../components/RelatorioCards";
import BotaoExportarCSV from "../components/BotaoExportarCSV";
import AcoesRelatorioGrupo from "../components/AcoesRelatorioGrupo";
import TopCategorias from "../components/TopCategorias";
import BotaoExportarPDF from "../components/BotaoExportarPDF";
import BotaoImprimirRelatorio from "../components/BotaoImprimirRelatorio";
import TituloImpressao from "../components/TituloImpressao";
import PeriodoImpressao from "../components/PeriodoImpressao";
import GraficoCategoriasRelatorio from "../components/GraficoCategoriasRelatorio";

function ReportsPage() {
  const { mostrarMensagem } = useMensagem();

  const {
    dashboard,
    carregando,
    carregarRelatorio,
    dadosGraficoRelatorio,
    opcoesGraficoRelatorio,
    dataInicio,
    setDataInicio,
    dataFim,
    setDataFim,
    filtrarRelatorio,
    limparFiltroRelatorio,
    categorias,
    dadosGraficoCategoriasRelatorio,
    opcoesGraficoCategoriasRelatorio,
  } = useReports(mostrarMensagem);

  useEffect(() => {
    carregarRelatorio();
  }, [carregarRelatorio]);

  return (
    <section className="relatorios-page">
      <TituloImpressao />
      <PeriodoImpressao dataInicio={dataInicio} dataFim={dataFim} />

      <div className="relatorios-header">
        <div>
          <span className="relatorios-icone">📊</span>
          <h2>Relatórios Financeiros</h2>
          <p>Visualize análises detalhadas das suas finanças.</p>
        </div>

        <div className="relatorios-filtros">
          <FiltroRelatorio
            dataInicio={dataInicio}
            setDataInicio={setDataInicio}
            dataFim={dataFim}
            setDataFim={setDataFim}
            aoFiltrar={filtrarRelatorio}
            aoLimpar={limparFiltroRelatorio}
          />
        </div>
      </div>

      <AcoesRelatorioGrupo>
        <AcoesRelatorio carregando={carregando} aoAtualizar={carregarRelatorio} />

        <BotaoExportarCSV
          dashboard={dashboard}
          categorias={categorias}
          dataInicio={dataInicio}
          dataFim={dataFim}
        />

        <BotaoExportarPDF
          dashboard={dashboard}
          categorias={categorias}
          dataInicio={dataInicio}
          dataFim={dataFim}
        />

        <BotaoImprimirRelatorio />
      </AcoesRelatorioGrupo>

      <LoadingRelatorio carregando={carregando} />

      <RelatorioCards dashboard={dashboard} />

      <div className="relatorios-grid">
        <div className="relatorio-chart-card relatorio-chart-card-wide">
          <div className="relatorio-card-header">
            <div>
              <h4>Evolução Financeira</h4>
              <p>Receitas, despesas e saldo no período</p>
            </div>
          </div>

          <div className="relatorio-chart-container">
            <RelatorioGrafico
              data={dadosGraficoRelatorio}
              options={opcoesGraficoRelatorio}
            />
          </div>
        </div>

        <div className="relatorio-chart-card">
          <div className="relatorio-card-header">
            <div>
              <h4>Despesas por Categoria</h4>
              <p>Distribuição das despesas no período</p>
            </div>
          </div>

          <div className="relatorio-chart-container">
            <GraficoCategoriasRelatorio
              categorias={categorias}
              data={dadosGraficoCategoriasRelatorio}
              options={opcoesGraficoCategoriasRelatorio}
            />
          </div>
        </div>
      </div>

      <TopCategorias categorias={categorias} />
    </section>
  );
}

export default ReportsPage;