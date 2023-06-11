import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
const [input, setInput] = useState(0)
const handleClick = ()=>{
  setInput(input+1);
}

  return (
    <div>
        <p>Button clicked {input} times</p>
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default App