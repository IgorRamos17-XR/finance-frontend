import AuthPage from "./AuthPage";
import useAuthContext from "../hooks/useAuthContext";
import useMensagem from "../hooks/useMensagem";

function LoginPage() {
  const {
    email,
    setEmail,
    senha,
    setSenha,
    modoCadastro,
    setModoCadastro,
    nomeCadastro,
    setNomeCadastro,
    emailCadastro,
    setEmailCadastro,
    senhaCadastro,
    setSenhaCadastro,
    carregandoLogin,
    carregandoCadastro,
    fazerLogin,
    cadastrarUsuario,
    limparCamposLogin,
    limparCamposCadastro,
    modoRecuperarSenha,
    setModoRecuperarSenha,
    emailRecuperacao,
    setEmailRecuperacao,
    tokenRecuperacao,
    setTokenRecuperacao,
    novaSenha,
    setNovaSenha,
    carregandoRecuperacao,
    solicitarRecuperacaoSenha,
    redefinirSenha,
    limparCamposRecuperacao,
  } = useAuthContext();

  const { mostrarMensagem } = useMensagem();

  return (
    <AuthPage
      modoCadastro={modoCadastro}
      setModoCadastro={setModoCadastro}
      fazerLogin={(e) => fazerLogin(e, mostrarMensagem)}
      cadastrarUsuario={(e) => cadastrarUsuario(e, mostrarMensagem)}
      email={email}
      setEmail={setEmail}
      senha={senha}
      setSenha={setSenha}
      nomeCadastro={nomeCadastro}
      setNomeCadastro={setNomeCadastro}
      emailCadastro={emailCadastro}
      setEmailCadastro={setEmailCadastro}
      senhaCadastro={senhaCadastro}
      setSenhaCadastro={setSenhaCadastro}
      carregandoLogin={carregandoLogin}
      carregandoCadastro={carregandoCadastro}
      limparCamposLogin={limparCamposLogin}
      limparCamposCadastro={limparCamposCadastro}
      modoRecuperarSenha={modoRecuperarSenha}
      setModoRecuperarSenha={setModoRecuperarSenha}
      emailRecuperacao={emailRecuperacao}
      setEmailRecuperacao={setEmailRecuperacao}
      tokenRecuperacao={tokenRecuperacao}
      setTokenRecuperacao={setTokenRecuperacao}
      novaSenha={novaSenha}
      setNovaSenha={setNovaSenha}
      carregandoRecuperacao={carregandoRecuperacao}
      solicitarRecuperacaoSenha={(e) =>
        solicitarRecuperacaoSenha(e, mostrarMensagem)
      }
      redefinirSenha={(e) => redefinirSenha(e, mostrarMensagem)}
      limparCamposRecuperacao={limparCamposRecuperacao}
    />
  );
}

export default LoginPage;
