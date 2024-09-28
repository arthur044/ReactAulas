import { useState } from "react";
import "./index.scss";
import Cabecalho from "../../components/cabecalho";
export default function Prova() {
  const [titulo, setTitulo] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [feito, setFeito] = useState("");
  const [listaAfazeres, setListaAfazeres] = useState([]);
  function adicionarAfazeres() {
    let novoAfazer = {
      titulo: titulo,
      periodo: periodo,
      feito: feito,
    };
    setListaAfazeres([...listaAfazeres, novoAfazer]);
    setTitulo("");
    setPeriodo("");
    setFeito("");
  }

  return (
    <div className="pagina-prova pagina">
      <Cabecalho titulo="Prova" />
      <div className="secao insercao">
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Titulo"
        />
        <input
          type="text"
          placeholder="Periodo"
          value={periodo}
          onChange={(e) => setPeriodo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Feito"
          value={feito}
          onChange={(e) => setFeito(e.target.value)}
        />
        <button onClick={adicionarAfazeres}>Adicionar afazeres</button>
      </div>
      <div className="secao resposta">
        {listaAfazeres.map((item, pos) => (
          <div className="secao" key={pos}>
            <h1>{item.titulo}</h1>
            <h2>{item.periodo}</h2>
            <h3>{item.feito}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
