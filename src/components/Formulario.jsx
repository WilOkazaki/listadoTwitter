
import { useState } from "react";

const Formulario = ({ EscribirTweet }) => {

  const [user, setUser] = useState("");
  const [tweet, setTweet] = useState("");
  const [errMsg, setErrMsg] = useState(false);

  // aqui validamos los datos del formulario para crear un tweet 
  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.trim() == "" || tweet.trim() == "") {
      setErrMsg(true);
      return;
    }

    setErrMsg(false);

    const data = {
      id: new Date().getTime(),
      user,
      favorito: false,
      tweet,
      
    };

    EscribirTweet(data);

    setUser("");
    setTweet("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="card-body ">
        <div className="mb-3">
          <div className="form-floating">
            <input
              type="text"
              className={
                errMsg && user.trim() == ""
                  ? "form-control mb-3 is-invalid"
                  : "form-control mb-3"
              }
              id="user"
              placeholder="user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <label htmlFor="user">Usuario</label>
          </div>
          <div className="form-floating">
            <textarea
              className={
                errMsg && tweet.trim() == ""
                  ? "form-control is-invalid"
                  : "form-control"
              }
              style={{height: '90px', minHeight: '40px'}}
              id="tweet"
              placeholder="Tweet"
              value={tweet}
              onChange={(e) => setTweet(e.target.value)}
            ></textarea>
            <label htmlFor="tweet">Porfavor escriba su tweet</label>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="row">
          <div className="col">
            <button type="submit" className="btn btn-success w-90 mx-2">
              Tweet
            </button>
          </div>
          <div className="col">
            <button
              type="reset"
              className="btn btn-danger w-90 mx-2"
              onClick={() => {
                setUser("");
                setTweet("");
              }}
            >
              Borrar
            </button>
          </div>
        </div>
        {errMsg ? (
          <div className="alert alert-danger mt-3" role="alert">
            Porfavor debe rellenar todos los campos
          </div>
        ) : (
          ""
        )}
      </div>
    </form>
  );

}

export default Formulario;
