import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function TodoList() {
  // fetching the data
  const [data, setData] = useState([]);
  async function fetchData() {
    try {
      const res = await axios({
        method: "GET",
        url: "api/todos",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
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
        url: "api/todos/" + id,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
    } catch (err) {
      console.log(err);
    }

    fetchData();
  };

  return (
    <div className="flex justify-center items-center">
      <div className="list text-left p-10">
        {/* mapping will start form here */}
        {data.map((item) => {
          return (
            <div
              className="mb-4 flex justify-between items-center border-b  border-zinc-600"
              key={item._id}
            >
              <div className="flex items-center justify-center">
                {" "}
                <Form.Check color="success" type="checkbox" className="mr-3 mb-2" />
                <p className="text-xl text-zinc-400">{item.task}</p>
              </div>

              <div>
                <Link to={"/todo:" + `${item._id}`} state={{ prop: item }}>
                  <button className="mx-3 px-2 py-2 text-green rounded-lg hover:bg-green hover:text-purple-100 hover:border-none">
                    <FaEdit />
                  </button>
                </Link>

                <button
                  className="mx-3 px-2 py-2 text-pink-700 rounded-lg hover:bg-pink-700 hover:text-purple-100 hover:border-none"
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
