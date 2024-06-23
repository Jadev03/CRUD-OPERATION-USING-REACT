import React from "react";
import { useState,useEffect } from "react";
import Insert from "./Insert";

function App() {
  const [name,setName]=useState('')
  const[Age,setAge]=useState('')
  const[cnum,setCnum]=useState('')
  const[Add,setAddress]=useState('')
  const API_URL='http://localhost:3500/0/'

  return (
    <div>
      <Insert 
      name={name} 
      setName={setName}
      Age={Age}
      setAge={setAge}
      cnum={cnum}
      setCnum={setCnum}
      Add={Add}
      setAddress={setAddress}
      />
    </div>
  );
}

export default App;
