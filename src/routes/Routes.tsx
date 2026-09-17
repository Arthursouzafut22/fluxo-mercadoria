import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRouter from "../components/Private/PrivateRouter";
import Dashboard from "../pages/Dashboard/Dashboard";
import { Layout } from "../components/Private/Layout";
import Products from "../pages/Products/Products";
import HomeRedirect from "../components/Private/HomeRedirect";
import Movements from "../pages/Movements/Movements";
import Reports from "../pages/Reports/Reports";

export function RoutesAplicattion() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<HomeRedirect />} />

        <Route element={<PrivateRouter />}>
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/movimentacoes" element={<Movements />} />
            <Route path="/relatorios" element={<Reports />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
