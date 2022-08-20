import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export default function AddTodo() {
  const [data, setData] = useState([
    {
      task: "",
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
    try {
      const res = await axios({
        method: "POST",
        url: "api/todos",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data: data,
      });
      alert("Form submitted succesfully");
      window.location.reload();
    } catch (err) {
      alert("Opps something went wrong");
      console.log(err);
      return [];
    }
  }

  return (
    <div className="add_list">
      <input
        type="text"
        placeholder="Task 1"
        onChange={handleInput("task")}
        className="mt-1 mb-3 mx-3 w-1/3 lg:px-12 py-2 p-2 bg-transparent border border-slate-300 rounded-md text-md shadow-md placeholder-zinc-700
focus:outline-none focus:border-purple-900 focus:ring-1 focus:ring-purple-900"
      />

      <button onClick={postTask}>
        <FontAwesomeIcon icon={faPlusCircle} className="icon" />
      </button>
    </div>
  );
}
