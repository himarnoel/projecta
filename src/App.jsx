import React, { useState } from "react";
import logo from "./assets/MyTestApp.png";
import hero from "./assets/hero.png";
import axios from "axios";
const App = () => {
  const [data, setdata] = useState({});
  const search = async (val) => {
    let response = await axios.get(
      `https://www.omdbapi.com/?t=${val}&apikey=b130f209`
    );
    if (response.status == 200) {
      setdata(response.data);
    }
    console.log(response.data);
  };
  return (
    <>
      <div className="p-8 sm:p-16 xl:p-10   bg-[rgb(41,41,41)]">
        <div className="p-2 w-fit border  border-5  border-white ">
          <img
            src={logo}
            alt=""
            className="mx-auto object-contain w-32 sm:w-36 md:w-56 lg:w-32 "
          />
        </div>
      </div>
      <div className="relative  flex lg:justify-start  items-center justify-center">
        <div className="absolute ">
          <h1 className="text-white text-4xl text-center md:hidden">
            Watch Something <p>incredible</p>
          </h1>
          <h1 className=" lg:ml-10 text-7xl  lg:leading-[4rem] lg:text-4xl xl:text-7xl text-center lg:text-left text-white hidden md:block">
            Watch <p>Something</p> <p>incredible</p>
          </h1>
        </div>
        <img
          src={hero}
          alt=""
          className="object-cover w-full xl:w-screen xl:h-[80vh]"
        />
      </div>

      <div className="flex flex-col px-5 pt-5 lg:py-6  justify-center xl:ml-10">
        <label
          htmlFor=""
          className="sm:text-2xl text-black md:text-4xl xl:text-2xl
           lg:mb-5 xl:mt-5"
        >
          Search
        </label>
        <input
          type="text"
          className="border border-5 border-black sm:py-2 "
          onChange={(e) => {
            search(e.target.value);
          }}
        />
      </div>
      <p className="px-5 pt-5  text-lg lg:py-10  xl:ml-10 text-black font-semibold sm:text-2xl md:text-4xl">
        Movie
      </p>
      <div className="flex px-5 overflow-auto h-84 xl:ml-10">
        <div className="relative">
          <div className="relative px-28 py-20 sm:py-28  md:text-3xl md:mr-4 xl:text-3xl xl:h-46  mr-3 bg-black flex justify-center items-center text-white rounded-lg">
            <div className="absolute">{data.Title}</div>
            <img src={data.Poster} alt="" className="object-scale-down" />
          </div>
        </div>
      </div>
      <p className="px-5 pt-5   text-lg lg:py-10  xl:ml-10 text-black font-semibold sm:text-2xl md:text-4xl">
        Movie
      </p>
      <div className="flex px-5 overflow-auto  py-3 xl:ml-10">
        <div className="px-28 py-20 sm:py-28  md:text-3xl md:mr-4 xl:text-3xl xl:py-36  mr-3 bg-black flex justify-center items-center text-white rounded-lg">
          come
        </div>
        <div className="px-28 py-20 sm:py-28  md:text-3xl md:mr-4 xl:text-3xl xl:py-36 mr-3 bg-black flex justify-center items-center text-white rounded-lg">
          come
        </div>{" "}
        <div className="px-28 py-20 sm:py-28  md:text-3xl md:mr-4 xl:text-3xl xl:py-36 mr-3 bg-black flex justify-center items-center text-white rounded-lg">
          come
        </div>{" "}
        <div className="px-28 py-20 sm:py-28  md:text-3xl md:mr-4 xl:text-3xl xl:py-36 mr-3 bg-black flex justify-center items-center text-white rounded-lg">
          come
        </div>{" "}
        <div className="px-28 py-20 sm:py-28  md:text-3xl md:mr-4 xl:text-3xl xl:py-36 mr-3 bg-black flex justify-center items-center text-white rounded-lg">
          come
        </div>
      </div>
    </>
  );
};

export default App;
