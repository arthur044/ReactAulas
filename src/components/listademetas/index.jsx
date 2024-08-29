import "./index.scss";
import { useState } from "react";
export default function ListaDeMetas() {
  
  const [novameta, setNovameta] = useState("");
  const [listaMetas, setListaMetas] = useState([]);
  const [editando, setEditando] = useState(-1)
  function alterarMeta(pos){
    setNovameta(listaMetas[pos])
    setEditando(pos)
  }
  function adicionarMeta() {
    if (novameta != "") {
      if(editando == -1) {
      setListaMetas([...listaMetas, novameta]);
      setNovameta("");
    } else {
      // lista vai receber a novameta na posição que esta sendo editada
      listaMetas[editando] = nov-ameta
      // clona a lista editada
      setListaMetas([...listaMetas])
      // zera o input
      setNovameta('')
      setEditando(-1)
      //coloca o editando para falso denovo
    }
    }
  }
  function enterAdd(e) {
    let novoValor = e.key;
    if (novoValor == "Enter") {
      adicionarMeta();
    }
  }
  function removerItens(pos){
    listaMetas.splice(pos,1)
    setListaMetas([...listaMetas])
  }

  return (
    <div className="secao metas">
      <h1>the future</h1>
      <input
        type="text"
        value={novameta}
        placeholder="Digite a meta aqui"
        onKeyUp={enterAdd}
        onChange={(e) => setNovameta(e.target.value)}
      />
      <button onClick={adicionarMeta}>Adicionar</button>
      <ul>
        {listaMetas.map((item, pos) => (
          <li key={pos}>
            <i onClick={() => removerItens(pos)}>remo</i> &nbsp;
            <i onClick={() => alterarMeta(pos)} className="fa-solid fa-trash">
              edit
            </i>{" "}
            &nbsp;
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
