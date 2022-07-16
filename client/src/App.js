import { Route, Routes } from "react-router-dom";
import UpdateTodo from "./components/UpdateTodo";
import Completed from "./pages/Completed";
import Navbar from "./pages/Navbar";
import SignIn from "./pages/SignIn";
import ToDo from "./pages/ToDo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/todo:id" element={<UpdateTodo />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </>
  );
}

export default App;
