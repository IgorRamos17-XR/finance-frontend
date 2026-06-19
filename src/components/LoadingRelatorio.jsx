function LoadingRelatorio({ carregando }) {
  if (!carregando) {
    return null;
  }

  return (
    <p className="text-muted">
      Carregando relatório...
    </p>
  );
}

export default LoadingRelatorio;