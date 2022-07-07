import React from "react";
import Navbar from "./Navbar";

function Completed() {
  return (
    <> <Navbar />
    <div className="bg-gradient-to-r from-purple-400 via-purple-700 to-purple-900  contain text-center">
      <div className="items">
        <h1 className="text-3xl text-purple-300 block mt-6 mb-4 font-bold">
          Completed
        </h1>
        <br />
      </div>
      <div className="">
        <div className="flex justify-center items-center">
          <div className="list text-left">
            {/* mapping will start form here */}
            <div className="mb-4 flex justify-between items-center border-b pb-3 border-purple-700">
              <div>
                {" "}
                <h1 className="text-3xl line-through">Task 1</h1>
                <p className="text-xl line-through">Stop procastinating!</p>
              </div>
              <div>
                <button className="mx-3 px-8 py-2  border rounded-lg hover:bg-green hover:text-purple-100 hover:border-none">
                  Not Completed?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Completed;
