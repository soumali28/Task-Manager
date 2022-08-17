import React from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

function AddCard() {
  return (
    <div className="categoryCard bg-zinc-600 inline-block p-4 rounded-md w-72 mr-12">
      <button className="mb-16 text-xl text-zinc-400 p-2 border-2 border-zinc-500 rounded-md inline-block">
        <FaPlus />
      </button>

      <p className="text-2xl text-purple-200">Add Category</p>
    </div>
  );
}

export default AddCard;
