import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";

function TodoList() {
  // fetching the data
  const [data, setData] = useState([]);
  async function fetchData() {
    try {
      const res = await axios({
        method: "GET",
        url: "http://localhost:8000/api/todos",
      });
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  const [isUpdate, setUpdate] = useState(false);
  // updating the data
  async function updateTask() {
    try {
      const res = await axios({
        method: "PUT",
        url: "http://localhost:8000/api/todos",
      });
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
    setUpdate(!isUpdate);
  }

  async function deleteTask() {}
  return (
    <div className="flex justify-center items-center">
      <div className="list text-left">
        {/* mapping will start form here */}
        {data.map((item) => {
          return (
            <div className="mb-4 flex justify-between items-center border-b pb-3 border-purple-700">
              {isUpdate ? (
                <div>
                  {" "}
                  <input
                    type="text"
                    className="mt-1 mb-3 mx-3  px-12 py-2 bg-transparent  border-slate-300 rounded-md text-md shadow-sm placeholder-zinc-700
      focus:outline-none focus:border-none focus:ring-0 focus:ring-none"
                  />
                  <input
                    type="text"
                    className="mt-1 mb-3 mx-3  px-12 py-2 bg-transparent  border-slate-300 rounded-md text-md shadow-sm placeholder-zinc-700
      focus:outline-none focus:border-none focus:ring-0 focus:ring-none"
                  />
                </div>
              ) : (
                <div>
                  {" "}
                  <h1 className="text-3xl">{item.task}</h1>
                  <p className="text-xl">{item.desp}</p>
                </div>
              )}

              <div>
                {isUpdate ? null : (
                  <button className="mx-3 px-2 py-2  rounded-lg hover:bg-green hover:text-purple-100 hover:border-none">
                    <FaCheck />
                  </button>
                )}
                {isUpdate ? (
                  <button
                    className="mx-3 px-2 py-2  rounded-lg hover:bg-zinc-700 hover:text-purple-100 hover:border-none"
                    onClick={updateTask}
                  >
                    <FaCheck />
                  </button>
                ) : (
                  <button
                    className="mx-3 px-2 py-2  rounded-lg hover:bg-zinc-500 hover:text-purple-100 hover:border-none"
                    onClick={updateTask}
                  >
                    <FaEdit />
                  </button>
                )}

                <button
                  className="mx-3 px-2 py-2 rounded-lg hover:bg-pink-700 hover:text-purple-100 hover:border-none"
                  onClick={deleteTask}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TodoList;
