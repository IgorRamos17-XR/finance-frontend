function TituloSecao({ tipo, icone, titulo, subtitulo }) {
  return (
    <div className={`titulo-secao titulo-secao-${tipo}`}>
      <div className="titulo-secao-icone">{icone}</div>

      <div>
        <h3>{titulo}</h3>
        <p>{subtitulo}</p>
      </div>
    </div>
  );
}

export default TituloSecao;