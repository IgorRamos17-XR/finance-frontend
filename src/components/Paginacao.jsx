function Paginacao({ paginaAtual, totalPaginas, aoMudarPagina }) {
  if (totalPaginas <= 1) {
    return null;
  }

  const paginas = Array.from({ length: totalPaginas }, (_, index) => index + 1);

  return (
    <div className="paginacao">
      <button
        type="button"
        className="paginacao-btn"
        disabled={paginaAtual === 1}
        onClick={() => aoMudarPagina(paginaAtual - 1)}
      >
        ← Anterior
      </button>

      <div className="paginacao-numeros">
        {paginas.map((pagina) => (
          <button
            key={pagina}
            type="button"
            className={
              paginaAtual === pagina
                ? "paginacao-numero paginacao-numero-ativo"
                : "paginacao-numero"
            }
            onClick={() => aoMudarPagina(pagina)}
          >
            {pagina}
          </button>
        ))}
      </div>

      <button
        type="button"
        className="paginacao-btn"
        disabled={paginaAtual === totalPaginas}
        onClick={() => aoMudarPagina(paginaAtual + 1)}
      >
        Próxima →
      </button>
    </div>
  );
}

export default Paginacao;