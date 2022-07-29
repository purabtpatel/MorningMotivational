import React from "react";
import Header from "./HeaderResources/Header";
import { useState } from "react";
import './App.css';
import { ThemeProvider } from "./ThemeContext";
import { useTheme, useThemeUpdate } from './ThemeContext'
function App() {
  
  return(
    <ThemeProvider>
      <Header/>
      <body className={useTheme()}>
        
      </body>
    </ThemeProvider>
      
  );
}

export default App;


