import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loginpg from "./Pages/Loginpg";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpg />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
