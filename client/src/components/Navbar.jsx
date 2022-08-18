import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./styles/navbar.css"

function Navbar() {
  const [click, setCLick] = useState(false);

  function handleClick() {
    setCLick(!click);
  }

  return (
    <div className="navBar bg-zinc-700 p-3 text-purple-100 flex justify-between items-center shadow-[0_0_60px_-15px_rgba(0,0,0,0.7)]">
      <Link to="/" className="text-xl navTitle">
        Task<span className="text-pink-700">W</span>izard
      </Link>

      <div>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/notes" className="mx-4">Notes</Link>
        <Link to="/profile">Profile</Link>
      </div>
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
          <button className="hover:bg-zinc-500 p-1 rounded-md">LogOut</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
