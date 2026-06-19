import { useContext } from "react";
import MensagemContext from "../contexts/MensagemContext";

function useMensagem() {
  return useContext(MensagemContext);
}

export default useMensagem;