import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// Importing components
import Scorecard from './components/Scorecard.js';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Scorecard total={count} />
      {[...Array(10)].map((x, i) =>
        <button onClick={() => setCount(count + (i + 1))}>{i + 1}</button>
      )}
      <button onClick={() => setCount(0)}>Clear</button>
    </div>
  );
}

export default App;
