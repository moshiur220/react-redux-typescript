import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import AddNewMovie from "../pages/Dashboard/AddNewMovie";
import Movie from "../pages/Dashboard/Movie";
import PrivateRoutes from "./PrivateRoutes";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/movie"
          element={
            <PrivateRoutes>
              <Movie />
            </PrivateRoutes>
          }
        />
        <Route
          path="/new-movie"
          element={
            <PrivateRoutes>
              <AddNewMovie />
            </PrivateRoutes>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
