import React from 'react'

const Button = ({txt='button',Submit,btnClass}) => {
  return (
    <button onClick={Submit} className={btnClass}>{txt}</button>
  )
}

export default Button