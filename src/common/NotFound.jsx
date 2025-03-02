import { useNavigate } from "react-router-dom";
import Landing from "../pages/landing/Landing";
import { useEffect } from "react";

const NotFound = () => {
  const navigate = useNavigate();

  const redirectMainPage = () => {
    setTimeout(()=> {
      navigate('/')
    },3000)
  }

  useEffect(()=> {
    redirectMainPage()
  },[])

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-4">
        <p className="font-medium text-3xl">Page is not found</p>
        <button
          onClick={() => navigate("/landing")}
          className="bg-red-600 text-white w-[100px] h-[3rem] rounded-md hover:cursor-pointer"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
