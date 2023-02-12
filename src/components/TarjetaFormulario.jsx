

import Formulario from "./Formulario";

const TarjetaFormulario = ({ EscribirTweet }) => { 

  return (

    <div className="card card mx-3 border-dark">
      <div className="card-header text-center bg-dark text-white">
        <h2 className="card-title">Ingresar información</h2>
      </div>
      <Formulario EscribirTweet={EscribirTweet} />
    </div>

  );

}


/*class TarjetaFormulario2 extends React.Component {
  render(){
    return
  }
}*/
export default TarjetaFormulario;
