import { useState } from 'react'
import Form from '../../common/Form'
import { useNavigate } from 'react-router-dom'
import { useStore } from 'zustand'
import {authStore} from '../../store/store'

const SignIn = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({})
  const {addToken} = useStore(authStore)

  const formInputs = [
    {
      name: "email",
      type: "email",
      placeholder: "Email",
      style: "border-[1px] border-zinc-300 pl-2 rounded-md text-white w-[314px] h-[56px] outline-none",
      setFormData: setFormData

    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      style: "border-[1px] border-zinc-300 pl-2 rounded-md text-white w-[314px] h-[56px] outline-none",
      setFormData: setFormData
    }

  ]

  const formButtons = [
    {
      title: "New to Netflix ?",
      style: "text-[#b5b5b5]"
    },
    {
      title: "Signup now",
      style: "text-white hover:cursor-pointer",
      action: () => navigate("/signUp")
    },
  ]

  const signIn = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/v1/auth/login', {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      })

      const data = await response.json()
      console.log(data)
      addToken(data.token)
      navigate('/home')
      
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="h-screen bg-[url('assets/bgImageNetflix.jpeg')] bg-cover bg-black/70 bg-blend-overlay flex flex-col justify-center items-center">
      <div className='w-[450px] h-[469px] rounded-lg p-16 bg-black/50 bg-blend-overlay'>
        <h1 className='text-[32px] font-bold text-white mb-[29px]'>Sign In</h1>
        <Form formInputs={formInputs} formButtons={formButtons} formData={formData} signIn={signIn}/>
      </div>
    </div>  
  )
}

export default SignIn