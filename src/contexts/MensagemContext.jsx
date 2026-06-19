import { createContext, useEffect, useState } from "react";

const MensagemContext = createContext();

export function MensagemProvider({ children }) {
  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState("success");

  useEffect(() => {
    if (mensagem) {
      const timer = setTimeout(() => {
        limparMensagem();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [mensagem]);

  function mostrarMensagem(texto, tipo = "success") {
    setTipoMensagem(tipo);
    setMensagem(texto);
  }

  function limparMensagem() {
    setMensagem("");
  }

  return (
    <MensagemContext.Provider
      value={{
        mensagem,
        tipoMensagem,
        mostrarMensagem,
        limparMensagem,
      }}
    >
      {children}
    </MensagemContext.Provider>
  );
}

export default MensagemContext;