import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home/Home";
import Blogs from "./components/Pages/Blogs/Blogs";

function App() {
  return (
    <div className="App">
      
      <Header></Header>
      
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/home" element={<Home></Home>} ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>} ></Route>
        <Route path="/" element={<Home></Home>} ></Route>


      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
