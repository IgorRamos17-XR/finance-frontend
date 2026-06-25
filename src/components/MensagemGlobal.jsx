import Mensagem from "./Mensagem";
import useMensagem from "../hooks/useMensagem";

function MensagemGlobal() {
  const { mensagem, tipoMensagem, limparMensagem } = useMensagem();

  return (
    <Mensagem
      mensagem={mensagem}
      tipoMensagem={tipoMensagem}
      aoFechar={limparMensagem}
    />
  );
}

export default MensagemGlobal;