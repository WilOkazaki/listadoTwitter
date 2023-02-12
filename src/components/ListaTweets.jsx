
import Tweet from "./Tweet";

const ListaTweet = ({ listaTweets, Favorito, BorrarTweet }) => {

  return (

    <div>
      {listaTweets.map((item) => (
        <Tweet
        
          Favorito={Favorito}
          BorrarTweet={BorrarTweet}
          key={item.id}
          tweet={item}
          
        />
      ))}
    </div>
    
  );

}

export default ListaTweet;