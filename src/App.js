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
import AddItem from './components/Pages/AddItem/AddItem';
import MyItem from './components/Pages/MyItem/MyItem';
import Loading from "./components/Shared/Loading/Loading";
import RequireAuth from "./components/Login/RequreAuth/RequireAuth";


function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <InventoryDetail></InventoryDetail>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/manageinventory"
          element={
            <RequireAuth>
              <ManageInventory></ManageInventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/additem"
          element={
            <RequireAuth>
              <AddItem></AddItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myitem"
          element={
            <RequireAuth>
              <MyItem></MyItem>
            </RequireAuth>
          }
        ></Route>

        <Route path="/*" element={<NotAvailable></NotAvailable>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
