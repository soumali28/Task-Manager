import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setCLick] = useState(false);

  function handleClick() {
    setCLick(!click);
  }
  return (
    <div className="bg-gradient-to-r from-purple-400 via-purple-700 to-purple-900 p-4 text-purple-100 text-right">
      <Link to={click ? "/todo" : "/completed"}>
        <button className="mx-3" onClick={handleClick}>
          {click ? "My Todos" : "Completed"}
        </button>
      </Link>

      <button>Logout</button>
    </div>
  );
}

export default Navbar;
