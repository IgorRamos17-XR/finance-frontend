function RelatorioCard({ titulo, valor }) {
  return (
    <div className="col-md-4">
      <div className="card p-3 mb-3">
        <h5>{titulo}</h5>
        <p>{valor}</p>
      </div>
    </div>
  );
}

export default RelatorioCard;