import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home/Home";
import Blogs from "./components/Pages/Blogs/Blogs";
import Login from "./components/Login/Login/Login";
import SignUp from "./components/Login/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      
      <Header></Header>
      
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/home" element={<Home></Home>} ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>} ></Route>
        <Route path="/login" element={<Login></Login>} ></Route>
        <Route path="/signup" element={<SignUp></SignUp>} ></Route>


      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
