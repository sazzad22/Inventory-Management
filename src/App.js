import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home/Home";
import Blogs from "./components/Pages/Blogs/Blogs";
import Login from "./components/Login/Login/Login";
import SignUp from "./components/Login/SignUp/SignUp";
import NotAvailable from "./components/Pages/NotAvailable/NotAvailable";
import InventoryDetail from "./components/Pages/InventoryDetail/InventoryDetail";
import ManageInventory from "./components/Pages/ManageInventory/ManageInventory";

function App() {
  return (
    <div >
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/inventory/:id" element={<InventoryDetail></InventoryDetail>}></Route>

        <Route path="/manageinventory" element={<ManageInventory></ManageInventory>} ></Route>

        <Route path="/*" element={<NotAvailable></NotAvailable>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
