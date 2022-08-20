import React, { useState } from "react";
import "./styles/signin.css";
import { Link, useNavigate } from "react-router-dom";
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiFillGithub,
  AiFillGoogleCircle,
} from "react-icons/ai";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";


function Login() {
  // registering the user
  const [data, setData] = useState([
    {
      name: "",
      email: "",
      password: "",
    },
  ]);

  const handleInput = (input) => (e) => {
    const { value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [input]: value,
    }));
  };
  console.log(data);
  // validation of the form fields
  const [error, setError] = useState(false);
  const { email, password } = data;
  async function loginUser() {
    if (!email || !password) {
      setError(true);
    }
    try {
      const res = await axios({
        method: "POST",
        url: "api/users/login",
        data: data,
      });
      //   setting the token to local storage
      localStorage.setItem("token", res.data.token);
      toast.success("Login successfull");
      navigate("/todo");
    } catch (err) {
      //   toast.error("Oh no! An error occured");
      console.log(err);
      return [];
    }
  }

  // navigaion to login page
  const navigate = useNavigate();
  function RegisterPage() {
    navigate(-1);
  }

  const responseGoogle = (response) => {
    console.log(response);
  };

  // password show
  const [show, setShow] = useState(false);
  function handleShowPassword() {
    setShow(!show);
  }
  return (
    <div className="bg-gradient-to-r from-zinc-700  via-zinc-900 to-zinc-700 contain min-h-screen">
      <div className="navBar bg-zinc-700 p-3 text-purple-100 flex justify-between items-center shadow-[0_0_60px_-15px_rgba(0,0,0,0.7)]">
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
        </div>
      </div>
      <div className="items ">
        <h1 className="text-5xl mt-8 mb-6 text-purple-200">LogIn</h1>
        <span className="text-zinc-500 text-lg mb-4">
          Boost your productivity levels. Keep all your to-do's in one,
          organized place.
        </span>
        <div className="sign_in_container text-center">
          <ToastContainer />
          <div className="text-left mr-8">
            <form>
              <label className="block">
                <input
                  type="email"
                  required
                  onChange={handleInput("email")}
                  placeholder="xyz@example.com*"
                  className="mt-1 mb-3 block px-2 py-2 bg-zinc-900 text-md text-zinc-500  placeholder-zinc-500
                  focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose"
                />
                {error && !email && (
                  <span className="text-purple-200">*Enter valid email</span>
                )}
              </label>

              <label className="block relative">
                <input
                  type={show ? "type" : "password"}
                  required
                  onChange={handleInput("password")}
                  placeholder="Enter your password*"
                  className="mt-1 mb-3 block px-2 py-2 bg-zinc-900 text-md text-zinc-500 placeholder-zinc-500
                  focus:outline-none focus:border-rose focus:ring-1 focus:ring-rose"
                />
                {error && !password && (
                  <span className="text-purple-200">*Enter valid password</span>
                )}
                <div
                  className="absolute top-3 right-2 text-rose"
                  onClick={handleShowPassword}
                >
                  {show ? <AiFillEye /> : <AiFillEyeInvisible />}
                </div>
              </label>

              <button
                type="button"
                className="mt-4 mb-2 mx-4 block w-3/4 px-3 py-2 bg-gradient-to-r from-zinc-900 via-zinc-900 to-pink-700 rounded-md text-md text-purple-200"
                onClick={loginUser}
              >
                Login
              </button>
            </form>
          </div>
          <span className="text-xl text-zinc-400 mx-16 text-center">Or</span>
          <div>
            <button
              type="button"
              className="btns mt-4 mb-2 mx-8 flex items-center  px-3 py-2 rounded-md text-md text-purple-200"
            >
              <AiFillGoogleCircle className="mr-3 text-xl" />
              Sign in with Google
            </button>
            <button
              type="button"
              className=" btns mt-4 mb-2 mx-8 flex items-center  px-3 py-2 rounded-md text-md text-purple-200"
            >
              <AiFillGithub className="mr-3 text-xl" />
              Sign in with Github
            </button>
          </div>
        </div>
        <p className="text-zinc-500">
          Not an User?
          <button
            type="button"
            onClick={RegisterPage}
            className="font-bold mx-1 text-rose"
          >
            {" "}
            Register
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
