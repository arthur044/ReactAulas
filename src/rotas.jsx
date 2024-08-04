import App from './pages/app/index'
import Contato from './pages/contato/index'
import NotFound from './pages/notFound/index'
import Eventos from './pages/eventos';
import Varestado from './pages/varEstado'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Navegacao() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path='/varEstado' element={<Varestado />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )

}