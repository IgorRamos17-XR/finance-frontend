function BotaoImprimirRelatorio() {
  function imprimir() {
    window.print();
  }

  return (
    <button
      type="button"
      className="btn-relatorio btn-relatorio-imprimir"
      onClick={imprimir}
    >
      🖨️ Imprimir
    </button>
  );
}

export default BotaoImprimirRelatorio;