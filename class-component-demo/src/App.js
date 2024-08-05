import './App.css';
import { useState } from 'react';

function App() {
    let counter = 0;
    let [ counter2, setCounter2] = useState(0);

    const increase = () => {
        counter = counter +1;
        setCounter2(counter2+1);
        console.log('counter: ',counter, 'counter2 state: ',counter2 );
    }


  return (
    <div style={{margin: '100px'}}>
        <div>{counter}</div>
        <div>state:{counter2}</div>
        <button onClick={increase}>클릭하삼!</button>
        

    </div>
  );
}

export default App;
