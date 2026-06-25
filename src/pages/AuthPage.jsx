import AuthForm from "../components/AuthForm";

function AuthPage({
  modoCadastro,
  setModoCadastro,
  fazerLogin,
  cadastrarUsuario,
  email,
  setEmail,
  senha,
  setSenha,
  nomeCadastro,
  setNomeCadastro,
  emailCadastro,
  setEmailCadastro,
  senhaCadastro,
  setSenhaCadastro,
  carregandoLogin,
  carregandoCadastro,
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
}) {
  return (
    <AuthForm
      modoCadastro={modoCadastro}
      setModoCadastro={setModoCadastro}
      fazerLogin={fazerLogin}
      cadastrarUsuario={cadastrarUsuario}
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
      solicitarRecuperacaoSenha={solicitarRecuperacaoSenha}
      redefinirSenha={redefinirSenha}
      limparCamposRecuperacao={limparCamposRecuperacao}
    />
  );
}

export default AuthPage;
