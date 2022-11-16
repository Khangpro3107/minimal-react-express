import axios from "axios";
import {useState} from "react"
import './App.css';

function App() {

  const [msg, setMsg] = useState("");

  const handleClick = async () => {
    const res = await axios.get("/get")
    setMsg(res.data.msg)
  }

  return (
    <div>
      <button onClick={() => handleClick()} type="submit">Click</button>
      <h1>{msg ? msg : "No message!"}</h1>
    </div> 
  );
}

export default App;
