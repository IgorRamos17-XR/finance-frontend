import { useEffect, useState } from "react";

function useTema() {
  const [temaEscuro, setTemaEscuro] = useState(() => {
  return localStorage.getItem("tema") === "escuro";
});

  useEffect(() => {
    if (temaEscuro) {
      document.body.classList.add("bg-dark", "text-light");
      localStorage.setItem("tema", "escuro");
    } else {
      document.body.classList.remove("bg-dark", "text-light");
      localStorage.setItem("tema", "claro");
    }
  }, [temaEscuro]);

  function alternarTema() {
    setTemaEscuro((valorAtual) => !valorAtual);
  }

  return {
    temaEscuro,
    alternarTema,
  };
}

export default useTema;
