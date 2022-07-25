import React from 'react'

function HeaderComponent(props) {
  function toggleTheme()
  {
    if(props.theme === 'day')
    {
      props.setTheme('night')
    }
    else{
      props.setTheme('day')
    }
  }
  return (
    <>
    <button onClick={toggleTheme}>Theme</button>
    <p>{props.value}</p>
    </>
  )
}
export default HeaderComponent;
