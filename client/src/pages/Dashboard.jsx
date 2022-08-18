import React from "react";
import Navbar from "../components/Navbar";
import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";
import "./styles/dashboard.css";
import AddCard from "../components/AddCard";

function Dashboard() {
  return (
    <div className="bg-gradient-to-r from-zinc-700  via-zinc-900 to-zinc-700 contain min-h-screen">
      <Navbar />
      <div className="mx-40">
        <div className="mb-8">
          <h1 className="mt-12 mb-4 text-4xl text-purple-200">Categories</h1>
          <hr className="text-zinc-500"></hr>
        </div>

        <div className="flex mx-4">
          {/* mapping will happen */}

          <div className="categoryCard bg-zinc-600 inline-block p-4 rounded-md w-72 mr-12">
            <div className="flex justify-between items-start mb-12">
              <input
                type="color"
                value="#2CAAA2"
                className="w-12 h-12 colorPicker"
              />
              <button>
                <FaTrash className="text-pink-700" />
              </button>
            </div>

            <p className="text-2xl text-purple-200">Category Name</p>
            <p className="text-zinc-400">0 tasks</p>
          </div>

          <AddCard />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
