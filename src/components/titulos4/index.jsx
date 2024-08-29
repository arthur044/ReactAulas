import './index.scss'
import { useState } from 'react'
export default function Titulos4() {
  const [tituloS4, setTituloS4] = useState(false);

  return (
    <div className="secao">
    <h1>programar eh lindezinha ? {tituloS4 ? "sim" : "não"}</h1>
    <input
      type="checkbox"
      checked={tituloS4}
      onChange={(e) => setTituloS4(e.target.checked)}
    />
    programar é lindezinha ?
  </div>
  )

}