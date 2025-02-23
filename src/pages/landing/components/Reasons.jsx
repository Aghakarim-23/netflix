import React from 'react'
import img1 from '../../../assets/images/television.svg'
import img2 from '../../../assets/images/arrowDown.svg'
import img3 from '../../../assets/images/telescope.svg'
import img4 from '../../../assets/images/smile.svg'

const Reasons = () => {
    const reasonsData = [
        {
            title: "Enjoy on your TV",
            subTitle: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
            img: img1,
        },
        {
            title: "Download your shows to watch offline",
            subTitle: "Save your favorites easily and always have something to watch.",
            img: img2,
        },
        {
            title: "Watch everywhere",
            subTitle: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
            img: img3,
        },
        {
            title: "Create profiles for kids",
            subTitle: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
            img: img4,
        },
    ]

  return (
    <div className='bg-black flex flex-col justify-center gap-2 px-[148px]  h-screen'>
        <h3 className='text-[24px] text-white mb-[1rem]'>More Reasons to Join</h3>
        <div className='flex gap-[16px]'>
            {reasonsData.map(card => (
                <div className='w-[274px] h-[268px] flex flex-col justify-between gap-[16px] p-2 rounded-md bg-gradient-to-b from-[#192247] via-[#210E17] to-[#1a1a1a]'>
                    <h2 className='text-white text-[24px] font-bold'>{card.title}</h2>
                    <p className='text-[#bbbac3]'>{card.subTitle}</p>
                    <div className='flex justify-end'>
                        <img className='w-[72px] h-[72px] ' src={card.img} alt="cardImage" />
                    </div>
                </div>
            ) )}
        </div>
    </div>
  )
}

export default Reasons