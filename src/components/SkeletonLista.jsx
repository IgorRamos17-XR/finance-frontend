function SkeletonLista() {
  return (
    <div className="skeleton-lista-card">
      <div className="skeleton skeleton-line skeleton-line-title"></div>
      <div className="skeleton skeleton-input mb-3"></div>
      <div className="skeleton skeleton-line skeleton-line-md"></div>
      <div className="skeleton skeleton-input mb-4"></div>

      {[1, 2, 3].map((item) => (
        <div key={item} className="skeleton-lista-item">
          <div className="skeleton skeleton-line skeleton-line-lg"></div>
          <div className="skeleton skeleton-line skeleton-line-md"></div>
          <div className="skeleton skeleton-line skeleton-line-sm"></div>

          <div className="skeleton-lista-botoes">
            <div className="skeleton skeleton-button"></div>
            <div className="skeleton skeleton-button"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkeletonLista;
