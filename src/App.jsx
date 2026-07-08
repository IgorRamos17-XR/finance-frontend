import { useEffect } from "react";
import useDadosFinanceiros from "./hooks/useDadosFinanceiros";
import "./App.css";
import "./styles/menu.css";
import "./styles/dashboard.css";
import "./styles/dashboard-advanced.css";
import "./styles/reports.css";
import "./styles/forms.css";
import "./styles/lists.css";
import "./styles/theme.css";
import "./styles/utilities.css";
import "./styles/responsive.css";
import "./styles/auth.css";
import "./styles/skeleton.css";
import "./styles/feedback.css";
import "./styles/pagination.css";

import { formatarMoeda, formatarData } from "./utils/formatadores";
import useAuthContext from "./hooks/useAuthContext";
import useReceitas from "./hooks/useReceitas";
import useDespesas from "./hooks/useDespesas";
import useMetas from "./hooks/useMetas";
import useDashboard from "./hooks/useDashboard";
import useGraficos from "./hooks/useGraficos";
import BotaoSair from "./components/BotaoSair";
import Layout from "./layouts/Layout";
import DashboardPage from "./pages/DashboardPage";
import FinancePage from "./pages/FinancePage";
import PainelFinanceiro from "./components/PainelFinanceiro";
import GerenciadorFinanceiro from "./components/GerenciadorFinanceiro";
import useMensagem from "./hooks/useMensagem";
import useConfirm from "./hooks/useConfirm";

import useFormularioProps from "./hooks/useFormularioProps";
import useListaProps from "./hooks/useListaProps";

import PainelAnalitico from "./components/PainelAnalitico";
import PainelFormularios from "./components/PainelFormularios";
import PainelListas from "./components/PainelListas";

