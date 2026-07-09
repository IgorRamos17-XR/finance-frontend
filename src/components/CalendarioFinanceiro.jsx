import { useState } from "react";

function CalendarioFinanceiro({ receitas, despesas, metas, formatarMoeda }) {
  const hoje = new Date();

  const [dataCalendario, setDataCalendario] = useState(
    new Date(hoje.getFullYear(), hoje.getMonth(), 1),
  );

  const anoAtual = dataCalendario.getFullYear();
  const mesAtual = dataCalendario.getMonth();

  const diasNoMes = new Date(anoAtual, mesAtual + 1, 0).getDate();
  const primeiroDiaSemana = new Date(anoAtual, mesAtual, 1).getDay();

  const dias = [
    ...Array.from({ length: primeiroDiaSemana }, () => null),
    ...Array.from({ length: diasNoMes }, (_, index) => index + 1),
  ];

  const nomeMes = dataCalendario.toLocaleDateString("pt-BR", {
    month: "long",
    year: "numeric",
  });

  const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  function mesmoDia(data, dia) {
    if (!data || !dia) return false;

    const dataTexto = data.split("T")[0];
    const [ano, mes, diaData] = dataTexto.split("-").map(Number);

    return ano === anoAtual && mes - 1 === mesAtual && diaData === dia;
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

  function mesAnterior() {
    setDataCalendario(new Date(anoAtual, mesAtual - 1, 1));
  }

  function proximoMes() {
    setDataCalendario(new Date(anoAtual, mesAtual + 1, 1));
  }

  return (
    <section className="calendario-card fade-up">
      <div className="calendario-header">
        <div className="calendario-icon">📅</div>

        <div>
          <h3>Calendário Financeiro</h3>
          <p>Visualize receitas, despesas e metas do mês selecionado.</p>
        </div>
      </div>

      <div className="calendario-mes d-flex justify-content-between align-items-center">
        <button type="button" className="btn btn-sm btn-outline-primary" onClick={mesAnterior}>
          ← Mês anterior
        </button>

        <h4>{nomeMes}</h4>

        <button type="button" className="btn btn-sm btn-outline-primary" onClick={proximoMes}>
          Próximo mês →
        </button>
      </div>

      <div className="calendario-semana">
        {diasSemana.map((dia) => (
          <span key={dia}>{dia}</span>
        ))}
      </div>

      <div className="calendario-grid">
        {dias.map((dia, index) => {
          if (!dia) {
            return <div key={`vazio-${index}`} className="calendario-dia calendario-dia-vazio"></div>;
          }

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