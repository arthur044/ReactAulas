import "./index.scss";
import { useState } from "react";
export default function contador() {
  const [contador, setContador] = useState(0);
  function somar() {
    setContador(contador + 1);
  }
  function subtrair() {
    setContador(contador - 1);
  }
  return (
    <div className="comp-contador">
      <section className="secao">
        <h1>Contador</h1>
        <div className="testes">
          <button onClick={somar}> + </button>
          <p className="res">{contador}</p>
          <button onClick={subtrair}> - </button>
        </div>
      </section>
    </div>
  );
}
