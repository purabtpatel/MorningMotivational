import React from 'react'
import './Header.css'
import  Title from './Title'
import Profile from './Profile'
import { useTheme, useThemeUpdate } from '../ThemeContext'

export default function Header(props) {
  const theme = useTheme()
  const updateTheme = useThemeUpdate()
  return (
    <> 
      <div className='Header'>

        <button onClick={updateTheme} className={theme}>
          {theme}
        </button>

        <Title/> 
        <Profile/>
      </div>
    </>
  )
}