import React, {useState} from 'react';
import ComomponentA from "./ComponentA";
import userContext from "./Context/UserContext";

function UseContextRoot() {
  const [name,setName] = useState({name : "Sachin"})
    // const name = "Bhupesh"
    
  return (
    <>
    <userContext.Provider value={name}  >
      <h1>Deeply nested Components</h1>
      <ComomponentA />
      </userContext.Provider>
    </>
  );
}

export default UseContextRoot;