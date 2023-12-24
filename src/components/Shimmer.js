import React from "react";

const Shimmer = () => {
  return (
    <div className="w-[80%] absolute my-20 mx-auto right-0 left-0 p-12 rounded-md border border-black">
      <div className="bg-slate-100 pt-4 pb-4 pl-5 border-b-2 border-spacing-4">
        <h1 className="font-bold text-2xl " />
      </div>
      <div>
        <h3 className="font-semibold pl-10 pt-6 text-lg" />
      </div>
      <div className="flex pl-16 pt-10">
        <input
          type="text"
          className="p-2 focus:bg-slate-100 transition-colors duration-300  border-spacing-1 mr-5 bg-slate-200 h-10 rounded-lg w-1/2"
        ></input>
        <input
          type="text"
          className="p-2 focus:bg-slate-100 transition-colors duration-300   border border-spacing-1 mr-5 bg-slate-200 h-10 rounded-lg w-36 "
        ></input>
        <button className="bg-purple-400 w-32 hover:bg-purple-500 rounded-lg"></button>
      </div>
    </div>
  );
};

export default Shimmer;
