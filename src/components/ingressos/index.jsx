import "./index.scss";
import { useState } from "react";
export default function Ingressos() {
  const [ing, setIng] = useState(0);
  const [meiaIng, setMeiaIng] = useState(false);
  const [cupom, setCupom] = useState("");
  const [totalIng, setTotalIng] = useState(0.0);

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
  );
}
