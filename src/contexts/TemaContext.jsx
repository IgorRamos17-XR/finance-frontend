import { createContext } from "react";
import useTema from "../hooks/useTema";

const TemaContext = createContext();

export function TemaProvider({ children }) {
  const tema = useTema();

  return (
    <TemaContext.Provider value={tema}>
      {children}
    </TemaContext.Provider>
  );
}

export default TemaContext;