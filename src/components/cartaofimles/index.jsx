import "./index.scss";

export default function CartaoFilme(props) {
  function validarClassificacao() {
  if (props.item.classificacao == "L") {
    return;
  } else if (
    props.item.classificacao == "12" ||
    props.item.classificacao == "14"
  ) {
    return "c-14";
  }
  else if (props.item.classificacao == '16'){
    return "c-16";
  }
  else if (props.item.classificacao == '18'){
    return "c-18";
  }
  }
  return (
    <div className="comp-cartao-filme" key={props.pos}>
      <img src={props.item.capa} alt="capa" />
      <p>{props.item.nome}</p>
      <div className={"classificacao " + validarClassificacao()}>{props.item.classificacao}</div>
    </div>
  );
}
