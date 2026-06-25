import { FiUser, FiMail, FiLock, FiLogIn, FiUserPlus } from "react-icons/fi";

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
}) {
  return (
    <section className="auth-page">
      <div className="auth-card">
        <div className="auth-icon">
          {modoCadastro ? <FiUserPlus size={34} /> : <FiLogIn size={34} />}
        </div>

        <span className="auth-badge">
          {modoCadastro ? "Crie sua conta" : "Acesse sua conta"}
        </span>

        <h2>{modoCadastro ? "Cadastro" : "Login"}</h2>

        <p>
          {modoCadastro
            ? "Preencha os dados abaixo para começar a organizar suas finanças."
            : "Entre para acompanhar suas receitas, despesas e relatórios."}
        </p>

        {!modoCadastro ? (
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

            <button
              type="button"
              className="auth-link"
              onClick={() => {
                limparCamposCadastro();
                limparCamposLogin();
                setModoCadastro(false);
              }}
            >
              Já tenho conta
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default AuthForm;
