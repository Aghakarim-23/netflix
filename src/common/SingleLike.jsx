import { useState } from "react";

const SingleLike = () => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex text-5xl gap-4">
        <p>Heart</p>
        <button 
            onClick={() => setLiked(!liked)}
            className={`hover:cursor-pointer ${liked && "text-red-700"}`}>&#9829;</button>
      </div>
    </div>
  );
};

export default SingleLike;
