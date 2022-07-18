import React from "react";
import HeaderComponent from "./HeaderResources/HeaderComponent";
import { useState } from "react";
function App() {
  const [theme,setTheme] = useState('Day');
  return(
    <>
      <HeaderComponent
      value = {"Temp Variable"}
      theme = {theme}
      setTheme = {setTheme}
      />
      <p>{theme}</p>
    </>
  );
}

export default App;


