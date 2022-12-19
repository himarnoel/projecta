import React from "react";
import logo from "./assets/MyTestApp.png";
import hero from "./assets/hero.png";
const App = () => {
  return (
    <>
      <div className="p-10 bg-[rgb(41,41,41)]">
        <div className="p-2 border  border-5  border-white">
          <img src={logo} alt="" className="mx-auto object-contain w-32" />
        </div>
      </div>
      <div className="absolute">
        <img src={hero} alt=""  className="object-contain w-screen"/>
        
      </div>
    </>
  );
};

export default App;
