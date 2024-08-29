import "./index.scss";
import { useState } from "react";
import Cabecalho from "../../components/cabecalho";
import Contador from "../../components/contador";
import Calculos from "../../components/calculos";
import Ingressos from "../../components/ingressos";
import ListaDeMetas from "../../components/listademetas";
import Titulos2 from "../../components/titulos2";
import OpcaoS3 from "../../components/opcaos3";
import Titulos4 from "../../components/titulos4";
import Titulos5 from "../../components/titulos5";
export default function Varestado() {
  return (
    <div className="pagina-varestado pagina">
      <Cabecalho titulo="Variavéis de estado" />
      <ListaDeMetas />
      <Ingressos />
      <Calculos />
      <Titulos2 />
      <Titulos4 />
      <Titulos5 />
      <OpcaoS3 />
      <Contador />
    </div>
  );
}
