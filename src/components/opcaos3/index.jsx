import "./index.scss";
import { useState } from "react";
export default function OpcaoS3() {
  const [opcaoS3, setOpcaoS3] = useState("Escolha");

  return (
    <div className="secao">
      <h1>{opcaoS3}</h1>
      <select onChange={(e) => setOpcaoS3(e.target.value)}>
        <option>Java the best</option>
        <option>JavaScript</option>
        <option>Python</option>
        <option>C++</option>
      </select>
    </div>
  );
}
