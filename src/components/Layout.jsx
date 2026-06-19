function Layout({ children }) {
  return (
    <div className="container container-box">
      <div className="card shadow card-custom">
        {children}
      </div>
    </div>
  );
}

export default Layout;