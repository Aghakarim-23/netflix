import React from "react";
import Navbar from "./components/Navbar";
import Entry from "./components/Entry";
import Reasons from "./components/Reasons";

const Landing = () => {
  return (
    <div className=" bg-[url('assets/bgImageNetflix.jpeg')] bg-cover bg-black/70 bg-blend-overlay">
      <Navbar />
      <div className="h-screen flex  justify-center ">
          <Entry />
      </div>
          <Reasons/>
    </div>
  );
};

export default Landing;
