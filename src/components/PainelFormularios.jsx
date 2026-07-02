import ReceitaForm from "./forms/ReceitaForm";
import DespesaForm from "./forms/DespesaForm";
import MetaForm from "./forms/MetaForm";
import FormulariosFinanceiros from "./FormulariosFinanceiros";

function PainelFormularios({
  receitaProps,
  despesaProps,
  metaProps,
}) {
  return (
    <FormulariosFinanceiros
      receitaForm={<ReceitaForm {...receitaProps} />}
      despesaForm={<DespesaForm {...despesaProps} />}
      metaForm={<MetaForm {...metaProps} />}
    />
  );
}

export default PainelFormularios;