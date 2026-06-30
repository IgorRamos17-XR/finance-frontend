import {
  FiUser,
  FiMail,
  FiLock,
  FiLogIn,
  FiUserPlus,
  FiKey,
} from "react-icons/fi";

function AuthForm({
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
  function voltarParaLogin() {
    limparCamposCadastro();
    limparCamposLogin();
    limparCamposRecuperacao();
    setModoCadastro(false);
    setModoRecuperarSenha(false);
  }

  return (
    <section className="auth-page">
      <div className="auth-card">
        <div className="auth-icon">
          {modoRecuperarSenha ? (
            <FiKey size={34} />
          ) : modoCadastro ? (
            <FiUserPlus size={34} />
          ) : (
            <FiLogIn size={34} />
          )}
        </div>

        <span className="auth-badge">
          {modoRecuperarSenha
            ? "Recuperar acesso"
            : modoCadastro
              ? "Crie sua conta"
              : "Acesse sua conta"}
        </span>

        <h2>
          {modoRecuperarSenha
            ? "Esqueci minha senha"
            : modoCadastro
              ? "Cadastro"
              : "Login"}
        </h2>

        <p>
          {modoRecuperarSenha
            ? "Informe seu email para gerar o token e depois cadastre uma nova senha."
            : modoCadastro
              ? "Preencha os dados abaixo para começar a organizar suas finanças."
              : "Entre para acompanhar suas receitas, despesas e relatórios."}
        </p>

        {modoRecuperarSenha ? (
          <form className="auth-form">
            <div className="auth-campo">
              <FiMail size={18} />
              <input
                type="email"
                placeholder="Digite seu email cadastrado"
                value={emailRecuperacao}
                onChange={(e) => setEmailRecuperacao(e.target.value)}
              />
            </div>

            <button
              type="button"
              className="auth-btn auth-btn-login"
              disabled={carregandoRecuperacao}
              onClick={solicitarRecuperacaoSenha}
            >
              {carregandoRecuperacao ? "Gerando token..." : "Gerar token"}
            </button>

            <div className="auth-campo">
              <FiKey size={18} />
              <input
                type="text"
                placeholder="Cole o token recebido"
                value={tokenRecuperacao}
                onChange={(e) => setTokenRecuperacao(e.target.value)}
              />
            </div>

            <div className="auth-campo">
              <FiLock size={18} />
              <input
                type="password"
                placeholder="Digite a nova senha"
                value={novaSenha}
                onChange={(e) => setNovaSenha(e.target.value)}
              />
            </div>

            <button
              type="button"
              className="auth-btn auth-btn-cadastro"
              disabled={carregandoRecuperacao}
              onClick={redefinirSenha}
            >
              {carregandoRecuperacao ? "Redefinindo..." : "Redefinir senha"}
            </button>

            <button type="button" className="auth-link" onClick={voltarParaLogin}>
              Voltar para o login
            </button>
          </form>
        ) : !modoCadastro ? (
          <form onSubmit={fazerLogin} className="auth-form">
            <div className="auth-campo">
              <FiMail size={18} />
              <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="auth-campo">
              <FiLock size={18} />
              <input
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="auth-btn auth-btn-login"
              disabled={carregandoLogin}
            >
              {carregandoLogin ? "Entrando..." : "Entrar no sistema"}
            </button>

            <button
              type="button"
              className="auth-link"
              onClick={() => {
                limparCamposLogin();
                limparCamposCadastro();
                limparCamposRecuperacao();
                setModoRecuperarSenha(true);
              }}
            >
              Esqueci minha senha
            </button>

            <button
              type="button"
              className="auth-link"
              onClick={() => {
                limparCamposLogin();
                limparCamposCadastro();
                limparCamposRecuperacao();
                setModoCadastro(true);
              }}
            >
              Ainda não tenho conta
            </button>
          </form>
        ) : (
          <form onSubmit={cadastrarUsuario} className="auth-form">
            <div className="auth-campo">
              <FiUser size={18} />
              <input
                type="text"
                placeholder="Digite seu nome"
                value={nomeCadastro}
                onChange={(e) => setNomeCadastro(e.target.value)}
              />
            </div>

            <div className="auth-campo">
              <FiMail size={18} />
              <input
                type="email"
                placeholder="Digite seu email"
                value={emailCadastro}
                onChange={(e) => setEmailCadastro(e.target.value)}
              />
            </div>

            <div className="auth-campo">
              <FiLock size={18} />
              <input
                type="password"
                placeholder="Digite sua senha"
                value={senhaCadastro}
                onChange={(e) => setSenhaCadastro(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="auth-btn auth-btn-cadastro"
              disabled={carregandoCadastro}
            >
              {carregandoCadastro ? "Cadastrando..." : "Criar conta"}
            </button>

            <button type="button" className="auth-link" onClick={voltarParaLogin}>
              Já tenho conta
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default AuthForm;