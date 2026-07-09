import {BrowserRouter, Route, Routes} from "react-router";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export function RoutesAplicattion(){

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    );



}