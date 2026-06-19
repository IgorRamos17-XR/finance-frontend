import api from "./api";

const despesasService = {
    async listar() {
        const response = await api.get("/Despesas");
        return response.data;
    },

    async cadastrar(dados) {
        const response = await api.post("/Despesas", dados);
        return response.data;
    },

    async editar(id, dados) {
        const response = await api.put(`/Despesas/${id}`, dados);
        return response.data;
    },

    async excluir(id) {
        const response = await api.delete(`/Despesas/${id}`);
        return response.data;
    },
};

export default despesasService;