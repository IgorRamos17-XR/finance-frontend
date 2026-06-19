import { createContext, useState } from "react";
import ConfirmModal from "../components/ConfirmModal";

const ConfirmContext = createContext();

export function ConfirmProvider({ children }) {
  const [config, setConfig] = useState(null);

  function confirmar({
    titulo = "Confirmação",
    mensagem,
    textoConfirmar = "Confirmar",
    textoCancelar = "Cancelar",
    aoConfirmar,
  }) {
    setConfig({
      titulo,
      mensagem,
      textoConfirmar,
      textoCancelar,
      aoConfirmar,
    });
  }

  function fecharModal() {
    setConfig(null);
  }

  function executarConfirmacao() {
    if (config?.aoConfirmar) {
      config.aoConfirmar();
    }

    fecharModal();
  }

  return (
    <ConfirmContext.Provider value={{ confirmar }}>
      {children}

      <ConfirmModal
        mostrar={!!config}
        titulo={config?.titulo}
        mensagem={config?.mensagem}
        textoConfirmar={config?.textoConfirmar}
        textoCancelar={config?.textoCancelar}
        aoConfirmar={executarConfirmacao}
        aoCancelar={fecharModal}
      />
    </ConfirmContext.Provider>
  );
}

export default ConfirmContext;