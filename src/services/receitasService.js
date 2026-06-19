import api from "./api";

const receitasService = {
    async listar() {
        const response = await api.get("/Receitas");
        return response.data;
    },

    async cadastrar(dados) {
        const response = await api.post("/Receitas", dados);
        return response.data;
    },

    async editar(id, dados) {
        const response = await api.put(`/Receitas/${id}`, dados);
        return response.data;
    },

    async excluir(id) {
        const response = await api.delete(`/Receitas/${id}`);
        return response.data;
    },
    };

export default receitasService;