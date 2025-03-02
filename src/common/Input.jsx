import React from 'react'

const Input = ({inputData}) => {
    const {type, name, placeholder, style, setFormData} = inputData
  return (
    <div>
        <input 
          onChange={(e) => { setFormData(prevState => ({...prevState, [name]: e.target.value}))  }}
          type={type} name={name} placeholder={placeholder} className={style} />
    </div>  
  )
}

export default Input