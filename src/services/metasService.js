import api from "./api";

const metasService = {
  async listar() {
    const response = await api.get("/MetasFinanceiras");
    return response.data;
  },

  async cadastrar(meta) {
    const response = await api.post("/MetasFinanceiras", meta);
    return response.data;
  },

  async editar(id, meta) {
    const response = await api.put(`/MetasFinanceiras/${id}`, meta);
    return response.data;
  },

  async excluir(id) {
    const response = await api.delete(`/MetasFinanceiras/${id}`);
    return response.data;
  },
};

export default metasService;