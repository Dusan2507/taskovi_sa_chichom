import React from 'react'

function Button() {

const buttonClick = () => {
	alert('klikno si me brate')
}

  return (
    <button onClick={buttonClick}>Button</button>
  )
}

export default Button