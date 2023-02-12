
import "./App.css";
import { useState, useEffect } from "react";
import TarjetaFormulario from "./components/TarjetaFormulario";
import ListaTweets from "./components/ListaTweets";

function App() {
  //Almacen donde listamos lo tweets, y hacemos verificacion de los mensajes
  const [listaTweets, setListaTweets] = useState([]);
  const [mensaje, setMensaje] = useState({
    estatus: false,
    msg: "",
    clase: "",
  });

  // Recibimiento de los Datos y los anexa a la lista de tweets
  const EscribirTweet = (tweet) => {
    setListaTweets([...listaTweets, tweet]);
    // muestra un mensaje
    setMensaje({
      estatus: true,
      msg: "Tweet creado con exito",
      clase: "alert alert-info",
    });
    // elimina el mensaje 
    setTimeout(() => {
      setMensaje({
        estatus: false,
        msg: "",
        clase: "",
      });
    }, 3000);
  };

  //marca o desmarca como favorito
  const Favorito = (tweet) => {
    setListaTweets(
      listaTweets.map((t) =>
        t.id == tweet.id ? { ...t, favorito: !t.favorito } : t
      )
    );
  };

  // funcion que elimina un tweet de la lista, recibe el id del tweet desde el componente y confirma eliminar tweet
  const BorrarTweet = (id) => {
    const confirmar = confirm("Desea eliminar el Tweet?");
    
    if (confirmar) {
      setListaTweets(listaTweets.filter((t) => t.id != id));

      setMensaje({
        estatus: true,
        msg: "Se eliminó el tweet con exito",
        clase: "alert alert-danger",
      });
      setTimeout(() => {
        setMensaje({
          estatus: false,
          msg: "",
          clase: "",
        });
      }, 3000);
    }
  };

  // datos en el local storage para luego añadirlos
  useEffect(() => {
    let data = localStorage.getItem("tweets");
    if (data) {
      setListaTweets(JSON.parse(data));
    }
  }, []);

  // cambios en la variable para actualizar el local storage
  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(listaTweets));
  }, [listaTweets]);

  return (

      <div className="container ">
        <header className="my-3 text-center text-success">
          
          <img src="src/LOGO-RIF-1.png"></img>

        <section>
          
        </section>

          <h1>Listado de Twitter</h1>
        
        </header>

        <section>
          
        </section>

        <div className="bg-secondary-subtle">
      {mensaje.estatus ? (
        <div className={mensaje.clase} role="alert">
          {mensaje.msg}
        </div>
      ) : (
        ""
      )}

        <div className="row my-3">

          <div className="col-10 col-sm-10 col-md-6 col-lg-8 mb-5">
            {listaTweets.length < 1 ? (
              <div className="alert alert-info mx-3" role="alert">
                NO tiene tweets registrados
              </div>
            ) : (
              <ListaTweets
                listaTweets={listaTweets}
                Favorito={Favorito}
                BorrarTweet={BorrarTweet}
              />
            )}
          </div>

          <div className="col-10 col-sm-10 col-md-6 col-lg-4 mb-5">
            <TarjetaFormulario EscribirTweet={EscribirTweet} />
          </div>

        </div>

      </div>
    </div>

  );
}

export default App;
