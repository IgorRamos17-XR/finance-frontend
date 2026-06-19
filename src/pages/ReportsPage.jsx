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
  } = useReports(mostrarMensagem);

  useEffect(() => {
    carregarRelatorio();
  }, [carregarRelatorio]);

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h2 className="mb-4">Relatórios</h2>

        <FiltroRelatorio
          dataInicio={dataInicio}
          setDataInicio={setDataInicio}
          dataFim={dataFim}
          setDataFim={setDataFim}
          aoFiltrar={filtrarRelatorio}
          aoLimpar={limparFiltroRelatorio}
        />
        <AcoesRelatorioGrupo>
          <AcoesRelatorio
            carregando={carregando}
            aoAtualizar={carregarRelatorio}
          />

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

        <RelatorioGrafico
          data={dadosGraficoRelatorio}
          options={opcoesGraficoRelatorio}
        />

        <TopCategorias categorias={categorias} />
      </div>
    </div>
  );
}

export default ReportsPage;
