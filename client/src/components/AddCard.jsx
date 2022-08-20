import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Modal, Button } from "react-bootstrap";
function AddCard() {
  const [openModal, setModal] = useState(false);
  const [categoryData, setCategoryData] = useState([
    {
      color: "",
      category_name: "",
    },
  ]);
  function openCategory() {
    setModal(true);
  }
  function closeCategory() {
    setModal(false);
  }

  const handleInput = (input) => (e) => {
    const { value } = e.target;
    setCategoryData((prevData) => ({
      ...prevData,
      [input]: value,
    }));
  };

  console.log(categoryData);

  return (
    <>
      <div className="categoryCard bg-zinc-600 inline-block p-4 rounded-md w-72 mr-12 relative">
        <button
          className="mb-16 text-xl text-zinc-400 p-2 border-2 border-zinc-500 rounded-md inline-block"
          onClick={openCategory}
        >
          <FaPlus />
        </button>

        <p className="text-2xl text-purple-200">Add Category</p>

        {openModal && (
          <div className="bg-zinc-700 rounded-md shadow shadow-md p-3 w-96 absolute top-0 left-0 shadow-[0_0_60px_-15px_rgba(0,0,0,0.9)]">
            <div className="flex justify-between items-center">
              <h4 className="text-purple-100">Add Category</h4>
              <button onClick={closeCategory}>
                <AiOutlineClose className="text-purple-100 text-2xl" />
              </button>
            </div>
            <hr className="text-purple-100"></hr>
            <div className="flex items-center mb-4">
              <span className="text-zinc-400 text-lg mr-4">
                Choose a colour
              </span>
              <input type="color" onChange={handleInput("color")} />
            </div>
            <div>
              <input
                type="text"
                placeholder="Name of the category"
                className="mt-1 mb-3 block w-full px-2 py-2 bg-zinc-900 text-md  text-zinc-500  placeholder-zinc-500
                  focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose"
                onChange={handleInput("category_name")}
              />
              <hr className="text-purple-100"></hr>
            </div>

            <div className="flex justify-end">
              <Button variant="danger">Save</Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default AddCard;
