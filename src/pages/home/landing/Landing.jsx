import React from "react";
import Navbar from "./components/Navbar";
import Entry from "./components/Entry";

const Landing = () => {
  return (
    <div className="h-screen bg-[url('assets/bgImageNetflix.jpeg')] bg-cover bg-black/70 bg-blend-overlay">
      <Navbar />
      <div className="flex justify-center ">
          <Entry />
      </div>
    </div>
  );
};

export default Landing;
