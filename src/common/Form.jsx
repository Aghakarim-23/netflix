import React from 'react'
import Input from './Input'

const Form = ({formInputs, formButtons}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>

       <div className='w-[314px] h-[318px] flex flex-col gap-3'>

           {formInputs.map(input => <Input inputData={input}/>)}
           
            <button className='bg-red-600 text-white h-[40px] rounded-md hover:cursor-pointer' >Sign In</button>
            <div className='flex justify-center gap-1'>
                {formButtons.map(button => (
                    <button onClick={button.action} className={button.style}>{button.title}</button>
                ) )}
                
            </div>
        </div>
  </form>
  )
}

export default Form