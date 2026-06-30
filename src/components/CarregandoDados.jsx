function CarregandoDados({ carregando }) {
  if (!carregando) {
    return null;
  }

  return (
    <section className="skeleton-area">
      <div className="skeleton-cards-grid">
        <div className="skeleton-card">
          <div className="skeleton skeleton-icon"></div>
          <div className="skeleton-content">
            <div className="skeleton skeleton-line skeleton-line-sm"></div>
            <div className="skeleton skeleton-line skeleton-line-lg"></div>
            <div className="skeleton skeleton-line skeleton-line-md"></div>
          </div>
        </div>

        <div className="skeleton-card">
          <div className="skeleton skeleton-icon"></div>
          <div className="skeleton-content">
            <div className="skeleton skeleton-line skeleton-line-sm"></div>
            <div className="skeleton skeleton-line skeleton-line-lg"></div>
            <div className="skeleton skeleton-line skeleton-line-md"></div>
          </div>
        </div>

        <div className="skeleton-card">
          <div className="skeleton skeleton-icon"></div>
          <div className="skeleton-content">
            <div className="skeleton skeleton-line skeleton-line-sm"></div>
            <div className="skeleton skeleton-line skeleton-line-lg"></div>
            <div className="skeleton skeleton-line skeleton-line-md"></div>
          </div>
        </div>
      </div>

      <div className="skeleton-filter-card">
        <div>
          <div className="skeleton skeleton-line skeleton-line-title"></div>
          <div className="skeleton skeleton-line skeleton-line-md"></div>
        </div>

        <div className="skeleton-filter-grid">
          <div className="skeleton skeleton-input"></div>
          <div className="skeleton skeleton-input"></div>
          <div className="skeleton skeleton-button"></div>
        </div>
      </div>

      <div className="skeleton-chart-grid">
        <div className="skeleton-chart-card">
          <div className="skeleton skeleton-line skeleton-line-title"></div>
          <div className="skeleton skeleton-line skeleton-line-md"></div>
          <div className="skeleton skeleton-chart"></div>
        </div>

        <div className="skeleton-chart-card">
          <div className="skeleton skeleton-line skeleton-line-title"></div>
          <div className="skeleton skeleton-line skeleton-line-md"></div>
          <div className="skeleton skeleton-chart"></div>
        </div>
      </div>
    </section>
  );
}

export default CarregandoDados;