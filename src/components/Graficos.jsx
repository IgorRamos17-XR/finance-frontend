import { Pie, Bar, Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement
);

function Graficos({
  temDadosResumo,
  dadosGraficoResumo,
  opcoesGraficoResumo,
  datasMovimentacoes,
  dadosGraficoEvolucao,
  opcoesGraficoEvolucao,
  despesasPorCategoria,
  dadosGraficoCategorias,
  opcoesGraficoCategorias,
  formatarMoeda,
}) {
  return (
    <section className="graficos-section fade-up">
      <h3 className="graficos-titulo">Análises Financeiras</h3>

      <div className="graficos-grid">
        <div className="grafico-card scale-in">
          <h4>Resumo Financeiro</h4>
          <p className="grafico-subtitulo">
            Total de receitas, despesas e saldo
          </p>

          {temDadosResumo ? (
            <div className="grafico-container">
              <Bar data={dadosGraficoResumo} options={opcoesGraficoResumo} />
            </div>
          ) : (
            <p className="text-muted">
              Nenhum dado financeiro encontrado para exibir no gráfico.
            </p>
          )}
        </div>

        <div className="grafico-card scale-in">
          <h4>Evolução Financeira</h4>
          <p className="grafico-subtitulo">
            Receitas e despesas ao longo do tempo
          </p>

          {datasMovimentacoes.length > 0 ? (
            <div className="grafico-container">
              <Line
                data={dadosGraficoEvolucao}
                options={opcoesGraficoEvolucao}
              />
            </div>
          ) : (
            <p className="text-muted">
              Nenhuma movimentação encontrada para exibir no gráfico.
            </p>
          )}
        </div>

        <div className="grafico-card grafico-card-pizza scale-in">
          <h4>Despesas por Categoria</h4>
          <p className="grafico-subtitulo">
            Distribuição das despesas por categoria
          </p>

          {Array.isArray(despesasPorCategoria) &&
          despesasPorCategoria.length > 0 ? (
            <div className="grafico-pizza-layout">
              <div className="grafico-pizza-container">
                <Pie
                  data={dadosGraficoCategorias}
                  options={opcoesGraficoCategorias}
                />
              </div>

              <div className="grafico-legenda-custom">
                {despesasPorCategoria.map((item, index) => {
                  const cores = dadosGraficoCategorias.datasets[0].backgroundColor;
                  const cor = cores[index % cores.length];

                  return (
                    <div key={item.categoria} className="legenda-item">
                      <span
                        className="legenda-cor"
                        style={{ backgroundColor: cor }}
                      ></span>

                      <div>
                        <strong>{item.categoria}</strong>
                        <p>{formatarMoeda(item.total)}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <p className="text-muted">
              Nenhuma categoria de despesa encontrada.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Graficos;