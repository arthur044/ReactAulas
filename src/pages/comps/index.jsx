import CartaoFilme from "../../components/cartaofimles";
import "./index.scss";
import { useState, useEffect } from "react";
export default function Componentes() {
  const [nomeFilme, setNomeFilme] = useState("");
  const [classificacao, setClassificacao] = useState("");
  const [urlFilme, setUrlFilme] = useState("");
  const [listaFilmes, setListaFilmes] = useState([]);
  const [estreia, setEstreia] = useState("");
  const [destaque, setDestaque] = useState(false)
  const [sit, setSit] = useState('')
  
  function adicionarFilme() {
    if (nomeFilme == "" || classificacao == "" || urlFilme == "") {
      alert("Preencha todos os campos");
      return;
    }
    let novoFilme = {
      nome: nomeFilme,
      classificacao: classificacao,
      capa: urlFilme,
      estreia: estreia,
      destaque: destaque
    };
    setListaFilmes([...listaFilmes, novoFilme]);
    setNomeFilme("");
    setClassificacao(""); 
    setUrlFilme("");
  }

  function avaliarSituacao(){
    
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
            <input type="text" placeholder="Estreia" value={estreia} onChange={(e) => setEstreia(e.target.value)} />
            <div>
              <input type="checkbox" checked={destaque} onChange={(e) => setDestaque(e.target.checked)} />
              <label> Destaque </label>
            </div>
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
      <div className="secao aluno">
            <h1> Aluno </h1>
          <div className="entradas">
            Situação: <input type="text" value={sit} onChange={(e) => setSit(e.target.value)} />
          </div>
      </div>
    </div>
  );
}
