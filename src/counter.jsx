import { useState ,useEffect } from "react";

export default function Counter() {
    let [count ,setCount] = useState(0);
    let [countx ,setCountx] = useState(0);

    let incCount = ()=>{
        setCount((currCount)=> currCount+1);
    };

    let incCountx = ()=>{
        setCountx((currCount)=> currCount+1);
    };

    useEffect (
        function sideEffect(){
            console.log("this is a side effect");
        },[count]
    );
  return (
    <div>
      <h3>count={count}</h3>
      <button onClick={incCount}>counter +1</button>
      <h3>countx={countx}</h3>
      <button onClick={incCountx}>counter +1</button>
    </div>
  );
}
