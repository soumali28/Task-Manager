import React from "react";
import "./styles/todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

function ToDo() {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-purple-700 to-pink-600 contain text-center">
      <div>
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
          <FontAwesomeIcon icon={faPlusCircle} className="icon"/>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
