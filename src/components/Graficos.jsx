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
    LineElement
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
        <>
        {temDadosResumo ? (
            <div className="mb-4">
            <h4 className="mb-3">Resumo Financeiro</h4>

            <Bar
                data={dadosGraficoResumo}
                options={opcoesGraficoResumo}
            />
            </div>
        ) : (
            <p className="text-muted">
            Nenhum dado financeiro encontrado para exibir no gráfico.
            </p>
        )}

        {datasMovimentacoes.length > 0 && (
            <div className="mb-4">
            <h4 className="mb-3">
                Evolução Financeira
            </h4>

            <Line
                data={dadosGraficoEvolucao}
                options={opcoesGraficoEvolucao}
            />
            </div>
        )}

        <h4 className="mb-3">Despesas por Categoria</h4>

        {Array.isArray(despesasPorCategoria) &&
            despesasPorCategoria.length > 0 && (
            <div className="mb-4">
                <Pie
                data={dadosGraficoCategorias}
                options={opcoesGraficoCategorias}
                />
            </div>
            )}

        {Array.isArray(despesasPorCategoria) &&
            despesasPorCategoria.length === 0 && (
            <p className="text-muted">
                Nenhuma categoria de despesa encontrada.
            </p>
            )}

        {Array.isArray(despesasPorCategoria) &&
            despesasPorCategoria.map((item) => (
            <div key={item.categoria} className="receita-item">
                <strong>{item.categoria}</strong>
                <p>{formatarMoeda(item.total)}</p>
            </div>
            ))}
        </>
    );
    }

    export default Graficos;