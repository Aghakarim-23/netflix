import React from "react";

const Entry = () => {
  return (
    <div className="w-[800px] h-[80vh] flex flex-col justify-center items-center text-white text-center gap-6">
      <h1 className="text-[60px] font-black">Unlimited movies, TV shows, and more</h1>
      <p className="text-[20px] font-semibold">Starts at $6.99. Cancel anytime.</p>
      <p className="font-normal">Ready to watch? Enter your email to create or restart your membership.</p>
      <div className="flex gap-[8px]">
        <input type="email" placeholder="Enter email" className="pl-2 rounded-md w-[372px] h-[55px] border-[1px] outline-none border-zinc-300" />
        <button className="bg-red-600 w-[200px] h-[55px] rounded-md hover:cursor-pointer">Get started</button>
      </div>
    </div>
  );
};

export default Entry;
