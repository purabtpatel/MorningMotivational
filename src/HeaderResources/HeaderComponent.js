import React from 'react'

function HeaderComponent(props) {
  function toggleTheme()
  {
    if(props.theme === 'Day')
    {
      props.setTheme('Night')
    }
    else{
      props.setTheme('Day')
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
