import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRouter from "../components/Private/PrivateRouter";
import Dashboard from "../pages/Dashboard/Dashboard";
import Header from "../components/Header/Header";

export function RoutesAplicattion() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/dashboard"
          element={
            <PrivateRouter>
              <Dashboard />
            </PrivateRouter>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
