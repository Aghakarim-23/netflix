import React, { useState } from 'react'

const Like = () => {
    const [liked, setLiked] = useState({})

    const handleClick = (index) => {
        setLiked((prevLiked) => ({...prevLiked, [index]: !prevLiked[index]}))
    }

    const cartoons = [
        "Tom and Jerry",
        "SpongeBob SquarePants",
        "The Simpsons",
        "Looney Tunes",
        "Adventure Time",
        "Rick and Morty",
        "Scooby-Doo",
        "The Flintstones",
        "Avatar: The Last Airbender",
        "Futurama"
      ];
      
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        {cartoons.map((card, index) => (
            <div key={index}
                 className='w-[400px] text-2xl   flex justify-between border-[1px] border-zinc-300 rounded-md p-3 my-1'
            >
                <h2>{card}</h2>
                <button onClick={() => handleClick(index)} className={`${liked[index] ? "text-red-600" : "text-black"} hover:cursor-pointer`}>&#9829;
                </button>
            </div>
        ))}
    </div>
  )
}

export default Like