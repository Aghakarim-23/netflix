import React from 'react'

const Input = ({inputData}) => {
    const {type, name, placeholder, style} = inputData
  return (
    <div>
        <input type={type} name={name} placeholder={placeholder} className={style} />
    </div>  
  )
}

export default Input