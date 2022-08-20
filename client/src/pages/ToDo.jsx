import React from "react";
import "./styles/todo.css";
import Navbar from "../components/Navbar";
import TodoList from "../components/TodoList";
import Sidebar from "../components/Sidebar";

function ToDo() {
  return (
    <>
      <Navbar />
      <div className="relative">
        <Sidebar />

        <div className="bg-gradient-to-r from-zinc-700  via-zinc-900 to-zinc-700  contain text-center min-h-screen">
          <div>
            <div
              style={{ backgroundColor: "#2CAAA2" }}
              className="pt-32 pb-3 mb-12"
            >
              <div className="relative">
                <span
                  className="absolute left-1/4 bottom-0 ml-4 text-4xl"
                  style={{ color: "#FFF38C" }}
                >
                  Category Name
                </span>
              </div>
            </div>
            <TodoList />
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDo;
