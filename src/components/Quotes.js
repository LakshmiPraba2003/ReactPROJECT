import React,{useState,useEffect, useContext} from "react";
import twitter from '../assets/twitter.jpg';
//import tumblr from '../assets/tumblr.jpg';
import axios from "axios";

const baseURL = "https://dummyjson.com/quotes";


const Quotes=()=>{
    const [post, setPost] = React.useState(null);
  const [randomNumber, setRandomNumber] = useState(0);
 



  function handleClick() {
    setRandomNumber(Math.floor(Math.random() * 29) + 1);
    

  }



//Axios using Functional Component

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  console.log(post);

  if (!post) return null;

    return(
      <div>
      <h3 id="header">Random Quote Machine</h3>
        <div id="quote-box">
        
           <div id="text"><p>{post.quotes[randomNumber].quote}</p></div>
           <div id="author">{post.quotes[randomNumber].author}</div>
           <div id="buttons">
              <div className="socialMedia">
                 <a href={`https://twitter.com/intent/tweet?text=${Quotes}`} id="twet-quote">
                 <span><img src={twitter} alt=""/></span>
                 
                 
                 </a>
                 {/*<a href={`https://www.tumblr.com/intent/tumblr?text=${Quotes}`} id="tumlr-quote">
                 <span><img src={tumblr} alt=""/></span>
    </a>*/}
              </div>
              <button id="new-quote" type="submit" onClick={handleClick
            }>New Quote</button>
           </div>
        </div>
        <h3 id="footer">By<br></br>
        Lakshmi Praba<br></br>
        727721EUEE042</h3>
        </div>
    )
}

export default Quotes;