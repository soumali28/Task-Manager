import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import SignIn from "./pages/SignIn";
import ToDo from "./pages/ToDo";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/todo" element={<ToDo />} />
      </Routes>
    </>
  );
}

export default App;
