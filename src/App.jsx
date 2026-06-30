import { useEffect } from "react";

import useDadosFinanceiros from "./hooks/useDadosFinanceiros";

import "./App.css";
import ReceitaForm from "./components/forms/ReceitaForm";
import DespesaForm from "./components/forms/DespesaForm";
import MetaForm from "./components/forms/MetaForm";
import ReceitasLista from "./components/listas/ReceitasLista";
import DespesasLista from "./components/listas/DespesasLista";
import MetasLista from "./components/listas/MetasLista";
import { formatarMoeda, formatarData } from "./utils/formatadores";
import useAuthContext from "./hooks/useAuthContext";
import useReceitas from "./hooks/useReceitas";
import useDespesas from "./hooks/useDespesas";
import useMetas from "./hooks/useMetas";
import useDashboard from "./hooks/useDashboard";
import useGraficos from "./hooks/useGraficos";
import BotaoSair from "./components/BotaoSair";
import Layout from "./components/Layout";
import CalendarioFinanceiro from "./components/CalendarioFinanceiro";

import DashboardPage from "./pages/DashboardPage";
import FormulariosFinanceiros from "./components/FormulariosFinanceiros";
import ListasFinanceiras from "./components/ListasFinanceiras";
import FinancePage from "./pages/FinancePage";
import PainelFinanceiro from "./components/PainelFinanceiro";
import ResumoMetas from "./components/ResumoMetas";
import InsightsFinanceiros from "./components/InsightsFinanceiros";
import EstatisticasFinanceiras from "./components/EstatisticasFinanceiras";
import SaudeFinanceira from "./components/SaudeFinanceira";
import GerenciadorFinanceiro from "./components/GerenciadorFinanceiro";
import useMensagem from "./hooks/useMensagem";
import useConfirm from "./hooks/useConfirm";
import PainelRecorrencias from "./components/PainelRecorrencias";

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

          <GerenciadorFinanceiro
            formularios={
              <FormulariosFinanceiros
                receitaForm={
                  <ReceitaForm
                    editandoId={editandoId}
                    descricao={descricao}
                    setDescricao={setDescricao}
                    valor={valor}
                    setValor={setValor}
                    categoria={categoria}
                    setCategoria={setCategoria}
                    data={data}
                    setData={setData}
                    recorrente={recorrente}
                    setRecorrente={setRecorrente}
                    frequenciaRecorrencia={frequenciaRecorrencia}
                    setFrequenciaRecorrencia={setFrequenciaRecorrencia}
                    proximaRecorrencia={proximaRecorrencia}
                    setProximaRecorrencia={setProximaRecorrencia}
                    cadastrarReceita={(e) =>
                      cadastrarReceita(e, atualizarDados, mostrarMensagem)
                    }
                    editarReceita={(id) =>
                      editarReceita(id, atualizarDados, mostrarMensagem)
                    }
                    limparFormularioReceita={limparFormularioReceita}
                    carregandoReceita={carregandoReceita}
                  />
                }
                despesaForm={
                  <DespesaForm
                    editandoDespesaId={editandoDespesaId}
                    descricaoDespesa={descricaoDespesa}
                    setDescricaoDespesa={setDescricaoDespesa}
                    valorDespesa={valorDespesa}
                    setValorDespesa={setValorDespesa}
                    categoriaDespesa={categoriaDespesa}
                    setCategoriaDespesa={setCategoriaDespesa}
                    dataDespesa={dataDespesa}
                    setDataDespesa={setDataDespesa}
                    recorrenteDespesa={recorrenteDespesa}
                    setRecorrenteDespesa={setRecorrenteDespesa}
                    frequenciaRecorrenciaDespesa={frequenciaRecorrenciaDespesa}
                    setFrequenciaRecorrenciaDespesa={
                      setFrequenciaRecorrenciaDespesa
                    }
                    proximaRecorrenciaDespesa={proximaRecorrenciaDespesa}
                    setProximaRecorrenciaDespesa={setProximaRecorrenciaDespesa}
                    cadastrarDespesa={(e) =>
                      cadastrarDespesa(e, atualizarDados, mostrarMensagem)
                    }
                    editarDespesa={(id) =>
                      editarDespesa(id, atualizarDados, mostrarMensagem)
                    }
                    limparFormularioDespesa={limparFormularioDespesa}
                    carregandoDespesa={carregandoDespesa}
                  />
                }
                metaForm={
                  <MetaForm
                    editandoMetaId={editandoMetaId}
                    descricaoMeta={descricaoMeta}
                    setDescricaoMeta={setDescricaoMeta}
                    valorObjetivo={valorObjetivo}
                    setValorObjetivo={setValorObjetivo}
                    valorAtual={valorAtual}
                    setValorAtual={setValorAtual}
                    dataLimite={dataLimite}
                    setDataLimite={setDataLimite}
                    cadastrarMeta={(e) =>
                      cadastrarMeta(e, atualizarDados, mostrarMensagem)
                    }
                    editarMeta={(id) =>
                      editarMeta(id, atualizarDados, mostrarMensagem)
                    }
                    limparFormularioMeta={limparFormularioMeta}
                    carregandoMeta={carregandoMeta}
                  />
                }
              />
            }
            listas={
              <ListasFinanceiras
                carregando={carregandoDados}
                receitasLista={
                  <ReceitasLista
                    filtroReceita={filtroReceita}
                    setFiltroReceita={setFiltroReceita}
                    receitas={receitas}
                    receitasFiltradas={receitasFiltradas}
                    receitasPaginadas={receitasPaginadas}
                    paginaReceitas={paginaReceitas}
                    setPaginaReceitas={setPaginaReceitas}
                    totalPaginasReceitas={totalPaginasReceitas}
                    ordemReceitas={ordemReceitas}
                    setOrdemReceitas={setOrdemReceitas}
                    formatarMoeda={formatarMoeda}
                    formatarData={formatarData}
                    setDescricao={setDescricao}
                    setValor={setValor}
                    setCategoria={setCategoria}
                    setData={setData}
                    setEditandoId={setEditandoId}
                    setRecorrente={setRecorrente}
                    setFrequenciaRecorrencia={setFrequenciaRecorrencia}
                    setProximaRecorrencia={setProximaRecorrencia}
                    excluirReceita={(id) =>
                      confirmar({
                        titulo: "Excluir receita",
                        mensagem:
                          "Tem certeza que deseja excluir esta receita?",
                        textoConfirmar: "Excluir",
                        aoConfirmar: () =>
                          excluirReceita(id, atualizarDados, mostrarMensagem),
                      })
                    }
                  />
                }
                despesasLista={
                  <DespesasLista
                    filtroDespesa={filtroDespesa}
                    setFiltroDespesa={setFiltroDespesa}
                    despesas={despesas}
                    despesasFiltradas={despesasFiltradas}
                    despesasPaginadas={despesasPaginadas}
                    paginaDespesas={paginaDespesas}
                    setPaginaDespesas={setPaginaDespesas}
                    totalPaginasDespesas={totalPaginasDespesas}
                    ordemDespesas={ordemDespesas}
                    setOrdemDespesas={setOrdemDespesas}
                    formatarMoeda={formatarMoeda}
                    formatarData={formatarData}
                    setDescricaoDespesa={setDescricaoDespesa}
                    setValorDespesa={setValorDespesa}
                    setCategoriaDespesa={setCategoriaDespesa}
                    setDataDespesa={setDataDespesa}
                    setEditandoDespesaId={setEditandoDespesaId}
                    setRecorrenteDespesa={setRecorrenteDespesa}
                    setFrequenciaRecorrenciaDespesa={
                      setFrequenciaRecorrenciaDespesa
                    }
                    setProximaRecorrenciaDespesa={setProximaRecorrenciaDespesa}
                    excluirDespesa={(id) =>
                      confirmar({
                        titulo: "Excluir despesa",
                        mensagem:
                          "Tem certeza que deseja excluir esta despesa?",
                        textoConfirmar: "Excluir",
                        aoConfirmar: () =>
                          excluirDespesa(id, atualizarDados, mostrarMensagem),
                      })
                    }
                  />
                }
                metasLista={
                  <MetasLista
                    metas={metas}
                    formatarMoeda={formatarMoeda}
                    formatarData={formatarData}
                    setDescricaoMeta={setDescricaoMeta}
                    setValorObjetivo={setValorObjetivo}
                    setValorAtual={setValorAtual}
                    setDataLimite={setDataLimite}
                    setEditandoMetaId={setEditandoMetaId}
                    excluirMeta={(id) =>
                      confirmar({
                        titulo: "Excluir meta",
                        mensagem: "Tem certeza que deseja excluir esta meta?",
                        textoConfirmar: "Excluir",
                        aoConfirmar: () =>
                          excluirMeta(id, atualizarDados, mostrarMensagem),
                      })
                    }
                  />
                }
              />
            }
          />
        </FinancePage>
      </DashboardPage>
    </Layout>
  );
}
export default App;
