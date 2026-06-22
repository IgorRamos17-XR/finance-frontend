import { formatarMoeda } from "../utils/formatadores";

function RelatorioCards({ dashboard }) {
  const cards = [
    {
      titulo: "Total Receitas",
      valor: formatarMoeda(dashboard.totalReceitas),
      icone: "💵",
      tipo: "receita",
    },
    {
      titulo: "Total Despesas",
      valor: formatarMoeda(dashboard.totalDespesas),
      icone: "🛒",
      tipo: "despesa",
    },
    {
      titulo: "Saldo do Período",
      valor: formatarMoeda(dashboard.saldo),
      icone: "🔁",
      tipo: "saldo",
    },
  ];

  return (
    <div className="relatorio-cards-grid">
      {cards.map((card) => (
        <div key={card.titulo} className={`relatorio-card ${card.tipo}`}>
          <div className="relatorio-card-icon">{card.icone}</div>

          <div>
            <p>{card.titulo}</p>
            <strong>{card.valor}</strong>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RelatorioCards;