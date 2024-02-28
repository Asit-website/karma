import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from "./Components/auth/Signup";
// import Signup from "./Components/auth/Login";
import Login from "./Components/auth/Login";
import Signup from "./Components/auth/Signup";
import Question1 from "./Components/Pages/Question1";
import Question2 from "./Components/Pages/Question2";
import Question3 from "./Components/Pages/Question3";
import Karmascore from "./Components/Pages/karmascore";
import Karmascore1 from "./Components/Pages/karmascore1";
import Thanku from "./Components/Pages/thanku";
import Navbar from "./Components/Pages/Navbar";
import Home from "./Components/Pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/question" element={<Question1/>}/>
          <Route path="/karmascore" element={<Karmascore/>}/>
          <Route path="/karmascore1" element={<Karmascore1/>}/>
          <Route path="/thanku" element={<Thanku/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