function App() {
  const { sair, limparSessao } = useAuthContext();

  const {
    receitas,
    setReceitas,
    descricao,
    setDescricao,
    valor,
    setValor,
    categoria,
    setCategoria,
    data,
    setData,
    recorrente,
    setRecorrente,
    frequenciaRecorrencia,
    setFrequenciaRecorrencia,
    proximaRecorrencia,
    setProximaRecorrencia,
    editandoId,
    setEditandoId,
    carregandoReceita,
    filtroReceita,
    setFiltroReceita,
    ordemReceitas,
    setOrdemReceitas,
    receitasFiltradas,
    receitasPaginadas,
    paginaReceitas,
    setPaginaReceitas,
    totalPaginasReceitas,
    limparFormularioReceita,
    cadastrarReceita,
    editarReceita,
    excluirReceita,
  } = useReceitas();

  const {
    despesas,
    setDespesas,
    recorrenteDespesa,
    setRecorrenteDespesa,
    frequenciaRecorrenciaDespesa,
    setFrequenciaRecorrenciaDespesa,
    proximaRecorrenciaDespesa,
    setProximaRecorrenciaDespesa,
    descricaoDespesa,
    setDescricaoDespesa,
    valorDespesa,
    setValorDespesa,
    categoriaDespesa,
    setCategoriaDespesa,
    dataDespesa,
    setDataDespesa,
    editandoDespesaId,
    setEditandoDespesaId,
    carregandoDespesa,
    filtroDespesa,
    setFiltroDespesa,
    ordemDespesas,
    setOrdemDespesas,
    despesasFiltradas,
    despesasPaginadas,
    paginaDespesas,
    setPaginaDespesas,
    totalPaginasDespesas,
    limparFormularioDespesa,
    cadastrarDespesa,
    editarDespesa,
    excluirDespesa,
  } = useDespesas();

  const {
    metas,
    setMetas,
    descricaoMeta,
    setDescricaoMeta,
    valorObjetivo,
    setValorObjetivo,
    valorAtual,
    setValorAtual,
    dataLimite,
    setDataLimite,
    editandoMetaId,
    setEditandoMetaId,
    carregandoMeta,
    cadastrarMeta,
    editarMeta,
    excluirMeta,
    limparFormularioMeta,
  } = useMetas();

  const {
    despesasPorCategoria,
    setDespesasPorCategoria,
    inicioFiltro,
    setInicioFiltro,
    fimFiltro,
    setFimFiltro,
    dashboard,
    setDashboard,
    buscarDashboardPorPeriodo,
    limparFiltroDashboard,
  } = useDashboard();

  const { mostrarMensagem } = useMensagem();
  const { confirmar } = useConfirm();

  const { carregandoDados, atualizarDados } = useDadosFinanceiros({
    setReceitas,
    setDespesas,
    setMetas,
    setDashboard,
    setDespesasPorCategoria,
    limparSessao,
    mostrarMensagem,
  });

  const { receitaProps, despesaProps, metaProps } = useFormularioProps({
    receita: {
      editandoId,
      descricao,
      setDescricao,
      valor,
      setValor,
      categoria,
      setCategoria,
      data,
      setData,
      recorrente,
      setRecorrente,
      frequenciaRecorrencia,
      setFrequenciaRecorrencia,
      proximaRecorrencia,
      setProximaRecorrencia,
      cadastrarReceita,
      editarReceita,
      limparFormularioReceita,
      carregandoReceita,
    },
    despesa: {
      editandoDespesaId,
      descricaoDespesa,
      setDescricaoDespesa,
      valorDespesa,
      setValorDespesa,
      categoriaDespesa,
      setCategoriaDespesa,
      dataDespesa,
      setDataDespesa,
      recorrenteDespesa,
      setRecorrenteDespesa,
      frequenciaRecorrenciaDespesa,
      setFrequenciaRecorrenciaDespesa,
      proximaRecorrenciaDespesa,
      setProximaRecorrenciaDespesa,
      cadastrarDespesa,
      editarDespesa,
      limparFormularioDespesa,
      carregandoDespesa,
    },
    meta: {
      editandoMetaId,
      descricaoMeta,
      setDescricaoMeta,
      valorObjetivo,
      setValorObjetivo,
      valorAtual,
      setValorAtual,
      dataLimite,
      setDataLimite,
      cadastrarMeta,
      editarMeta,
      limparFormularioMeta,
      carregandoMeta,
    },
    atualizarDados,
    mostrarMensagem,
  });

  const { receitasProps, despesasProps, metasProps } = useListaProps({
    receita: {
      filtroReceita,
      setFiltroReceita,
      receitas,
      receitasFiltradas,
      receitasPaginadas,
      paginaReceitas,
      setPaginaReceitas,
      totalPaginasReceitas,
      ordemReceitas,
      setOrdemReceitas,
      setDescricao,
      setValor,
      setCategoria,
      setData,
      setEditandoId,
      setRecorrente,
      setFrequenciaRecorrencia,
      setProximaRecorrencia,
      excluirReceita,
    },
    despesa: {
      filtroDespesa,
      setFiltroDespesa,
      despesas,
      despesasFiltradas,
      despesasPaginadas,
      paginaDespesas,
      setPaginaDespesas,
      totalPaginasDespesas,
      ordemDespesas,
      setOrdemDespesas,
      setDescricaoDespesa,
      setValorDespesa,
      setCategoriaDespesa,
      setDataDespesa,
      setEditandoDespesaId,
      setRecorrenteDespesa,
      setFrequenciaRecorrenciaDespesa,
      setProximaRecorrenciaDespesa,
      excluirDespesa,
    },
    meta: {
      metas,
      setDescricaoMeta,
      setValorObjetivo,
      setValorAtual,
      setDataLimite,
      setEditandoMetaId,
      excluirMeta,
    },
    atualizarDados,
    mostrarMensagem,
    confirmar,
    formatarMoeda,
    formatarData,
  });

  const {
    dadosGraficoCategorias,
    dadosGraficoResumo,
    opcoesGraficoResumo,
    opcoesGraficoCategorias,
    datasMovimentacoes,
    dadosGraficoEvolucao,
    opcoesGraficoEvolucao,
    temDadosResumo,
  } = useGraficos({
    receitas,
    despesas,
    despesasPorCategoria,
    dashboard,
  });

  useEffect(() => {
    atualizarDados();
  }, []);

  return (
    <Layout>
      <DashboardPage>
        <FinancePage>
          <BotaoSair sair={sair} />

          <PainelFinanceiro
            carregandoDados={carregandoDados}
            dashboard={dashboard}
            formatarMoeda={formatarMoeda}
            inicioFiltro={inicioFiltro}
            setInicioFiltro={setInicioFiltro}
            fimFiltro={fimFiltro}
            setFimFiltro={setFimFiltro}
            buscarDashboardPorPeriodo={() =>
              buscarDashboardPorPeriodo(mostrarMensagem)
            }
            limparFiltroDashboard={() => limparFiltroDashboard(atualizarDados)}
            temDadosResumo={temDadosResumo}
            dadosGraficoResumo={dadosGraficoResumo}
            opcoesGraficoResumo={opcoesGraficoResumo}
            datasMovimentacoes={datasMovimentacoes}
            dadosGraficoEvolucao={dadosGraficoEvolucao}
            opcoesGraficoEvolucao={opcoesGraficoEvolucao}
            despesasPorCategoria={despesasPorCategoria}
            dadosGraficoCategorias={dadosGraficoCategorias}
            opcoesGraficoCategorias={opcoesGraficoCategorias}
          />

          <PainelAnalitico
            dashboard={dashboard}
            receitas={receitas}
            despesas={despesas}
            metas={metas}
            formatarMoeda={formatarMoeda}
            formatarData={formatarData}
          />
          <GerenciadorFinanceiro
            formularios={
              <PainelFormularios
                receitaProps={receitaProps}
                despesaProps={despesaProps}
                metaProps={metaProps}
              />
            }
            listas={
              <PainelListas
                carregando={carregandoDados}
                receitasProps={receitasProps}
                despesasProps={despesasProps}
                metasProps={metasProps}
              />
            }
          />
        </FinancePage>
      </DashboardPage>
    </Layout>
  );
}
export default App;
