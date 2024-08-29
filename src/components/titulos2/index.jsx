import "./index.scss";
import { useState } from "react";
export default function Titulos2() {
  const [tituloS2, setTituloS2] = useState("Oi");

  return (
    <div className="secao">
      <h1>{tituloS2}</h1>
      <input
        type="text"
        value={tituloS2}
        onChange={(e) => setTituloS2(e.target.value)}
      />
    </div>
  );
}
