import "./index.scss";
import { useState } from "react";
export default function Titulos5() {
  const [tituloS5, setTituloS5] = useState("oi");
  const [descricaoS5, setDescricaoS5] = useState("");

  return (
    <div className="secao">
    <h1>{tituloS5}</h1>
    <input
      type="text"
      value={descricaoS5}
      onChange={(e) => setDescricaoS5(e.target.value)}
    />
    <button onClick={() => setTituloS5(descricaoS5)}>Alterar</button>
  </div>
  )
}