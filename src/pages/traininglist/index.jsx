import "./index.scss";
import Cabecalho from "../../components/cabecalho";
import { useState } from "react";

export default function TrainingList() {
  const [numero, setNumero] = useState(0);
  const [tabuada, setTabuada] = useState([]);
  function calcularTabuada() {
    let tabuada = [];
    for (let i = 0; i <= 10; i++) {
      let resultado = i * numero;
      let tabuadaText = `o resultado de ${i} * ${numero} eh ${i * numero}`;
      // separar a conta do texto e juntar os dois
      // depois puxar pra exibir o texto
      tabuada.push(tabuadaText);
    }
    setTabuada(tabuada);
  }
  return (
    <div className="pagina-treino pagina">
      <Cabecalho titulo="Treino de listas" />
      <div className="secao">
        <h1>Treino de listas</h1>
        <h2 id="h2"> &nbsp; Numero: {numero}</h2>
        <input
          type="text"
          placeholder="Digite um numero "
          onChange={(e) => setNumero(e.target.value)}
        />
        <br />
        <button onClick={calcularTabuada}>Tabuada</button>
        <div className="res">
          <ul>
          {tabuada.map((item, index) => (
              <li key={index}>
                {item}
                </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
