import React from "react";
import { useState } from "react";
import Cabecalho from "../../components/cabecalho";
export default function ListaDeMetasTreino() {
  return (
    <div className="pagina-treino-listaMetas pagina">
      <Cabecalho titulo="Lista de metas // treino" />
      <div className="secao">
        <h1>Treino lista de metas</h1>
        <div className="form">
          <input type="text" placeholder="digite aqui sua meta" />
          <button>Adicionar meta</button>
        </div>
        <div className="res">res</div>
      </div>
    </div>
  );
}
