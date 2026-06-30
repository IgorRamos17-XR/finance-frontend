import { FiFileText, FiTrendingUp } from "react-icons/fi";
import { FaMoneyBillWave } from "react-icons/fa";

function ResumoLista({ tipo, totalItens, valorTotal, maiorValor, cor }) {
  const ehReceita = tipo === "receita";

  return (
    <div
      className={
        ehReceita
          ? "resumo-lista-premium resumo-receita-premium"
          : "resumo-lista-premium resumo-despesa-premium"
      }
    >
      <div className="resumo-lista-premium-header">
        <div className="resumo-lista-premium-icone">
          {ehReceita ? "💵" : "🛒"}
        </div>

        <div>
          <h4>Resumo Financeiro</h4>
          <p>{ehReceita ? "Visão geral das receitas" : "Visão geral das despesas"}</p>
        </div>
      </div>

      <div className="resumo-lista-premium-grid">
        <div className="resumo-lista-premium-item">
          <FiFileText size={24} />
          <span>Total</span>
          <strong>{totalItens}</strong>
        </div>

        <div className="resumo-lista-premium-item">
          <FaMoneyBillWave size={24} />
          <span>Acumulado</span>
          <strong className={cor}>{valorTotal}</strong>
        </div>

        <div className="resumo-lista-premium-item">
          <FiTrendingUp size={24} />
          <span>{ehReceita ? "Maior receita" : "Maior despesa"}</span>
          <strong>{maiorValor}</strong>
        </div>
      </div>
    </div>
  );
}

export default ResumoLista;