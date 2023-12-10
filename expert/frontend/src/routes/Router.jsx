import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import Experts from "../pages/Experts/Experts";
import Services from "../pages/Services";
import MyAccount from "../Dashboard/User-Account/MyAccount";

import Dashboard from "../Dashboard/Expert-Account/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import ExpertDetails from "../pages/Experts/ExpertDetails";
import Contact from "../pages/Contact";
import CheckoutSuccess from "../pages/CheckoutSuccess";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/experts" element={<Experts />} />
      <Route path="/experts/:id" element={<ExpertDetails />} />
      <Route path="/services" element={<Services />} />
      <Route
        path="/users/profile/me"
        element={
          <ProtectedRoute allowedRoles={["client"]}>
            <MyAccount />
          </ProtectedRoute>
        }
      />
      <Route
        path="/experts/profile/me"
        element={
          <ProtectedRoute allowedRoles={["expert"]}>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/checkout-success" element={<CheckoutSuccess />} />
    </Routes>
  );
};

export default Router;
