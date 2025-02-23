import React from 'react'
import Form from '../../common/Form'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const navigate = useNavigate()

  const formInputs = [
    {
      name: "username",
      type: "text",
      placeholder: "Username",
      style: "border-[1px] border-zinc-300 pl-2 rounded-md text-white w-[314px] h-[56px] outline-none"
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email",
      style: "border-[1px] border-zinc-300 pl-2 rounded-md text-white w-[314px] h-[56px] outline-none"
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      style: "border-[1px] border-zinc-300 pl-2 rounded-md text-white w-[314px] h-[56px] outline-none"
    }

  ]

  const formButtons = [
    {
      title: "Already Have an Account ?",
      style: "text-[#b5b5b5]"
    },
    {
      title: "Sign in",
      style: "text-white hover:cursor-pointer",
      action: () => navigate('/signIn')
    },
  ]


  return (
    <div className="h-screen bg-[url('assets/bgImageNetflix.jpeg')] bg-cover bg-black/70 bg-blend-overlay flex flex-col justify-center items-center">
      <div className='w-[450px] h-[469px] rounded-lg p-16 bg-black/50 bg-blend-overlay'>
        <h1 className='text-[32px] font-bold text-white mb-[29px]'>Sign Up</h1>
        <Form formInputs={formInputs} formButtons={formButtons}/>
      </div>
    </div>  
  )
}

export default SignIn