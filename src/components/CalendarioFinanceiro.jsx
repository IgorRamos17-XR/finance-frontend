function CalendarioFinanceiro({
  receitas,
  despesas,
  metas,
  formatarMoeda,
}) {
  const hoje = new Date();
  const anoAtual = hoje.getFullYear();
  const mesAtual = hoje.getMonth();

  const diasNoMes = new Date(anoAtual, mesAtual + 1, 0).getDate();

  const dias = Array.from({ length: diasNoMes }, (_, index) => index + 1);

  function mesmoDia(data, dia) {
    const dataConvertida = new Date(data);

    return (
      dataConvertida.getFullYear() === anoAtual &&
      dataConvertida.getMonth() === mesAtual &&
      dataConvertida.getDate() === dia
    );
  }

  function eventosDoDia(dia) {
    const receitasDia = receitas
      .filter((receita) => mesmoDia(receita.data, dia))
      .map((receita) => ({
        id: `receita-${receita.id}`,
        tipo: "receita",
        icone: receita.recorrente ? "🔁💵" : "💵",
        texto: receita.descricao,
        valor: receita.valor,
      }));

    const despesasDia = despesas
      .filter((despesa) => mesmoDia(despesa.data, dia))
      .map((despesa) => ({
        id: `despesa-${despesa.id}`,
        tipo: "despesa",
        icone: despesa.recorrente ? "🔁🛒" : "🛒",
        texto: despesa.descricao,
        valor: despesa.valor,
      }));

    const metasDia = metas
      .filter((meta) => mesmoDia(meta.dataLimite, dia))
      .map((meta) => ({
        id: `meta-${meta.id}`,
        tipo: "meta",
        icone: "🎯",
        texto: meta.descricao,
        valor: meta.valorObjetivo,
      }));

    return [...receitasDia, ...despesasDia, ...metasDia];
  }

  return (
    <section className="calendario-card fade-up">
      <div className="calendario-header">
        <div className="calendario-icon">📅</div>

        <div>
          <h3>Calendário Financeiro</h3>
          <p>Visualize receitas, despesas e metas do mês atual.</p>
        </div>
      </div>

      <div className="calendario-grid">
        {dias.map((dia) => {
          const eventos = eventosDoDia(dia);

          return (
            <div
              key={dia}
              className={
                eventos.length > 0
                  ? "calendario-dia calendario-dia-com-evento"
                  : "calendario-dia"
              }
            >
              <strong>{dia}</strong>

              <div className="calendario-eventos">
                {eventos.map((evento) => (
                  <div
                    key={evento.id}
                    className={`calendario-evento calendario-evento-${evento.tipo}`}
                  >
                    <span>{evento.icone}</span>
                    <small>{evento.texto}</small>
                    <em>{formatarMoeda(evento.valor)}</em>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CalendarioFinanceiro;