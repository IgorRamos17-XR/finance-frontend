import { useEffect } from "react";

import useDadosFinanceiros from "./hooks/useDadosFinanceiros";

import "./App.css";
import ReceitaForm from "./components/forms/ReceitaForm";
import DespesaForm from "./components/forms/DespesaForm";
import ReceitasLista from "./components/listas/ReceitasLista";
import DespesasLista from "./components/listas/DespesasLista";
import { formatarMoeda, formatarData } from "./utils/formatadores";
import useAuthContext from "./hooks/useAuthContext";
import useReceitas from "./hooks/useReceitas";
import useDespesas from "./hooks/useDespesas";
import useDashboard from "./hooks/useDashboard";
import useGraficos from "./hooks/useGraficos";
import BotaoSair from "./components/BotaoSair";
import Layout from "./components/Layout";
import AuthPage from "./pages/AuthPage";
import DashboardPage from "./pages/DashboardPage";
import FormulariosFinanceiros from "./components/FormulariosFinanceiros";
import ListasFinanceiras from "./components/ListasFinanceiras";
import FinancePage from "./pages/FinancePage";
import PainelFinanceiro from "./components/PainelFinanceiro";
import GerenciadorFinanceiro from "./components/GerenciadorFinanceiro";
import useMensagem from "./hooks/useMensagem";
import useConfirm from "./hooks/useConfirm";

function App() {
  const {
    email,
    setEmail,
    senha,
    setSenha,
    logado,
    modoCadastro,
    setModoCadastro,
    nomeCadastro,
    setNomeCadastro,
    emailCadastro,
    setEmailCadastro,
    senhaCadastro,
    setSenhaCadastro,
    carregandoLogin,
    carregandoCadastro,
    fazerLogin,
    cadastrarUsuario,
    sair,
    limparSessao,
  } = useAuthContext();

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
    editandoId,
    setEditandoId,
    carregandoReceita,
    filtroReceita,
    setFiltroReceita,
    ordemReceitas,
    setOrdemReceitas,
    receitasFiltradas,
    limparFormularioReceita,
    cadastrarReceita,
    editarReceita,
    excluirReceita,
  } = useReceitas();

  const {
    despesas,
    setDespesas,
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
    limparFormularioDespesa,
    cadastrarDespesa,
    editarDespesa,
    excluirDespesa,
  } = useDespesas();

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
    if (logado) {
      atualizarDados();
    }
  }, [logado]);

  return (
    <Layout>
      {!logado ? (
        <AuthPage
          modoCadastro={modoCadastro}
          setModoCadastro={setModoCadastro}
          fazerLogin={(e) => fazerLogin(e, mostrarMensagem)}
          cadastrarUsuario={(e) => cadastrarUsuario(e, mostrarMensagem)}
          email={email}
          setEmail={setEmail}
          senha={senha}
          setSenha={setSenha}
          nomeCadastro={nomeCadastro}
          setNomeCadastro={setNomeCadastro}
          emailCadastro={emailCadastro}
          setEmailCadastro={setEmailCadastro}
          senhaCadastro={senhaCadastro}
          setSenhaCadastro={setSenhaCadastro}
          carregandoLogin={carregandoLogin}
          carregandoCadastro={carregandoCadastro}
        />
      ) : (
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
              limparFiltroDashboard={() =>
                limparFiltroDashboard(atualizarDados)
              }
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
                />
              }
              listas={
                <ListasFinanceiras
                  receitasLista={
                    <ReceitasLista
                      filtroReceita={filtroReceita}
                      setFiltroReceita={setFiltroReceita}
                      receitas={receitas}
                      receitasFiltradas={receitasFiltradas}
                      ordemReceitas={ordemReceitas}
                      setOrdemReceitas={setOrdemReceitas}
                      formatarMoeda={formatarMoeda}
                      formatarData={formatarData}
                      setDescricao={setDescricao}
                      setValor={setValor}
                      setCategoria={setCategoria}
                      setData={setData}
                      setEditandoId={setEditandoId}
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
                      ordemDespesas={ordemDespesas}
                      setOrdemDespesas={setOrdemDespesas}
                      formatarMoeda={formatarMoeda}
                      formatarData={formatarData}
                      setDescricaoDespesa={setDescricaoDespesa}
                      setValorDespesa={setValorDespesa}
                      setCategoriaDespesa={setCategoriaDespesa}
                      setDataDespesa={setDataDespesa}
                      setEditandoDespesaId={setEditandoDespesaId}
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
                />
              }
            />
          </FinancePage>
        </DashboardPage>
      )}
    </Layout>
  );
}
export default App;
