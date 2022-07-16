import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import UpdateTodo from "./UpdateTodo";

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
  const updateTask = (id) => () => {
    try {
      const res = axios({
        method: "PUT",
        url: "http://localhost:8000/api/todos/" + id,
      });
      setUpdate(!isUpdate);
    } catch (err) {
      console.log(err);
    }
    console.log(id);
  };

  const deleteTask = (id) => async () => {
    try {
      const res = await axios({
        method: "DELETE",
        url: "http://localhost:8000/api/todos/" + id,
      });
    } catch (err) {
      console.log(err);
    }

    fetchData();
  };
  return (
    <div className="flex justify-center items-center">
      <div className="list text-left">
        {/* mapping will start form here */}
        {data.map((item) => {
          return (
            <div className="mb-4 flex justify-between items-center border-b pb-3 border-purple-700">
              <div>
                {" "}
                <h1 className="text-3xl">{item.task}</h1>
                <p className="text-xl">{item.desp}</p>
              </div>

              <div>
                <button className="mx-3 px-2 py-2  rounded-lg hover:bg-green hover:text-purple-100 hover:border-none">
                  <FaCheck />
                </button>
                <Link to={"/todo:" + `${item._id}`} state={{ prop: item }}>
                  <button
                    className="mx-3 px-2 py-2  rounded-lg hover:bg-zinc-500 hover:text-purple-100 hover:border-none"
                    onClick={updateTask(item._id)}
                  >
                    <FaEdit />
                  </button>
                </Link>

                <button
                  className="mx-3 px-2 py-2 rounded-lg hover:bg-pink-700 hover:text-purple-100 hover:border-none"
                  onClick={deleteTask(item._id)}
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
