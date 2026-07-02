function tratarErroApi(error, mensagemPadrao = "Ocorreu um erro inesperado.") {
  if (error.response?.data) {
    if (typeof error.response.data === "string") {
      return error.response.data;
    }

    if (error.response.data.mensagem) {
      return error.response.data.mensagem;
    }

    if (error.response.data.message) {
      return error.response.data.message;
    }

    if (error.response.data.title) {
      return error.response.data.title;
    }
  }

  if (error.message) {
    return error.message;
  }

  return mensagemPadrao;
}

export default tratarErroApi;