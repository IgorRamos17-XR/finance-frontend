function AcoesRelatorio({ carregando, aoAtualizar }) {
  return (
    <button
      type="button"
      className="btn-relatorio btn-relatorio-atualizar"
      onClick={aoAtualizar}
      disabled={carregando}
    >
      {carregando ? "⏳ Atualizando..." : "🔄 Atualizar"}
    </button>
  );
}

export default AcoesRelatorio;