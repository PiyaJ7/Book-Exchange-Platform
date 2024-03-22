import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loginpg from "./Pages/Loginpg";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpg />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
