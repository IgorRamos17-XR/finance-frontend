
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
  carregandoCadastro
}) {
  return (
    <>
      {!modoCadastro ? (
        <form onSubmit={fazerLogin}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={carregandoLogin}
          >
            {carregandoLogin ? "Entrando..." : "Entrar"}
          </button>

          <button
            type="button"
            className="btn btn-link w-100 mt-3"
            onClick={() => setModoCadastro(true)}
          >
            Ainda não tenho conta
          </button>
        </form>
      ) : (
        <form onSubmit={cadastrarUsuario}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Digite seu nome"
              value={nomeCadastro}
              onChange={(e) => setNomeCadastro(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Digite seu email"
              value={emailCadastro}
              onChange={(e) => setEmailCadastro(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Digite sua senha"
              value={senhaCadastro}
              onChange={(e) => setSenhaCadastro(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-success w-100"
            disabled={carregandoCadastro}
          >
            {carregandoCadastro ? "Cadastrando..." : "Cadastrar"}
          </button>

          <button
            type="button"
            className="btn btn-link w-100 mt-3"
            onClick={() => setModoCadastro(false)}
          >
            Já tenho conta
          </button>
        </form>
      )}
    </>
  );
}

export default AuthForm;