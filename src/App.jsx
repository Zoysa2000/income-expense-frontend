
import ChildComponent from "./Components/ChildComponent.jsx";
import {useState} from "react";
import {MyContext} from "./context/context.jsx";

function App() {
    const [name,setName] = useState("Thilina")
    const[names,setNames]=useState(['Kasun','Namal','Tharindu'])
  return (
      <>
          <MyContext.Provider value ={{ name, names }}>
              <ChildComponent
              />

          </MyContext.Provider>
      </>

  );
}

export default App;
