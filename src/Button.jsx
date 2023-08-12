import React from 'react'

function Button() {

const buttonClickBre = () => {
	alert('klikno si me brate')
}

  return (
    <button onClick={buttonClickBre}>Button</button>
  )
}

export default Button