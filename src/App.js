import React,{useState} from "react"
import './App.css';
import Mock from "./Mock.json"
import SetCriteria from "./SetCriteria";

function App() {

  const [items, setItems] = useState(Mock);
 
  return (
    <div className="container">
      <SetCriteria items={items} setItems={setItems} />
    </div>
  );
}

export default App;
