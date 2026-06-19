import { useContext } from "react";
import TemaContext from "../contexts/TemaContext";

function useTemaContext() {
  return useContext(TemaContext);
}

export default useTemaContext;