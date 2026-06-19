function CarregandoDados({ carregando }) {
  if (!carregando) {
    return null;
  }

  return <p className="text-center text-muted">Carregando dados...</p>;
}

export default CarregandoDados;
