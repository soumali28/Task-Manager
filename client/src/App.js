import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import ToDo from "./pages/ToDo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/" element={<ToDo />} />
    </Routes>
  );
}

export default App;
