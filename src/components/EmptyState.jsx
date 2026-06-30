function EmptyState({ icone, titulo, descricao, acaoTexto, aoClicar }) {
  return (
    <div className="empty-state-card">
      <div className="empty-state-icon">{icone}</div>

      <h4>{titulo}</h4>

      <p>{descricao}</p>

      {acaoTexto && aoClicar && (
        <button type="button" className="empty-state-btn" onClick={aoClicar}>
          {acaoTexto}
        </button>
      )}
    </div>
  );
}

export default EmptyState;