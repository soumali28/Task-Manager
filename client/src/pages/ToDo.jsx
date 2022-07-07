import React from "react";
import "./styles/todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

function ToDo() {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-purple-700 to-purple-900 contain text-center">
      <div className="items">
        <h1 className="text-3xl text-purple-300 block mt-6 mb-4 font-bold">
          My Todos
        </h1>
        <br />
        <div className="add_list">
          <input
            type="text"
            placeholder="Task 1"
            className="mt-1 mb-3 mx-3 w-1/3 px-12 py-2 bg-transparent border border-slate-300 rounded-md text-md shadow-md placeholder-zinc-700
      focus:outline-none focus:border-purple-900 focus:ring-1 focus:ring-purple-900"
          />
          <input
            type="text"
            placeholder="Stop Procastinating!"
            className="mt-1 mb-3 w-1/2 px-12 py-2 bg-transparent border border-slate-300 rounded-md text-md shadow-md placeholder-zinc-700
      focus:outline-none focus:border-purple-900 focus:ring-1 focus:ring-purple-900"
          />
          <FontAwesomeIcon icon={faPlusCircle} className="icon" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="list text-left">
          {/* mapping will start form here */}
          <div className="mb-4 flex justify-between items-center border-b pb-3 border-purple-700">
            <div>
              {" "}
              <h1 className="text-3xl">Task 1</h1>
              <p className="text-xl">Stop procastinating!</p>
            </div>
            <div>
              <button className="mx-3 px-8 py-2  border rounded-lg hover:bg-green hover:text-purple-100 hover:border-none">
                Completed
              </button>
              <button className="mx-3 px-8 py-2  border rounded-lg hover:bg-pink-700 hover:text-purple-100 hover:border-none">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
