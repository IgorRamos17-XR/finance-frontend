import api from "./api";

const dashboardService = {
  async resumo() {
    const response = await api.get("/Dashboard/resumo");
    return response.data;
  },

  async despesasPorCategoria() {
    const response = await api.get("/Dashboard/despesas-por-categoria");
    return response.data;
  },

  async resumoPorPeriodo(inicio, fim) {
    const response = await api.get("/Dashboard/resumo-periodo", {
      params: {
        inicio,
        fim,
      },
    });

    return response.data;
  },

  async despesasPorCategoriaPeriodo(inicio, fim) {
    const response = await api.get(
      "/Dashboard/despesas-por-categoria-periodo",
      {
        params: {
          inicio,
          fim,
        },
      }
    );

    return response.data;
  },
};

export default dashboardService;