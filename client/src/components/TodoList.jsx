import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

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

  // deleting the data

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

  // sets the id of the date and id of task
  // const [isClicked, setClick] = useState(false);

  // function completedTask() {
  //   setClick((prevValue) => {
  //     return !prevValue;
  //   });
  // }

  const [findId, setId] = useState([]);
  const completedTask = (id) => (e) => {
    const name = e.target.name;

    setId(id);

    console.log(findId);
  };

  // const completedTask = (id) => async (e) => {
  //   try {
  //     const res = await axios({
  //       method: "GET",
  //       url: "http://localhost:8000/api/todos/" + id,
  //     });
  //     setId(res.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   console.log(findId);
  // };
  return (
    <div className="flex justify-center items-center">
      <div className="list text-left">
        {/* mapping will start form here */}
        {data.map((item) => {
          return (
            <div
              className="mb-4 flex justify-between items-center border-b pb-3 border-purple-700"
              key={item._id}
            >
              <div>
                {" "}
                <h1
                  className={
                    findId === item._id ? "text-3xl line-through" : "text-3xl"
                  }
                >
                  {item.task}
                </h1>
                <p
                  className={
                    findId === item._id ? "text-xl line-through" : "text-xl"
                  }
                >
                  {item.desp}
                </p>
              </div>

              <div>
                <button
                  key={item._id}
                  type="button"
                  name={item._id}
                  onClick={completedTask(item._id)}
                  className="mx-3 px-2 py-2  rounded-lg hover:bg-green hover:text-purple-100 hover:border-none"
                >
                  <FaCheck />
                </button>
                <Link to={"/todo:" + `${item._id}`} state={{ prop: item }}>
                  <button className="mx-3 px-2 py-2  rounded-lg hover:bg-zinc-500 hover:text-purple-100 hover:border-none">
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
