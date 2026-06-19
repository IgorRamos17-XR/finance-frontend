function Dashboard({
    dashboard,
    formatarMoeda,
    inicioFiltro,
    setInicioFiltro,
    fimFiltro,
    setFimFiltro,
    buscarDashboardPorPeriodo,
    limparFiltroDashboard,
    }) {
    return (
        <>
        <div className="row text-center mb-4">
            <div className="col-md-4 mb-3">
            <div className="card p-3 shadow-sm">
                <h5>Total Receitas</h5>
                <h4 className="text-success">
                {formatarMoeda(dashboard.totalReceitas)}
                </h4>
            </div>
            </div>

            <div className="col-md-4 mb-3">
            <div className="card p-3 shadow-sm">
                <h5>Total Despesas</h5>
                <h4 className="text-danger">
                {formatarMoeda(dashboard.totalDespesas)}
                </h4>
            </div>
            </div>

            <div className="col-md-4 mb-3">
            <div className="card p-3 shadow-sm">
                <h5>Saldo</h5>
                <h4
                className={
                    dashboard.saldo >= 0 ? "text-primary" : "text-danger"
                }
                >
                {formatarMoeda(dashboard.saldo)}
                </h4>
            </div>
            </div>
        </div>

        <div className="row mb-4">
            <div className="col-md-5 mb-2">
            <input
                type="date"
                className="form-control"
                value={inicioFiltro}
                onChange={(e) => setInicioFiltro(e.target.value)}
            />
            </div>

            <div className="col-md-5 mb-2">
            <input
                type="date"
                className="form-control"
                value={fimFiltro}
                onChange={(e) => setFimFiltro(e.target.value)}
            />
            </div>

            <div className="col-md-2 mb-2">
            <button
                className="btn btn-dark w-100 mb-2"
                onClick={buscarDashboardPorPeriodo}
            >
                Filtrar
            </button>

            <button
                className="btn btn-secondary w-100"
                onClick={limparFiltroDashboard}
            >
                Limpar
            </button>
            </div>
        </div>
        </>
    );
    }

    export default Dashboard;