import "./index.scss";
import {FaStar} from 'react-icons/fa'
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
      {props.item.estreia &&
      <div className="estreia">
        {props.item.destaque == true &&
          <FaStar style={{color: "gold", fontSize: "20px"}} />
        }
          Estreia {props.item.estreia}
      </div>
      }
      <p>{props.item.nome}</p>
      <div className={"classificacao " + validarClassificacao()}>{props.item.classificacao}</div>
    </div>
  );
}
