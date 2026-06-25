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
    

    async forgotPassword(dados) {
  const response = await api.post("/Auth/forgot-password", dados);
  return response.data;
},

async resetPassword(dados) {
  const response = await api.post("/Auth/reset-password", dados);
  return response.data;
},

};

export default authService;