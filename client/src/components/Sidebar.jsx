import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="inline-block w-1/4 absolute left-0 bg-zinc-700 p-3 text-zinc-400 min-h-screen z-100">
      <div className="mb-2 flex">
        <div className="w-10">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
            alt="userprofile"
            className="w-full rounded-lg"
          ></img>
        </div>
        <span className="text-2xl ml-2">Ram Lal</span>
      </div>
      <hr className="text-purple-100"></hr>
      {/* mapping will start from here */}
      <div className="navBar p-2 hover:bg-zinc-500 rounded-md mb-2">
        <Link to="/dashboard-todo:id">
          <div className="flex items-center">
            <input
              type="color"
              value="#2CAAA2"
              className="w-10 h-10 colorPicker"
            />
            <span className="ml-3 text-xl text-zinc-400">Category Name</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
