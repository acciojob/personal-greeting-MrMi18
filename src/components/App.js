
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
   const[name,setName] = useState()

 
   
  
  
  return (
    <div>
        
        <label htmlFor="name" id="name">Enter your name</label>
        <br/>
        <input id="name"onChange={(e) =>{
           setName (e.target.value)
        }}/>
        <p>{name && `Hello ${name}!`}</p>
    </div>
  )
}

export default App
