import React, { useState } from "react";

const BgChange = ({ bg, b, t, tt }) => {
  let [mode, setmode] = useState(false);

  const change = () => {
    setmode(mode ? false : true);
    console.log(mode);
    if (!mode) {
      document.getElementById("main").style.backgroundColor = bg;
      document.getElementById("text").style.color = tt;
      document.getElementById("btn").innerHTML = "🔦";
    } else {
      document.getElementById("main").style.backgroundColor = b;
      document.getElementById("text").style.color = t;
      document.getElementById("btn").innerHTML = "🌚";
    }
  };

  return (
    <div>
      <div className="h-screen w-full m-auto">
        <div id="main" className=" w-full  h-screen  text-center p-1">
          <h1 className="text-black" id="text">
            Hello
          </h1>
          <div className="my-3 w-full flex justify-around">
            <button
              id="btn"
              onClick={() => change()}
              className="text-white bg-red-800 rounded-lg px-6 py-2 text-4xl"
            >
              Mode
            </button>
            {/* <button className="text-white bg-red-800 rounded-lg px-6 py-2">Light</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BgChange;
