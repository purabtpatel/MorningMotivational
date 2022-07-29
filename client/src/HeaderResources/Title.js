import React, { Component } from 'react'
import { useTheme, useThemeUpdate } from '../ThemeContext'
export default function Title(){

  return(
    <h1 className={useTheme()}>Morning Motivational</h1>
  )

}