import "./index.scss";
import { useState } from "react";

export default function Calculos() {
  
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [res, setRes] = useState(0);
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
  return (
    <div className="comp-calculos">
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
    </div>
  );
}
