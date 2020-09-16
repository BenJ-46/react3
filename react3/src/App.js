import React, { useState } from 'react';


function App() {
// everything in [] brackets is whatever you want to name it

const [countState, setCountState] = useState({
  count:0,
  message:'Hello'
})


//whatever comes after const is a variable so you can change it to whatever you want
countState.adder = () => {
  setCountState({ ...countState, count: countState.count + 1 })
}

countState.subtract = () => {
  setCountState({ ...countState,  count: countState.count - 1 })
}

countState.reset = () => {
  setCountState({ ...countState,  count: countState.count = 0 })
}


  return (
    <>
    <h1>Count: {countState.count}</h1>
    <button onClick ={countState.adder}> plus </button>
    <button onClick={countState.subtract}> subtract</button>
    <button onClick={countState.reset}> reset </button>
    </>
  );
}

export default App;
