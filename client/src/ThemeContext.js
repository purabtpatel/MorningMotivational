import React, { useState, useContext } from "react";

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

export function useTheme(){
    return useContext(ThemeContext)
}

export function useThemeUpdate(){
    return useContext(ThemeUpdateContext)
}

export function ThemeProvider({children}){
    const [theme, setTheme] = useState('day')

    function toggleTheme(){
        if(theme =='day'){
            setTheme('night')
        }
        else{
            setTheme('day')
        }
        
    }
    return(
        <ThemeContext.Provider value = {theme}>
            <ThemeUpdateContext.Provider value = {toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}