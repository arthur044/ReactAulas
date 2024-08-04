import "./index.scss";
export default function Eventos() {
  function  clicarComMouse() {
    alert('valor alterado ! ! ! ')
  }
  function mouseMove(e){
    let novoValor = e.target.value
     alert('o valor foi modificadooooo ! ! ! ' + novoValor)
  }
  function valorChecked(e){
    let ajksdha = e.target.value
    let novoValor = e.target.checked
    alert('ó mudou pra ' + novoValor)
  }

  return (
    <div className="pagina-eventos pagina">
      <header className="cabecalho">
        <h1> ReactJS | Eventos </h1>
        <section className="secao">
          <h1>Entendendo Eventos</h1>
          <p onClick={clicarComMouse}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut
            dolore consequatur vitae, possimus sint sapiente doloribus! Fugiat
            quidem consectetur, commodi nesciunt delectus accusamus, aliquid
            debitis corporis, architecto minus praesentium.
          </p>
          <input type="text" placeholder="digite aqui" />
          <select onChange={mouseMove}>
            <option>Seleciona</option>
            <option>item A</option>
            <option>item B</option>
          </select>
          <div className="grupo">

            <input type="checkbox" /> item 2
            <input type="checkbox" /> item 2
          </div>
          <div className="grupo">
            <div>
              <input type="radio" name='gpo' onChange={valorChecked} /> opcao 1
            </div>
            <div>
              <input type="radio" name='gpo'  onChange={valorChecked} /> opcao 2
            </div>
          </div>
          <button>Clique aqui</button>
        </section>
      </header>
    </div>
  );
}
