// import logo from './logo.svg';
import {Timer} from './components/Timer'
import './App.css';
import {useState} from 'react'

function App() {
  const [show, setShow] = useState(true)
  return (
    <div className="App">
      {show ? <Timer finalValue = {10} initialValue = {1}/> : ""}
      <button onClick={() => {
      setShow(show ? false : true)
      }}>
      {show ? "Clean Timer" : "Show Timer"}
    </button>
    </div>
  );
}

export default App;
