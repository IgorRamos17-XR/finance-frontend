function BotaoImprimirRelatorio() {
  function imprimir() {
    window.print();
  }

  return (
    <button
      type="button"
      className="btn btn-outline-dark"
      onClick={imprimir}
    >
      Imprimir Relatório
    </button>
  );
}

export default BotaoImprimirRelatorio;