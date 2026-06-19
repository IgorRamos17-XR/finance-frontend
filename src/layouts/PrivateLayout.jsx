import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";
import Header from "../components/Header";
import useAuthContext from "../hooks/useAuthContext";

function PrivateLayout() {
  const { usuario, logado } = useAuthContext();

  return (
    <>
      <Header
        mensagem=""
        tipoMensagem="success"
        logado={logado}
        usuario={usuario}
      />

      <Menu />

      <Outlet />
    </>
  );
}

export default PrivateLayout;