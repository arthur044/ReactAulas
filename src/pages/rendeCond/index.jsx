import "./index.scss";
import { useState } from "react";
import Cabecalho from "../../components/cabecalho";
export default function RenderizacaoCondicional() {
  const [exibir, setExibir] = useState(false);
  function abrirEfechar() {
    setExibir(!exibir);
  }
  return (
    <div className="pagina-rende-cond pagina">
      <Cabecalho titulo="Renderização Condicional" />
      <div className="secao">
        <h1>Biscoito da sorte</h1>
        <button onClick={abrirEfechar}>
          {exibir == true ? "fechar" : "abrir"}
        </button>
        {exibir == true && (
          <p className="msg-biscoito">
            "As vezes vai ter gente melhor que voce, ai voce vai la e se esforça
            pra ser melhor que todo mundo."
          </p>
        )}
      </div>
      
    </div>
  );
}
