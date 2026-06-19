function Mensagem({ mensagem, tipoMensagem, aoFechar }) {
  if (!mensagem) {
    return null;
  }

  return (
    <div
      className={`alert alert-${tipoMensagem} alert-dismissible text-center position-fixed top-0 start-50 translate-middle-x mt-3 shadow`}
      style={{
        zIndex: 2000,
        minWidth: "300px",
      }}
    >
      {mensagem}

      <button
        type="button"
        className="btn-close"
        onClick={aoFechar}
      />
    </div>
  );
}

export default Mensagem;