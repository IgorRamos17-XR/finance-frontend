import api from "./api";

const metasService = {
  listar() {
    return api.get("/MetasFinanceiras");
  },

  cadastrar(meta) {
    return api.post("/MetasFinanceiras", meta);
  },

  editar(id, meta) {
    return api.put(`/MetasFinanceiras/${id}`, meta);
  },

  excluir(id) {
    return api.delete(`/MetasFinanceiras/${id}`);
  },
};

export default metasService;