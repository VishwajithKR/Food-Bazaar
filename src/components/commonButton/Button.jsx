import React from 'react'

const Button = ({title,handleClick,disabled=false,className}) => {
  return (
    <button onClick={handleClick} disabled={disabled} className={`cursor-pointer flex justify-center items-center px-4 py-1 border font-[500] rounded-2xl text-lg ${className}`}>{title}</button>

  )
}

export default Button