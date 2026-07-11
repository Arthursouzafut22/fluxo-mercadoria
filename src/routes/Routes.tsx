import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import PrivateRouter from "../components/private/PrivateRouter";

export function RoutesAplicattion() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRouter>
              <Home />
            </PrivateRouter>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
