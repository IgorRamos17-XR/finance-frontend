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
    />
  );
}

export default AuthPage;