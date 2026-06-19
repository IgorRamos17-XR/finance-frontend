import TituloApp from "./TituloApp";
import Mensagem from "./Mensagem";
import UsuarioLogado from "./UsuarioLogado";
import useMensagem from "../hooks/useMensagem";

function Header({ logado, usuario }) {
  const { mensagem, tipoMensagem, limparMensagem } = useMensagem();

  return (
    <>
      <TituloApp />

      <Mensagem
        mensagem={mensagem}
        tipoMensagem={tipoMensagem}
        aoFechar={limparMensagem}
      />

      <UsuarioLogado
        logado={logado}
        usuario={usuario}
      />
    </>
  );
}

export default Header;