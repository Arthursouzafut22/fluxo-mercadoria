import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRouter from "../components/Private/PrivateRouter";
import Dashboard from "../pages/Dashboard/Dashboard";
import { Layout } from "../components/Private/Layout";
import Products from "../pages/Products/Products";

export function RoutesAplicattion() {
  return (
    <BrowserRouter>
      <Layout>
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
          <Route path="/produtos" element={<Products />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
