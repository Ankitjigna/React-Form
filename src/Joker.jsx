import { useState ,useEffect } from "react";

export default function Joker() {
  let [joke, setJoke] = useState({});

  const url = "https://official-joke-api.appspot.com/random_joke";

  const getNewJoke = async () => {
    let response = await fetch(url);
    let jsonRes = await response.json();
    setJoke({ setup: jsonRes.setup, punchline: jsonRes.punchline });
  };

  useEffect(()=>{
    async function getFirstJoke()  {
    let response = await fetch(url);
    let jsonRes = await response.json();
    console.log(jsonRes);
    setJoke({ setup: jsonRes.setup, punchline: jsonRes.punchline });
    }
    getFirstJoke();
  },[]);

  return (
    <div>
      <h3>Joker!</h3>
      <h2>{joke.setup}</h2>
      <h3>{joke.punchline}</h3>
      <button onClick={getNewJoke}>New Jokes</button>
    </div>
  );
}
