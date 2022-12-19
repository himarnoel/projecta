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
      <div className="relative  flex justify-center items-center">
        <div className="absolute">
          <h1 className="text-white text-4xl text-center">
            Watch Something <p>incredible</p>
          </h1>
        </div>
        <img src={hero} alt="" className="object-contain w-screen" />
      </div>

      <div className="flex flex-col px-5 pt-5 justify-center">
        <label htmlFor="">Search</label>
        <input type="text" className="border border-5 border-black" />
      </div>
      <p className="p-5 text-lg text-black font-semibold">Movie</p>
      <div className="flex px-5 overflow-auto  py-3">
        <div className="px-20 py-20 mr-3 bg-black flex justify-center items-center text-white rounded-lg">
          come
        </div>
        <div className="px-20 py-20  mr-3 bg-black flex justify-center items-center text-white rounded-lg">
          come
        </div>{" "}
        <div className="px-20 py-20  mr-3 bg-black flex justify-center items-center text-white rounded-lg">
          come
        </div>{" "}
        <div className="px-20 py-20  mr-3 bg-black flex justify-center items-center text-white rounded-lg">
          come
        </div>{" "}
        <div className="px-20 py-20  mr-3 bg-black flex justify-center items-center text-white rounded-lg">
          come
        </div>
      </div>
      <p className="pt-5 px-5 text-lg text-black font-semibold">Movie</p>
      <div className="flex px-5 overflow-auto  py-3">
        <div className="px-20 py-20 mr-3 bg-black flex justify-center items-center text-white rounded-lg">
          come
        </div>
        <div className="px-20 py-20  mr-3 bg-black flex justify-center items-center text-white rounded-lg">
          come
        </div>{" "}
        <div className="px-20 py-20  mr-3 bg-black flex justify-center items-center text-white rounded-lg">
          come
        </div>{" "}
        <div className="px-20 py-20  mr-3 bg-black flex justify-center items-center text-white rounded-lg">
          come
        </div>{" "}
        <div className="px-20 py-20  mr-3 bg-black flex justify-center items-center text-white rounded-lg">
          come
        </div>
      </div>
    </>
  );
};

export default App;
