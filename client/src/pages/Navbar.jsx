import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setCLick] = useState(false);

  function handleClick() {
    setCLick(!click);
  }
  return (
    <div className="bg-gradient-to-r from-purple-400 via-purple-700 to-purple-900 p-4 text-purple-100 text-right">
      <button>Logout</button>
    </div>
  );
}

export default Navbar;
