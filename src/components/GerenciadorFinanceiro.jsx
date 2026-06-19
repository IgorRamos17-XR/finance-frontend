import Separador from "./Separador";

function GerenciadorFinanceiro({
  formularios,
  listas,
}) {
  return (
    <>
      <Separador />

      {formularios}

      <Separador />

      {listas}
    </>
  );
}

export default GerenciadorFinanceiro;