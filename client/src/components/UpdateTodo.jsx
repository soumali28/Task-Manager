import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCheck, FaPlus } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function UpdateTodo(props) {
  const [data, setData] = useState([]);
  const dataValue = useLocation().state.prop;
  const fetchData = useLocation().state.fetchData;
  console.log(fetchData);
  const handleInput = (input) => (e) => {
    const { value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [input]: value,
    }));
  };
  const navigate = useNavigate();
  const updateTask = (id) => () => {
    try {
      const res = axios({
        method: "PUT",
        url: "api/todos:" + id,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: data,
      });
    } catch (err) {
      console.log(err);
    }
    navigate(-1);
  };
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-purple-400 via-purple-700 to-purple-900 contain text-center">
        <div className="items">
          <h1 className="text-3xl text-purple-300 block mt-6 mb-4 font-bold">
            Update Todo
          </h1>
          <br />
          <div className="add_list">
            <input
              type="text"
              defaultValue={dataValue.task}
              onChange={handleInput("task")}
              className="mt-1 mb-3 mx-3 w-1/3 px-12 py-2 bg-transparent border border-slate-300 rounded-md text-md shadow-md placeholder-zinc-700
      focus:outline-none focus:border-purple-900 focus:ring-1 focus:ring-purple-900"
            />
            <input
              type="text"
              defaultValue={dataValue.desp}
              onChange={handleInput("desp")}
              className="mt-1 mb-3 w-1/2 px-12 py-2 bg-transparent border border-slate-300 rounded-md text-md shadow-md placeholder-zinc-700
      focus:outline-none focus:border-purple-900 focus:ring-1 focus:ring-purple-900"
            />
            <button
              className="mx-8 my-4 p-2  rounded-lg hover:bg-zinc-700 hover:text-purple-100 hover:border-none"
              onClick={updateTask(dataValue._id)}
            >
              <FaCheck />
            </button>
            <Link to="/todo">
              <button className="mx-2 my-4 p-2  rounded-lg hover:bg-pink-700 hover:text-purple-100 hover:border-none">
                <FaPlus style={{ transform: "rotate(45deg)" }} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateTodo;
