function AcoesRelatorio({ carregando, aoAtualizar }) {
  return (
    <div className="d-flex justify-content-end mb-3">
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={aoAtualizar}
        disabled={carregando}
      >
        {carregando ? "Atualizando..." : "Atualizar Relatório"}
      </button>
    </div>
  );
}

export default AcoesRelatorio;