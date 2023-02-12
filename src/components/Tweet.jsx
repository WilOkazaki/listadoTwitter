
const Tweet = ({ tweet, Favorito, BorrarTweet }) => {

  return (

    <div>
      <div className="card mx-3 mb-4 border-dark">
        <div className="card-header text-success">
          <h3 className="card-title">{tweet.user}</h3>
        </div>
        <div className="card-body ">
          <p className="card-text">{tweet.tweet}</p>
        </div>
        <div className="card-footer text-end">
          <button
            type="button" 
            className={
              tweet.favorito ? "btn btn-success" : "btn btn-outline-success" 
              
            }
            onClick={() => Favorito(tweet)}
          >
            Favorito
          </button>
          
          <button
            type="button"
            className="ms-3 btn btn-danger"
            onClick={() => BorrarTweet(tweet.id)}
          >
            Borrar
          </button>
        </div>
      </div>
    </div>
    
  );

}

export default Tweet;