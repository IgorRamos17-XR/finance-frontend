import useConfirm from "../hooks/useConfirm";


function BotaoSair({ sair }) {
  const { confirmar } = useConfirm();

  function handleSair() {
    confirmar({
      titulo: "Sair",
      mensagem: "Tem certeza que deseja sair?",
      textoConfirmar: "Sair",
      aoConfirmar: sair
    });
  }

  return (
    <button onClick={handleSair} className="btn btn-danger mb-4">
      Sair
    </button>
  );
}

export default BotaoSair;