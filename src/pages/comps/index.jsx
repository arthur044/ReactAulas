import CartaoFilme from "../../components/cartaofimles";
import "./index.scss";
import { useState } from "react";
export default function Componentes() {
  const [nomeFilme, setNomeFilme] = useState("");
  const [classificacao, setClassificacao] = useState("");
  const [urlFilme, setUrlFilme] = useState("");
  const [listaFilmes, setListaFilmes] = useState([]);
  function adicionarFilme() {
    if (nomeFilme == "" || classificacao == "" || urlFilme == "") {
      alert("Preencha todos os campos");
      return;
    }
    let novoFilme = {
      nome: nomeFilme,
      classificacao: classificacao,
      capa: urlFilme,
    };
    setListaFilmes([...listaFilmes, novoFilme]);
    setNomeFilme("");
    setClassificacao(""); 
    setUrlFilme("");
  }

  return (
    <div className="pagina-catalogo pagina">
      <div className="secao filmes">
        <h1> Catálogo de Filmes </h1>

        <div className="entradas">
          <div className="inputs">
            <input
              type="text"
              placeholder="Nome do Filme"
              value={nomeFilme}
              onChange={(e) => setNomeFilme(e.target.value)}
            />
            <input
              type="text"
              placeholder="Classificação"
              value={classificacao}
              onChange={(e) => setClassificacao(e.target.value)}
            />
            <input
              type="text"
              placeholder="URL da capa"
              value={urlFilme}
              onChange={(e) => setUrlFilme(e.target.value)}
            />
          </div>

          <button onClick={adicionarFilme}> Adicionar </button>
        </div>

        <div className="lista">
          {listaFilmes.map((item, pos) =>  (
            <CartaoFilme
            key={pos}
            item={item}/>
          ))}
        </div>
      </div>
    </div>
  );
}
