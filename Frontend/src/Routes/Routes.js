import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import User from "../pages/User";
import Login from "../pages/SignInPage";
import Register from "../pages/Register";
import SingInPage from "../pages/SignInPage";
import Profile from "../pages/Profile";
import SingleNews from "../pages/SingleNews";
import Categories from "../pages/Categories";
import CategoryNews from "../pages/CategoryNews"

const PageRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/register" exact element={<Register />} />
      <Route path="/home" exact element={<Home />} />
      <Route path="/profile" exact element={<Profile/>} />
      <Route path="/singleNews/:id" element={<SingleNews/>} />
      <Route path="/categories" exact element={<Categories/>} />
      <Route path="/categories/:id" element={<CategoryNews/>} />
    </Routes>
  </Router>
);

export default PageRoutes;
