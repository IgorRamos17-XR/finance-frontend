function Mensagem({ mensagem, tipoMensagem, aoFechar }) {
  if (!mensagem) {
    return null;
  }

  const configuracoes = {
    success: {
      icone: "✅",
      titulo: "Sucesso",
      classe: "toast-success",
    },
    danger: {
      icone: "⚠️",
      titulo: "Atenção",
      classe: "toast-danger",
    },
    warning: {
      icone: "⚠️",
      titulo: "Aviso",
      classe: "toast-warning",
    },
    info: {
      icone: "ℹ️",
      titulo: "Informação",
      classe: "toast-info",
    },
  };

  const config = configuracoes[tipoMensagem] || configuracoes.info;

  return (
    <div className={`toast-financeiro ${config.classe}`}>
      <div className="toast-icone">{config.icone}</div>

      <div className="toast-conteudo">
        <strong>{config.titulo}</strong>
        <p>{mensagem}</p>
      </div>

      <button type="button" className="toast-fechar" onClick={aoFechar}>
        ×
      </button>
    </div>
  );
}

export default Mensagem;