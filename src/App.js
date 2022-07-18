import React from "react";
import HeaderComponent from "./HeaderResources/HeaderComponent";
import { useState } from "react";
import './App.css';
function App() {
  const [theme,setTheme] = useState('day');
  return(
    <>
      <HeaderComponent
      value = {"Temp Variable"}
      theme = {theme}
      setTheme = {setTheme}
      />
      
      <p className={theme}>{theme}</p>
    </>
  );
}

export default App;


