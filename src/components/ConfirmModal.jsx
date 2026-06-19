function ConfirmModal({
  mostrar,
  titulo,
  mensagem,
  textoConfirmar = "Confirmar",
  textoCancelar = "Cancelar",
  aoConfirmar,
  aoCancelar,
}) {
  if (!mostrar) {
    return null;
  }

 return (
  <>
    <div className="modal d-block" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{titulo}</h5>

            <button
              type="button"
              className="btn-close"
              onClick={aoCancelar}
            />
          </div>

          <div className="modal-body">
            <p>{mensagem}</p>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={aoCancelar}
            >
              {textoCancelar}
            </button>

            <button
              type="button"
              className="btn btn-danger"
              onClick={aoConfirmar}
            >
              {textoConfirmar}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="modal-backdrop show"></div>
  </>
);
}

export default ConfirmModal;