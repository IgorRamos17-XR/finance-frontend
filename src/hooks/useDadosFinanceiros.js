import { useCallback, useState } from "react";

import receitasService from "../services/receitasService";
import despesasService from "../services/despesasService";
import dashboardService from "../services/dashboardService";
import metasService from "../services/metasService";
import tratarErroApi from "../utils/tratarErroApi";

function useDadosFinanceiros({
  setReceitas,
  setDespesas,
  setMetas,
  setDashboard,
  setDespesasPorCategoria,
  limparSessao,
  mostrarMensagem,
}) {
  const [carregandoDados, setCarregandoDados] = useState(false);

  const atualizarDados = useCallback(async () => {
    setCarregandoDados(true);

    try {
      const [
        receitasResponse,
        despesasResponse,
        metasResponse,
        dashboardResponse,
        categoriasResponse,
      ] = await Promise.all([
        receitasService.listar(),
        despesasService.listar(),
        metasService.listar(),
        dashboardService.resumo(),
        dashboardService.despesasPorCategoria(),
      ]);

      const listaReceitas = Array.isArray(receitasResponse)
        ? receitasResponse
        : receitasResponse.data || [];

      const listaDespesas = Array.isArray(despesasResponse)
        ? despesasResponse
        : despesasResponse.data || [];

      const listaMetas = Array.isArray(metasResponse)
        ? metasResponse
        : metasResponse.data || [];

      setReceitas(listaReceitas);
      setDespesas(listaDespesas);
      setMetas(listaMetas);
      setDashboard(dashboardResponse);
      setDespesasPorCategoria(categoriasResponse || []);
    } catch (error) {
      if (error.response?.status === 401) {
        limparSessao();
        mostrarMensagem("Sessão expirada", "danger");
      } else {
        mostrarMensagem(
          tratarErroApi(error, "Erro ao carregar dados."),
          "danger",
        );
      }
    } finally {
      setCarregandoDados(false);
    }
  }, [
    setReceitas,
    setDespesas,
    setMetas,
    setDashboard,
    setDespesasPorCategoria,
    limparSessao,
    mostrarMensagem,
  ]);

  return {
    carregandoDados,
    atualizarDados,
  };
}

export default useDadosFinanceiros;