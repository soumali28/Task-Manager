import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

// components and pages
import UpdateTodo from "./components/UpdateTodo";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import ToDo from "./pages/ToDo";

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard-todo:id" element={<ToDo />} />
        <Route path="/todo:id" element={<UpdateTodo />} />
      </Routes>
    </>
  );
}

export default App;
