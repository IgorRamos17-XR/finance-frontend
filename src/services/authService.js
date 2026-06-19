import api from "./api";

const authService = {
    async login(dados) {
        const response = await api.post("/Auth/login", dados);
        return response.data;
    },

    async cadastrar(dados) {
        const response = await api.post("/Auth/register", dados);
        return response.data;
    },
    };

export default authService;