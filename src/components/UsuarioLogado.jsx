function UsuarioLogado({ logado, usuario }) {
  if (!logado || !usuario) {
    return null;
  }

  return (
    <p className="text-center text-muted">
      Logado como: <strong>{usuario.nome}</strong> —{" "}
      <span>{usuario.email}</span>
    </p>
  );
}

export default UsuarioLogado;