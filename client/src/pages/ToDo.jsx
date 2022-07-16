import React, { useState } from "react";
import "./styles/todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";
import TodoList from "../components/TodoList";
import axios from "axios";

function ToDo() {
  const [data, setData] = useState([
    {
      task: "",
      desp: "",
    },
  ]);

  const handleInput = (input) => (e) => {
    const { value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [input]: value,
    }));
  };

  async function postTask() {
    try{
      const res = await axios({
        method: "POST",
        url: "http://localhost:8000/api/todos",
        data: data
      })
      alert("Form submitted succesfully")
    }
    catch(err){
      alert("Opps something went wrong");
      return[];
    }
  }

  return (
    <>
      <Navbar />
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
              onChange={handleInput("task")}
              className="mt-1 mb-3 mx-3 w-1/3 px-12 py-2 bg-transparent border border-slate-300 rounded-md text-md shadow-md placeholder-zinc-700
      focus:outline-none focus:border-purple-900 focus:ring-1 focus:ring-purple-900"
            />
            <input
              type="text"
              name="desp"
              onChange={handleInput("desp")}
              placeholder="Stop Procastinating!"
              className="mt-1 mb-3 w-1/2 px-12 py-2 bg-transparent border border-slate-300 rounded-md text-md shadow-md placeholder-zinc-700
      focus:outline-none focus:border-purple-900 focus:ring-1 focus:ring-purple-900"
            />
            <button onClick={postTask}>
              <FontAwesomeIcon icon={faPlusCircle} className="icon" />
            </button>
          </div>
        </div>
        <TodoList />
      </div>
    </>
  );
}

export default ToDo;
