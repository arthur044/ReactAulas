  import "./index.scss";
import { useState } from "react";
import { lerNum } from "../../utils/replace.js";
export default function Varestado() {
  const [contador, setContador] = useState(0);
  const [tituloS2, setTituloS2] = useState("Oi");
  const [opcaoS3, setOpcaoS3] = useState("Escolha");
  const [tituloS4, setTituloS4] = useState(false);
  const [tituloS5, setTituloS5] = useState("oi");
  const [descricaoS5, setDescricaoS5] = useState("");

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [res, setRes] = useState(0);

  const [ing, setIng] = useState(0);
  const [meiaIng, setMeiaIng] = useState(false);
  const [cupom, setCupom] = useState("");
  const [totalIng, setTotalIng] = useState(0.0);

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
  function somar() {
    setContador(contador + 1);
  }
  function subtrair() {
    setContador(contador - 1);
  }
  function calcSoma() {
    let soma = Number(num1) + Number(num2);
    setRes(soma);
  }
  function calcSubtrair() {
    let subtrair = Number(num1) - Number(num2);
    setRes(subtrair);
  }
  function limpar() {
    setNum1(0);
    setRes(0);
    setNum2(0);
  }
  function divisao() {
    let divisao = Number(num1) / Number(num2);
    setRes(divisao);
  }
  function calcularIngressos() {
    let tot = 0;
    if (meiaIng == true) {
      tot = ing * 15.0;
    } else {
      tot = ing * 30.0;
    }
    if (cupom == "quero100") {
      let desc = tot * 0.1;
      tot = tot - desc;
    }
    setTotalIng(tot);
  }
  return (
    <div className="pagina-varestado pagina">
      <header className="cabecalho">
        <h1>Variavéis de estado</h1>
      </header>
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
              <i onClick={() =>  removerItens(pos)}>remo</i> &nbsp;
              <i onClick={() => alterarMeta(pos)} className="fa-solid fa-trash">edit</i> &nbsp;
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="secao ingressos">
        <h1>Ingressos</h1>
        <div className="ing">
          <div>
            <label>Quantidade: </label>
            <input type="text" onChange={(e) => setIng(e.target.value)} />
          </div>
          <div>
            <label>Meia entrada: </label>
            <input
              type="checkbox"
              onChange={(e) => setMeiaIng(e.target.checked)}
            />
          </div>
          <div>
            <label>Cupom: </label>
            <input type="text" onChange={(e) => setCupom(e.target.value)} />
          </div>
          <div>
            <label> &nbsp; </label>
            <button onClick={calcularIngressos}>Calcular</button>
          </div>
          <div className="res">O total é R$ {totalIng}</div>
        </div>
      </div>

      <div className="secao calculadora">
        <div className="entrada">
          <input
            type="text"
            id="num1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
          <input
            type="text"
            id="num2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
          <div className="res">{res}</div>
        </div>
        <div className="calculos">
          <button onClick={calcSoma}>Somar</button>
          <button onClick={calcSubtrair}> Subtrair </button>
          <button onClick={divisao}> Dividir </button>
          <button id="limpar" onClick={limpar}>
            {" "}
            Limpar{" "}
          </button>
        </div>
      </div>
      <section className="secao">
        <h1>Contador</h1>
        <div className="testes">
          <button onClick={somar}> + </button>
          {contador}
          <button onClick={subtrair}> - </button>
        </div>
      </section>
      <div className="secao">
        <h1>{tituloS2}</h1>
        <input
          type="text"
          value={tituloS2}
          onChange={(e) => setTituloS2(e.target.value)}
        />
      </div>
      <div className="secao">
        <h1>{opcaoS3}</h1>
        <select onChange={(e) => setOpcaoS3(e.target.value)}>
          <option>Java the best</option>
          <option>JavaScript</option>
          <option>Python</option>
          <option>C++</option>
        </select>
      </div>
      <div className="secao">
        <h1>programar eh lindezinha ? {tituloS4 ? "sim" : "não"}</h1>
        <input
          type="checkbox"
          checked={tituloS4}
          onChange={(e) => setTituloS4(e.target.checked)}
        />
        programar é lindezinha ?
      </div>
      <div className="secao">
        <h1>{tituloS5}</h1>
        <input
          type="text"
          value={descricaoS5}
          onChange={(e) => setDescricaoS5(e.target.value)}
        />
        <button onClick={() => setTituloS5(descricaoS5)}>Alterar</button>
      </div>
    </div>
  );
}
