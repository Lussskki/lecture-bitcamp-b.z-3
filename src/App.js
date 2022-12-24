import { useState } from 'react';
import CounterButton from './CounterButton';

function App() {
  const [count, setCount] = useState(0)



  return (
    <div className="App">
      <CounterButton count={count} setCount={setCount}/>
      <CounterButton count={count} setCount={setCount}/>



    </div>
  );
}

export default App
