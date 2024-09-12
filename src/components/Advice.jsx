import React, { useEffect, useState } from "react";

function Advice() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  async function getAdvice(params) {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 4);
    console.log("data", data);
  }
  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>click me</button>
      <Message count={count}></Message>
    </div>
  );
}
function Message(props) {
  return <p>you have read {props.count} pieces of advice</p>;
}
export default Advice;
