import "./index.scss";
import { useState } from "react";
export default function ListaDeMetas(props) {
  return (
    <li key={props.pos}>
      <i onClick={() => props.removerItens(props.pos)}>remo</i> &nbsp;
      <i onClick={() => props.alterarMeta(props.pos)} className="fa-solid fa-trash">
        edit
      </i>{" "}
      &nbsp;
      {props.item}
    </li>
  );
}
