import React, { useState } from "react";
import "./styles/signin.css";

function SignIn() {
  const [click, setClick] = useState(false);

  function login() {
    setClick(!click);
  }

  return (
    <div className="bg-gradient-to-r from-purple-400 via-purple-700 to-purple-900 contain">
      <div className="items ">
        <div className="sign_in_container text-center">
          <h1 className="text-5xl mb-4 text-zinc-900">
            {click ? "Login" : "SignUp"}
          </h1>

          <div className="text-left">
            <form>
              <label className="block">
                <span className="block text-xl font-medium text-slate-700">
                  Username:
                </span>
                <input
                  type="text"
                  placeholder="Enter username"
                  className="mt-1 mb-3 block w-full px-12 py-2 bg-transparent border border-slate-300 rounded-md text-md shadow-md placeholder-zinc-700
      focus:outline-none focus:border-purple-900 focus:ring-1 focus:ring-purple-900"
                />
              </label>
              {click ? null : (
                <label className="block">
                  <span className="block text-xl font-medium text-slate-700">
                    Email:
                  </span>

                  <input
                    type="email"
                    placeholder="xyz@example.com"
                    className="mt-1 mb-3 block w-full px-12 py-2 bg-transparent border border-slate-300 rounded-md text-md shadow-md placeholder-zinc-700
      focus:outline-none focus:border-purple-900 focus:ring-1 focus:ring-purple-900"
                  />
                </label>
              ) }
              <label className="block">
                <span className="block text-xl font-medium text-slate-700">
                  Password:
                </span>

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="mt-1 mb-4 block w-full px-12 py-2 bg-transparent border border-slate-300 rounded-md text-md shadow-md placeholder-zinc-700
      focus:outline-none focus:border-purple-900 focus:ring-1 focus:ring-purple-900"
                />
              </label>

              <button
                className="mt-4 mb-2 mx-8 block w-3/4 px-3 py-2 bg-transparent  border-slate-300 rounded-md text-md shadow-md shadow-purple-800/60 placeholder-zinc-700
      focus:outline-none focus:border-sky-500 focus:ring-1 hover:bg-rose hover:text-purple-100 hover:border-none focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 
    "
              >
                {click ? "Login" : "Register"}
              </button>
            </form>
          </div>

          <p className="text-xl">OR</p>
          <p>
          {click ? "Not an user" : "Already an user"}? <button onClick={login}> {click ? "Register" : "Login"}</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
