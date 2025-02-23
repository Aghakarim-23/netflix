import React from 'react'
import logoNetflix from '../../../assets/images/logoNetflix.svg'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div className='flex justify-between items-center px-[144px] py-[20px]'>
        <img src={logoNetflix} alt="netflixLogo" />
        <div className='flex gap-[8px]'>
            <select className='w-[135px] h-[33px] bg-[#27272A] text-white rounded-md'>
                <option>English</option>
            </select>
            <button 
                onClick={() => navigate('/signIn')}
                className='bg-red-600 text-white w-[80px] h-[33px] rounded-md hover:cursor-pointer'>Sign In</button>
        </div>
</div>
  )
}

export default Navbar