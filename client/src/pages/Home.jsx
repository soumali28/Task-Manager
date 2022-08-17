import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import Img from "../assets/task.png";

function Home() {
  return (
    <div className="bg-gradient-to-r from-zinc-700  via-zinc-900 to-zinc-700 contain min-h-screen">
      <div className="bg-zinc-700 p-4 text-purple-100 flex justify-between items-center shadow-[0_0_60px_-15px_rgba(0,0,0,0.7)]">
        <Link to="/" className="text-xl">
          Task<span className="text-pink-700">W</span>izard
        </Link>

        <div className="flex justify-center items-center">
          <a
            href="https://github.com/soumali28/Task-Wizard"
            target="_blank"
            className="mx-2"
            rel="noreferrer"
          >
            <AiFillGithub className="text-2xl hover:text-zinc-500 rounded-md" />
          </a>
          <Link to="/login" className="mx-2">
            <button className="hover:bg-zinc-500 p-1 rounded-md">LogIn</button>
          </Link>
          <Link to="/signin">
            <button className="hover:bg-zinc-500 p-1 rounded-md">SignUp</button>
          </Link>
        </div>
      </div>

      <div className="flex">
        <div className="m-12 mt-28">
          <h3 className="text-6xl text-zinc-400 mb-12">
            Task<span className="text-pink-700">W</span>izard
          </h3>
          <p className="text-xl text-zinc-500 mb-8">
            Organizing tasks has never been so smooth. A todo app which tracks
            all your <br></br>important tasks.
          </p>
          <Link to="/signin">
            <button className="border border-rose p-2 hover:bg-rose hover:text-zinc-900 text-lg text-rose rounded-md">
              Join Now
            </button>
          </Link>
        </div>
        <div className="mt-12 mx-8">
          <img src={Img} alt="task picture"></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
