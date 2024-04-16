import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loginpg from "./Pages/Loginpg";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import Profilepg from "./Pages/Profilepg";
import MyLibrary from "./Pages/MyLibrary";
import UploadBook from "./Pages/UploadBook";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const userContext = createContext();

function App() {
  const [user, setUser] = useState({});
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:5555/user/verify")
      .then((user) => {
        setUser(user.data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <userContext.Provider value={user}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Loginpg />}></Route>
            <Route path="/Signup" element={<Signup />}></Route>
            <Route path="/Dashboard" element={<Dashboard />}></Route>
            <Route path="/MyProfile" element={<Profilepg />}></Route>
            <Route path="/MyLibrary" element={<MyLibrary />}></Route>
            <Route path="/Upload-book" element={<UploadBook />}></Route>
          </Routes>
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
