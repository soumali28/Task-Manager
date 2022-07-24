import React, { useState } from "react";
import "./styles/signin.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
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
    <div className="bg-gradient-to-r from-purple-400 via-purple-700 to-purple-900 contain min-h-screen">
      <div className="items ">
        <div className="sign_in_container text-center">
          <h1 className="text-5xl mb-4 text-zinc-900">Login</h1>
          <ToastContainer />
          <div className="text-left">
            <form>
              <label className="block">
                <span className="block text-xl font-medium text-slate-700">
                  Email:
                </span>

                <input
                  type="email"
                  required
                  onChange={handleInput("email")}
                  placeholder="xyz@example.com"
                  className="mt-1 mb-3 block w-full px-12 py-2 bg-transparent border border-slate-300 rounded-md text-md shadow-md placeholder-zinc-700
      focus:outline-none focus:border-purple-900 focus:ring-1 focus:ring-purple-900"
                />
                {error && !email && (
                  <span className="text-purple-200">*Enter valid email</span>
                )}
              </label>

              <label className="block relative">
                <span className="block text-xl font-medium text-slate-700">
                  Password:
                </span>

                <input
                  type={show ? "type" : "password"}
                  required
                  onChange={handleInput("password")}
                  placeholder="Enter your password"
                  className="mt-1 mb-4 block w-full px-12 py-2 bg-transparent border border-slate-300 rounded-md text-md shadow-md placeholder-zinc-700
      focus:outline-none focus:border-purple-900 focus:ring-1 focus:ring-purple-900"
                />
                {error && !password && (
                  <span className="text-purple-200">*Enter valid password</span>
                )}
                <div
                  className="absolute top-11 right-4"
                  onClick={handleShowPassword}
                >
                  {show ? <AiFillEye /> : <AiFillEyeInvisible />}
                </div>
              </label>

              <button
                type="button"
                className="mt-4 mb-2 mx-8 block w-3/4 px-3 py-2 bg-transparent  border-slate-300 rounded-md text-md shadow-md shadow-purple-800/60 placeholder-zinc-700
      focus:outline-none focus:border-sky-500 focus:ring-1 hover:bg-rose hover:text-purple-100 hover:border-none focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 
    "
                onClick={loginUser}
              >
                Login
              </button>
            </form>
          </div>
          {/* 
          <p className="text-xl">OR</p>
          <div className="flex m-2 p-3 justify-center">
          <GoogleOAuthProvider clientId="675405292284-0efsob6qfbner62gmhcvi8rr98nvgt3i.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={responseGoogle}
                onError={responseGoogle}
                text= {"continue_with"}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
                disabled={false}
              />
            </GoogleOAuthProvider>
          </div> */}

          <p>
            Not an User?
            <button
              type="button"
              onClick={RegisterPage}
              className="font-bold mx-1"
            >
              {" "}
              Register
            </button>
          </p>
        </div>
        <footer className="mb-3 text-purple-300 absolute bottom-0">
          Developed by{" "}
          <a
            className="text-purple-200"
            href="https://soumali.netlify.app/"
            target="_blank"
          >
            Soumali
          </a>
        </footer>
      </div>
    </div>
  );
}

export default Login;
