import "./index.scss";
import { useState } from "react";
import Cabecalho from "../../components/cabecalho";
import Contador from "../../components/contador";
import Calculos from "../../components/calculos";
import Ingressos from "../../components/ingressos";
import ListaDeMetas from "../../components/listademetascomp";
import Titulos2 from "../../components/titulos2";
import OpcaoS3 from "../../components/opcaos3";
import Titulos4 from "../../components/titulos4";
import Titulos5 from "../../components/titulos5";
export default function Varestado() {

  const [novaMeta, setNovaMeta] = useState('');
  const [listaMetas, setListaMetas] = useState([]);
  const [editando, setEditando] = useState(-1);
  
  function adicionarMeta() {
    //listaMetas.push(novaMeta);

    if (novaMeta != "") {
      if (editando == -1) {
        setListaMetas([...listaMetas, novaMeta]);
        setNovaMeta("");
      } else {
        listaMetas[editando] = novaMeta;
        setListaMetas([...listaMetas]);
        setNovaMeta("");
        setEditando(-1);
      }
    }
  }

  function teclaApertada(e) {
    if (e.key == "Enter") {
      adicionarMeta();
    }
  }

  function removerMeta(pos) {
    listaMetas.splice(pos, 1);
    setListaMetas([...listaMetas]);
  }

  function alterarMeta(pos) {
    setNovaMeta(listaMetas[pos]);
    setEditando(pos);
  }

  return (
    <div className="pagina-varestado pagina">
      <Cabecalho titulo="Variavéis de estado" />

      <div className="secao metas">
        <h1> Metas para os próximos 5 anos</h1>

        <div className="entrada">
          <input
            type="text"
            placeholder="Digite sua meta aqui"
            onKeyUp={teclaApertada}
            value={novaMeta}
            onChange={(e) => setNovaMeta(e.target.value)}
          />
          <button onClick={adicionarMeta}> Adicionar </button>
        </div>

        <ul>
          {listaMetas.map((item, pos) => (
            <ListaDeMetas 
            pos={pos}
            item={item}
            removerMeta={removerMeta}
            alterarMeta={alterarMeta}
            />
          ))}
        </ul>
      </div>
      <Ingressos />
      <Calculos />
      <Titulos2 />
      <Titulos4 />
      <Titulos5 />
      <OpcaoS3 />
      <Contador />
    </div>
  );
}
