import ReceitasLista from "./listas/ReceitasLista";
import DespesasLista from "./listas/DespesasLista";
import MetasLista from "./listas/MetasLista";
import ListasFinanceiras from "./ListasFinanceiras";

function PainelListas({
  carregando,
  receitasProps,
  despesasProps,
  metasProps,
}) {
  return (
    <ListasFinanceiras
      carregando={carregando}
      receitasLista={<ReceitasLista {...receitasProps} />}
      despesasLista={<DespesasLista {...despesasProps} />}
      metasLista={<MetasLista {...metasProps} />}
    />
  );
}

export default PainelListas;